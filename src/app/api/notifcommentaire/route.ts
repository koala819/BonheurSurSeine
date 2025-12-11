import { NextResponse } from 'next/server'

import nodemailer from 'nodemailer'

export async function POST(req: Request): Promise<Response> {
  if (!req.body) {
    return NextResponse.json({
      status: 403,
      statusText: "Don't have form data...!",
    })
  }

  const body = await req.json()

  const email = process.env.MAIL_USER
  const pass = process.env.MAIL_PWD
  const host = process.env.MAIL_HOST
  const port = process.env.MAIL_PORT

  if (!email || !pass || !host || !port) {
    return NextResponse.json({
      status: 405,
      statusText: 'Missing environment variables',
    })
  }

  const transporter = nodemailer.createTransport({
    host: host,
    port: parseInt(port),
    secure: true,
    auth: {
      user: email,
      pass,
    },
    tls: { rejectUnauthorized: false },
  })

  // ----------------------------
  // ⬇️ FORMULAIRE RÉCEPTIONNÉ
  // ----------------------------
  const pseudo = body.pseudo || 'Anonyme'
  const comment = body.comment || ''
  const rating = body.rating || 0

  const mailOptions = {
    from: `"Avis Site BsS" <${email}>`,
    to: 'bonheursurseine@gmail.com;fabien.wheeler@gmail.com',
    subject: `💬 Nouvel avis (${rating}⭐) : ${pseudo}`,
    text: `
Pseudo : ${pseudo}
Note : ${rating}/5
Commentaire :
${comment}
    `,
    html: `
      <h2>Nouveau commentaire reçu</h2>
      <p><strong>Pseudo :</strong> ${pseudo}</p>
      <p><strong>Note :</strong> ${rating} ⭐</p>
      <p><strong>Commentaire :</strong><br>${comment}</p>
    `,
  }

  await transporter.sendMail(mailOptions)

  return NextResponse.json({
    status: 200,
    statusText: 'Email sent successfully',
  })
}
