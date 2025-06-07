'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { RichText } from 'prismic-reactjs'
import { useEffect, useState } from 'react'

import { createClient } from '@/prismicio'

//import { KeyTextField } from '@prismicio/types'

const Practical_Dico = () => {
  const [activeLetter, setActiveLetter] = useState('A')
  const [searchTerm, setSearchTerm] = useState('')
  const [glossary, setGlossary] = useState<
    Record<string, { mot: string; definition: string; definition_new: any }[]>
  >({})
  const [isLoading, setIsLoading] = useState(true)

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

  // Filtrage des mots par recherche
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
    .filter((entry) =>
      entry.mot.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  // Sélection des mots à afficher
  const wordsToDisplay = (
    searchTerm === '' ? glossary[activeLetter] || [] : filteredWords
  )
    .slice() // on copie pour ne pas modifier l'original.
    .sort((a, b) => a.mot.localeCompare(b.mot)) // on trie par ordre alphabétique.

  return (
    <section className="my-8 space-y-4 bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-6">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Le petit dico du bonheur"
          title={<h3>📖 Le petit dico du Bonheur</h3>}
          indicator={<strong className="chevronAccordionItem">&lsaquo;</strong>}
        >
          <p className="mb-6">
            Ce petit lexique propose des{' '}
            <strong>explications simples et concises</strong> de quelques termes
            fréquemment utilisés dans l&apos;univers de la roue électrique.
            <br />
            Il est classé par ordre alphabétique.
          </p>
          <div className="blueBlock mb-8">
            <h4>
              📖 Pour décrypter le langage des wheelers&nbsp;: 1 mot juste vaut
              1&nbsp;000 explications&nbsp;!
            </h4>
          </div>

          {/* Champ de recherche */}
          <div className="flex justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Rechercher un mot..."
              className="p-2 border border-gray-300 bg-neutral-200 dark:bg-neutral-600"
            />
          </div>

          {/* Barre de navigation alphabétique */}
          <div className="p-4">
            <div className="flex flex-wrap justify-center gap-1 my-2 text-sm">
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
                          <strong>{entry.mot}</strong>
                        </td>
                        <td className="py-2 px-4 border-b text-xs sm:text-sm md:text-base dark:bg-gray-600 dark:text-gray-100">
                          {/* <span>{entry.definition}.</span> */}
                          {entry.definition_new ? (
                            <RichText render={entry.definition_new} />
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
            article mis à jour en mars 2025, <br />
            avec l&apos;aimable participation des membres du Discord&nbsp;:
            Fabien.wheel, Coup de cross, DonDiego.euc, LéoF, Dr.Malcom,
            FabWheel, MaxCzl, N1c0, et Nelson.
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Practical_Dico
