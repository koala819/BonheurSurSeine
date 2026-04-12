'use client'

import { Accordion, AccordionItem } from '@heroui/react'
import { RichText } from 'prismic-reactjs'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { createClient } from '@/prismicio'
import Image_dico from '@/public/Image_dico (light).jpg'

//import { KeyTextField } from '@prismicio/types'

const Practical_Dico = () => {
  const [activeLetter, setActiveLetter] = useState('A')
  const [searchTerm, setSearchTerm] = useState('')
  const [glossary, setGlossary] = useState<
    Record<string, { mot: string; definition: string; definition_new: any }[]>
  >({})
  const [isLoading, setIsLoading] = useState(true)
  const [totalWords, setTotalWords] = useState(0)

  // Alphabet pour la navigation
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  // Charger les données de Prismic au montage
  useEffect(() => {
    const fetchGlossary = async () => {
      setIsLoading(true)
      const client = createClient()
      const dicoEntries = await client.getAllByType('dico')
      // Transformer les données en un objet structuré par lettre
      const structuredGlossary: Record<
        string,
        { mot: string; definition: string; definition_new: any }[]
      > = {}
      dicoEntries.forEach((entry) => {
        const letter = entry.data.Lettre?.toUpperCase() || 'A'
        if (!structuredGlossary[letter]) {
          structuredGlossary[letter] = []
        }
        structuredGlossary[letter].push({
          mot: entry.data.Mot ?? '',
          definition: entry.data.definition ?? '',
          definition_new: entry.data.Definition_new ?? [],
        })
      })
      setTotalWords(dicoEntries.length)
      setGlossary(structuredGlossary)
      setIsLoading(false)
    }

    fetchGlossary()
  }, [])

  // Liste de tous les mots
  const allWords = Object.values(glossary).flat()

  const handleLetterClick = (letter: string) => {
    setActiveLetter(letter)
    setSearchTerm('')
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  // Filtrage des mots par recherche (dans mot et définition_new)
  const filteredWords = allWords
    .filter(
      (
        entry,
      ): entry is { mot: string; definition: string; definition_new: any } =>
        typeof entry === 'object' &&
        entry !== null &&
        'mot' in entry &&
        typeof entry.mot === 'string',
    )
    .filter((entry) => {
      const mot = entry.mot.toLowerCase()
      const definitionText = Array.isArray(entry.definition_new)
        ? entry.definition_new
            .map((block) =>
              typeof block.text === 'string' ? block.text.toLowerCase() : '',
            )
            .join(' ')
        : ''
      const search = searchTerm.toLowerCase()
      return mot.includes(search) || definitionText.includes(search)
    })

  // Sélection des mots à afficher
  const wordsToDisplay = (
    searchTerm === '' ? glossary[activeLetter] || [] : filteredWords
  )
    .slice() // on copie pour ne pas modifier l'original.
    .sort((a, b) => a.mot.localeCompare(b.mot)) // on trie par ordre alphabétique.

  // Mise en JAUNE des mots affichés lors d'une recherche
  // highlightText pour le champs MOT
  const highlightText = (text: string, term: string) => {
    if (!term) return text
    const parts = text.split(new RegExp(`(${term})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 text-black">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }
  // highlightRichText pour le champs DEFINITION_NEW
  const highlightRichText = (richText: any[], term: string) => {
    if (!term) return <RichText render={richText} />
    return (
      <>
        {richText.map((block: any, i: number) => {
          if (
            block.type === 'paragraph' ||
            block.type === 'heading1' ||
            block.type.startsWith('heading')
          ) {
            const parts = block.text.split(new RegExp(`(${term})`, 'gi'))
            return (
              <p key={i} className="mb-2">
                {parts.map((part: string, j: number) =>
                  part.toLowerCase() === term.toLowerCase() ? (
                    <mark key={j} className="bg-yellow-200 text-black">
                      {part}
                    </mark>
                  ) : (
                    part
                  ),
                )}
              </p>
            )
          } else {
            return null
          }
        })}
      </>
    )
  }

  //-----------------------------------------------------
  //CODE POUR OUVRIR LA SECTION AUTOMATIQUEMENT
  const [openKeys, setOpenKeys] = useState<string[]>(['1'])
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'dico') {
        setOpenKeys(['1']) // Ouvre l'accordéon
        setScrollTarget('dico')
      }
    } // Appel initial

    handleHashChange() // Écoute les changements de hash (clics internes)
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
  //CODE POUR SCROLL VERS L'ANCRAGE DEPUIS LA NAVBARBAR
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }, [scrollTarget])

  //-----------------------------------------------------
  //                 CODE DE LA PAGE
  //-----------------------------------------------------
  return (
    <section
      id="dico"
      className="scroll-mt-24 my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow dark:shadow-slate-600 rounded-lg p-6 mb-6"
    >
      <Accordion
        selectedKeys={openKeys}
        onSelectionChange={(keys) => setOpenKeys(Array.from(keys) as string[])}
      >
        <AccordionItem
          key="1"
          aria-label="Le p'tit Dico du Bonheur"
          title={<h3>📖 Le p&apos;tit Dico du Bonheur</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <div className="mb-4 flex flex-col sm:flex-row items-center gap-2">
            <aside className="sm:w-2/3 md:w-3/5 space-y-4">
              <p className="text-justify">
                Ce lexique propose des{' '}
                <strong>explications simples et concises </strong>de quelques
                termes fréquemment utilisés dans l&apos;univers de la roue
                électrique.
              </p>
              <div className="blueBlock">
                <b>
                  📖 Pour décrypter le langage des wheelers&nbsp;: 1&nbsp;mot
                  juste vaut 1&nbsp;000 explications&nbsp;!
                </b>
              </div>
            </aside>
            <aside className="sm:w-1/3 md:w-2/5 text-center text-xs mt-1 mb-1">
              <Image
                src={Image_dico}
                alt="Image_dico"
                className="rounded-lg cursor-pointer"
              />
            </aside>
          </div>

          {/* Champ de recherche */}
          <div className="flex justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Rechercher un mot ou une définition..."
              className="w-full max-w-xs p-2 border border-gray-300 bg-neutral-200 dark:bg-neutral-600"
            />
          </div>

          {/* Barre de navigation alphabétique */}
          <div className="p-4">
            <div className="flex flex-wrap justify-center gap-1 my-2 text-sm mt-0 mb-0">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  className={`mx-0 px-1 py-0.5 md:px-1.5 md:py-1 border dark:border-gray-600 ${
                    activeLetter === letter
                      ? 'bg-blue-500 text-white'
                      : glossary[letter]
                        ? 'bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-300'
                        : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!glossary[letter]} // Désactiver si aucune donnée pour cette lettre
                >
                  {letter}
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-0">
              {totalWords} mots dans le lexique
            </p>
          </div>

          {/* Tableau des mots et définitions */}
          <div className="overflow-x-auto">
            {isLoading ? (
              <p className="text-center text-gray-500">Chargement...</p>
            ) : (
              <table className="min-w-full bg-white border-collapse dark:borders-gray-900">
                <thead>
                  <tr>
                    <th className="w-1/5 py-0.5 px-2 border-b bg-neutral-200 dark:bg-neutral-600">
                      Mot
                    </th>
                    <th className="py-0.5 px-2 border-b bg-neutral-200 dark:bg-neutral-600">
                      Définition
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wordsToDisplay.length > 0 ? (
                    wordsToDisplay.map((entry, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border-b dark:bg-gray-600 dark:text-gray-100">
                          <strong>
                            {highlightText(entry.mot, searchTerm)}
                          </strong>
                        </td>
                        <td className="py-2 px-4 border-b text-justify text-xs sm:text-sm md:text-base dark:bg-gray-600 dark:text-gray-100">
                          {entry.definition_new ? (
                            highlightRichText(entry.definition_new, searchTerm)
                          ) : (
                            <span>Pas de définition.</span>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={2}
                        className="py-2 px-4 border-b-0 text-center text-gray-400 dark:text-gray-200 dark:bg-gray-600"
                      >
                        Aucun mot trouvé.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
          {/* notes de fin et crédits */}

          <p className="text-gray-500 dark:text-gray-300 mt-4 text-xs mb-4">
            article mis à jour en juin 2025, <br />
            avec{' '}
            <Link
              href="https://discord.com/invite/Jhgw7C96Jf"
              target="_blank"
              className="w-12 h-12 md:w-16 md:h-16 hover:text-blue-600"
            >
              l&apos;aimable participation des membres du Discord&nbsp;
            </Link>
            : Fabien.wheel, N1c0, Coup de cross, DonDiego.euc, LéoF, Dr.Malcom,
            FabWheel, MaxCzl et Nelson.
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Dico
