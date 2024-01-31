'use client'

import { Button, Input, Textarea } from '@nextui-org/react'
import { RichText } from 'prismic-reactjs'
import { useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import Image from 'next/image'
import Link from 'next/link'

import bonheurSurSeine from '@/public/contact.jpg'

export default function Contact({ text }: { text: any }) {
  const [value, setValue] = useState('')

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const isInvalid = useMemo(() => {
    if (value === '') return false

    return validateEmail(value) ? false : true
  }, [value])

  const { control, handleSubmit } = useForm<any>()
  async function handleSendMail(values: {
    email: string
    firstName: string
    lastName: string
    msg: string
    tel: string
    society: string
  }) {
    const data = {
      email: values.email,
      prenom: values.firstName,
      nom: values.lastName,
      message: values.msg,
      societe: values.society,
      telephone: values.tel,
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        if (response.status === 200) {
          toast.success('Votre message a bien été envoyé')
        } else {
          toast.error("Une erreur s'est produite", response.statusText)
        }
      })
      .catch((error: any) => {
        toast.error("Une erreur s'est produite", error)
      })
  }

  const people = [
    { name: 'Matthieu', img: '/People.png' },
    { name: 'Kevin', img: '/People.png' },
    { name: 'Paul', img: '/People.png' },
    { name: 'Fabien', img: '/People.png' },
    { name: 'M. X', img: '/People.png' },
    { name: 'Xavier', img: '/People.png' },
    { name: 'Andrey', img: '/People.png' },
    { name: 'Fred', img: '/People.png' },
    { name: '??', img: '/People.png' },
    { name: '??', img: '/People.png' },
    { name: '??', img: '/People.png' },
    { name: '??', img: '/People.png' },
  ]

  return (
    <section className="container my-20 mx-auto space-y-8">
      <h1>Formulaire de contact</h1>
      <header className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list">
              <li>J&apos;ai envie de dire merci</li>
              <li>Je voudrais t&apos;écrire ou t&apos;envoyer un truc</li>
              <li>J&apos;ai un projet de partenariat à proposer</li>
              <li>Je souhaite t&apos;inviter à un événement</li>
              <li>
                Je voudrais ré-utiliser une partie de ton travail et/ou de ton
                image sur un site/blog/vidéo/etc.
              </li>
            </ul>
          </div>
          <div>
            <ul className="list">
              <li>Je voudrais faire une suggestion de sujet pour une vidéo</li>
              <li>J&apos;ai une question à poser</li>
              <li>J&apos;ai vu un bug, une erreur</li>
              <li>Je veux t&apos;insulter parce que tu fais de la merde</li>
              <li>Autre chose</li>
            </ul>
          </div>
        </div>
      </header>
      <section className="flex flex-col lg:flex-row my-4 lg:my-8">
        <aside className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
          <picture className="flex items-center justify-center px-4 w-full">
            <Image
              src={bonheurSurSeine}
              alt="Raphael"
              className="h-full w-full object-cover object-center rounded-2xl"
              priority
              width={500}
              height={500}
              placeholder="blur"
            />
          </picture>
        </aside>
        <aside className="w-full lg:w-1/2 flex justify-center">
          <div className="flex items-center justify-center w-full">
            <form onSubmit={handleSubmit(handleSendMail)} className="space-y-4">
              <div className="rich-text">{RichText.render(text)}</div>
              <div className="flex justify-between space-x-2">
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isRequired
                      type="text"
                      color={undefined}
                      variant="bordered"
                      label="Nom"
                      id="lastName"
                      onChange={onChange}
                      value={value}
                      className="max-w-full"
                    />
                  )}
                />

                <Controller
                  name="firstName"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isRequired
                      type="text"
                      color={undefined}
                      variant="bordered"
                      label="Prénom"
                      id="firstName"
                      onChange={onChange}
                      value={value}
                      className="max-w-full"
                    />
                  )}
                />
              </div>

              <div className="w-full">
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      isRequired
                      onChange={onChange}
                      value={value}
                      type="email"
                      label="Email"
                      variant="bordered"
                      isInvalid={isInvalid}
                      color={isInvalid ? 'danger' : undefined}
                      errorMessage={
                        isInvalid && 'Saisissez une adresse mail valide svp'
                      }
                      onValueChange={setValue}
                    />
                  )}
                />
              </div>

              <Controller
                name="msg"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Textarea
                    isRequired
                    type="text"
                    color={undefined}
                    variant="bordered"
                    value={value}
                    onChange={onChange}
                    label="Veuillez saisir votre message"
                    autoFocus
                    className="max-w-full"
                  />
                )}
              />

              <Button
                type="submit"
                className="black-button w-full text-center mt-16"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </aside>
      </section>
      <section className="space-y-8 my-8">
        <h3>Remerciements / A Propos</h3>
        <p>
          Bonheur sur Seine, ce sont des vidéos
          <Link
            href={'https://www.youtube.com/c/BonheursurSeine'}
            passHref
            target="_blank"
            className="link-style ml-1"
          >
            YouTube
          </Link>
          , mais c&apos;est aussi et surtout des rencontres,{' '}
          <i className="text-green-800 dark:text-green-700">
            &quot; des gens qui m&apos;ont tendu la main, peut-être à un moment
            où je ne pouvais pas, où j&apos;étais seul chez moi. Et c&apos;est
            assez curieux de se dire que les hasards, les rencontres, forgent
            une destinée... Parce que quand on a le goût de la chose, quand on a
            le goût de la chose bien faite, le beau geste, parfois on ne trouve
            pas l&apos;interlocuteur en face je dirais, le miroir qui vous aide
            à avancer. Alors ça n&apos;est pas mon cas, comme je disais là,
            puisque moi au contraire, j&apos;ai pu : et je dis merci à la vie,
            je lui dis merci, je chante la vie, je danse la vie… je ne suis
            qu&apos;amour ! Et finalement, quand beaucoup de gens
            aujourd&apos;hui me disent « Mais comment fais-tu pour avoir cette
            humanité ? », et bien je leur réponds très simplement, je leur dis
            que c&apos;est ce goût de l&apos;amour, ce goût donc qui m&apos;a
            poussé aujourd&apos;hui à entreprendre une construction mécanique,
            mais demain qui sait ? Peut-être simplement à me mettre au service
            de la communauté, à faire le don, le don de soi…&quot;
          </i>{' '}
          (©️Edouard Baer, &quot;Astérix & Obélix : Mission Cléopâtre&quot;
          2002)
        </p>
        <p>
          Bref, du fond de mon petit cœur,{' '}
          <strong>MERCI LES COPAINS !!!</strong>
        </p>
      </section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {people.map((person, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={192}
                  height={192}
                  className="rounded-full object-content"
                />
              </div>
              <div className="mt-2 text-center">{person.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
