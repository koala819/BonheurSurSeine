'use client'

import { Button, Input, Textarea } from '@nextui-org/react'
import { RichText } from 'prismic-reactjs'
import { useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import Image from 'next/image'

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
  const handleSendMail = async (values: any) => {
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
          //   setHideForm(true);
        } else {
          toast.error("Une erreur s'est produite", response.statusText)
        }
      })
      .catch((error: any) => {
        toast.error("Une erreur s'est produite", error)
      })
  }

  return (
    <div className="lg:flex my-4 lg:my-8">
      <aside className="lg:w-1/3 xl:flex-1 flex justify-center mb-4 lg:mb-0">
        <picture className="flex items-center justify-center lg: px-4">
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
      <aside className="xl:flex-1 flex justify-center">
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit(handleSendMail)} className="space-y-4">
            <span className="text-xl text-black dark:text-gray-200">
              {RichText.render(text)}
            </span>
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
    </div>
  )
}
