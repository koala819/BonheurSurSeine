import Assurance from '@/src/components/atoms/Assurance'
import CommonSense from '@/src/components/atoms/CommonSense'

const Page = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <h1>Pour bien démarrer</h1>
      <p>
        Cette page regroupe{' '}
        <span className="font-semibold">quelques conseils</span> et{' '}
        <span className="font-semibold">rappels essentiels</span> mais non
        exhaustifs concernant l’utilisation de la roue électrique{' '}
        <span className="font-semibold">en France.</span>
      </p>

      <div className="blueBlock">
        <h3>
          💙 &quot;Le Bonheur de rouler, c’est se mettre dans les meilleurs
          conditions pour pouvoir en profiter !&quot;
        </h3>
      </div>

      <CommonSense />
      <Assurance />
    </div>
  )
}

export default Page
