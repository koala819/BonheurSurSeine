'use client'

//import { Bolt } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ContactFriends } from '@/src/types/models'

import RatingStars from '@/src/components/atoms/Merci_RatingStars'

import Discord from '@/public/Discord.png'
import Patreon from '@/public/Patreon.svg'
import undefindAvatar from '@/public/People.png'
import bonheurSurSeine from '@/public/PhotoBSS - Remerciements.jpg'
import Tipeee from '@/public/Tipeee.svg'

export default function Contact({
  // text,
  friends,
}: {
  // text: any
  friends: ContactFriends[]
}) {
  // const [hideForm, setHideForm] = useState<boolean>(false)
  // const [value, setValue] = useState<string>('')

  // const validateEmail = (value: string) =>
  //   value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  // const isInvalid = useMemo(() => {
  //   if (value === '') return false

  //   return validateEmail(value) ? false : true
  // }, [value])

  // const { control, handleSubmit } = useForm<any>()
  // async function handleSendMail(values: {
  //   email: string
  //   firstName: string
  //   lastName: string
  //   msg: string
  // }) {
  //   const data = {
  //     email: values.email,
  //     prenom: values.firstName,
  //     nom: values.lastName,
  //     message: values.msg,
  //   }

  //   const options = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data),
  //   }

  //   fetch(`${process.env.CLIENT_URL}/api/mail`, options)
  //     .then((response: any) => {
  //       if (response.status === 200) {
  //         toast.success('Votre message a bien été envoyé')
  //         setHideForm(true)
  //       } else {
  //         toast.error("Une erreur s'est produite", response.statusText)
  //       }
  //     })
  //     .catch((error: any) => {
  //       toast.error("Une erreur s'est produite", error)
  //     })
  // }

  return (
    //<section className="container my-8 mx-auto p-4 space-y-8">

    <section id="soutien" className="py-1 px-4 sm:px-6 lg:px-8 space-y-8">
      {/*
    <h1 className="whitespace-break-spaces">Formulaire de contact</h1>
      <header className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <ul className="list">
              <li>J&apos;ai envie de dire merci (dis le aussi en commentaires
                <Link
                  href={'https://www.youtube.com/c/BonheursurSeine'}
                  passHref
                  target="_blank"
                  className="link-style ml-1"
                >  des vidéos </Link> ) </li>
              <li>Je voudrais t&apos;écrire ou t&apos;envoyer un truc</li>
              <li>J&apos;ai un projet de partenariat à proposer</li>
              <li>Je souhaite t&apos;inviter à un événement</li>
              <li>Je voudrais ré-utiliser une partie de ton travail et/ou de ton image sur un site/blog/vidéo/etc. </li>
            </ul>
          </div>
          <div>
            <ul className="list">
              <li>Je voudrais faire une suggestion de sujet pour une vidéo</li>
              <li>J&apos;ai vu un bug, une erreur</li>
              <li>Je veux t&apos;insulter parce que tu fais de la merde</li>
              <li>Autre chose</li>
            </ul>
          </div>
        </div>
      </header>
*/}

      <section className="flex flex-col lg:flex-row my-2 lg:my-6">
        <aside className="w-full flex justify-center mb-0 lg:mb-0">
          {/*lg:w-1/2 */}
          <picture className="flex flex-col items-center px-4 w-full">
            <Image
              src={bonheurSurSeine}
              alt="Raphael"
              className="h-80% w-80% object-cover object-center rounded-2xl mb-0"
              priority
              width={500}
              height={500}
              placeholder="blur"
            />
            <p className="mt-0 mb-0 ">
              ▶️&nbsp;
              <i>
                <Link
                  href="https://fr.tipeee.com/bonheur-sur-seine"
                  target="_blank"
                  className="link-style"
                >
                  Ne clique pas ici
                </Link>
              </i>
              &nbsp;◀️
            </p>
          </picture>
        </aside>

        {/*
        <aside className="w-full lg:w-1/2 flex justify-center">
          <div className="flex items-center justify-center w-full">
            {!hideForm ? (
              <form
                onSubmit={handleSubmit(handleSendMail)}
                className="space-y-4"
              >
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
            ) : (
              <p>Je vous répondrai d&apos;ici 24h maximum.</p>
            )}
          </div>
        </aside>*/}
      </section>

      <div className="bg-white dark:bg-cyan-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600 text-center max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl">
        <p className="text-center md:text-lg lg:text-xl font-medium leading-relaxed">
          Pour soutenir mon travail, accéder à des contenus supplémentaires et
          chatter en privé, rejoins-moi sur
        </p>

        <div className="flex flex-row justify-center items-center gap-4 mt-0">
          <Link
            href="https://fr.tipeee.com/bonheur-sur-seine"
            target="_blank"
            className="text-rose-500 hover:text-rose-400 flex items-center justify-center rounded-2xl p-2 px-6 transition-transform transform hover:scale-110"
          >
            <Image
              alt="Tipee logo"
              src={Tipeee}
              width={40}
              height={40}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
          <Link
            href="https://www.patreon.com/c/BonheursurSeine"
            target="_blank"
            className="flex p-2 transition-transform transform hover:scale-110 rounded-2xl"
          >
            <Image
              alt="Patreon logo"
              src={Patreon}
              width={40}
              height={40}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
          <Link
            href="https://discord.com/invite/Jhgw7C96Jf"
            target="_blank"
            className="flex transition-transform transform hover:scale-110 rounded-2xl"
          >
            <Image
              alt="Discord logo"
              src={Discord}
              width={90}
              height={90}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
        </div>
      </div>
      {/* AJOUT D'UNE NOTATION DU VISITEUR*/}
      <div className="bg-white dark:bg-cyan-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600  max-w-lg mx-auto md:max-w-2xl lg:max-w-4xl">
        <RatingStars />
      </div>

      <section id="copains" className="space-y-2 my-4">
        <h2>Remerciements</h2>
        <p className="text-sm text-justify">
          <b>Bonheur sur Seine</b>, ce sont des vidéos
          <Link
            href={'https://www.youtube.com/c/BonheursurSeine'}
            passHref
            target="_blank"
            className="link-style ml-1"
          >
            YouTube
          </Link>
          , mais c&apos;est aussi et surtout, avec les années, des rencontres,{' '}
          <i className="text-emerald-800 dark:text-emerald-500">
            &laquo;&nbsp;des gens qui m&apos;ont tendu la main, peut-être à un
            moment où je ne pouvais pas, où j&apos;étais seul chez moi. Et
            c&apos;est assez curieux de se dire que les hasards, les rencontres,
            forgent une destinée… <br /> Parce que quand on a le goût de la
            chose, quand on a le goût de la chose bien faite, le beau geste,
            parfois on ne trouve pas l&apos;interlocuteur en face je dirais, le
            miroir qui vous aide à avancer. Alors ça n&apos;est pas mon cas,
            comme je disais là, puisque moi au contraire, j&apos;ai pu&nbsp;: et
            je dis merci à la vie, je lui dis merci, je chante la vie, je danse
            la vie… je ne suis qu&apos;amour&nbsp;! <br />
            Et finalement, quand beaucoup de gens aujourd&apos;hui me
            disent&nbsp;: «&nbsp;Mais comment fais-tu pour avoir cette
            humanité&nbsp;?&nbsp;», et bien je leur réponds très simplement, je
            leur dis que c&apos;est ce goût de l&apos;amour, ce goût donc qui
            m&apos;a poussé aujourd&apos;hui à entreprendre une construction
            mécanique, mais demain qui sait, peut-être simplement à me mettre au
            service de la communauté, à faire le don, le don de soi…&raquo;
          </i>{' '}
          <br />
          (©️Edouard Baer, &quot;Astérix & Obélix : Mission Cléopâtre&quot;
          2002)
        </p>
        <p>
          Bref, du fond de mon petit cœur,{' '}
          <strong>MERCI LES COPAINS !!!</strong>
        </p>
      </section>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          {friends.map((friend, index) => (
            <Link
              href={friend.data.url.url || ' #'}
              passHref
              target="_blank"
              key={index}
              className="flex flex-col items-center"
            >
              <Image
                src={friend.data.img.url || undefindAvatar}
                alt={friend.data.img.alt || ''}
                width={192}
                height={192}
                className="hover:opacity-100 opacity-55 rounded-full object-cover w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
              />

              <div className="mt-0 text-center">{friend.data.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
