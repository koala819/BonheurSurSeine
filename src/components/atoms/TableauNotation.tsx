import { bonheurScore } from "@/src/lib/bonheurScore";

const TableauNotation: React.FC = () => {
  return (
    <div className='p-4 bg-white dark:bg-gray-800'>
      {/* <p className='text-center text-black dark:text-white'>
        Copyright Bonheur sur Seine - Tests et évaluations 25/03/2022
      </p>

      <h1 className='text-lg text-blue-600 font-bold italic underline mt-4'>
        Principes d'évaluation :
      </h1>

      <p className='mt-2 text-blue-600 italic'>
        La roue parfaite n'existe pas. Chacune a son usage propre, avec ses
        forces, ses qualités et ses faiblesses.
      </p> */}

      {/* ... Vous pouvez continuer à ajouter vos éléments HTML ici avec des classes Tailwind */}

      <table className='min-w-full text-sm divide-y divide-gray-200 dark:divide-gray-700'>
        <thead className='bg-gray-50 dark:bg-gray-700'>
          <tr>
            <td>Date</td>
            <td>Marque</td>
            <td>Modèle</td>
            <td>Catégorie</td>
            <td>Caractéristiques</td>
            <td>Praticité</td>
            <td>En ville</td>
            <td>Sur la route</td>
            <td>Note Globale</td>
            <td>Commentaire</td>
            <td>Lien YouTube</td>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
          {bonheurScore.map((row, index) => (
            <tr key={index} className={`bg-grey-100 dark:bg-grey-700`}>
              <td>{row.date}</td>
              <td>{row.marque}</td>
              <td>{row.modele}</td>
              <td>{row.categorie}</td>
              <td>{row.caracteristiques}</td>
              <td>{row.praticite}</td>
              <td>{row.enVille}</td>
              <td>{row.surRoute}</td>
              <td>{row.noteGlobale}</td>
              <td>{row.commentaire}</td>
              <td>{row.YT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableauNotation;
