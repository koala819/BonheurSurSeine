import Brands from '@/src/components/atoms/Brands'
import Choice from '@/src/components/atoms/Choice'
import Compare from '@/src/components/atoms/Compare'
import Needs from '@/src/components/atoms/Needs'

const ChooseWheel = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 text-lg">
      <Choice />
      <Brands />
      <Needs />
      <Compare />
    </div>
  )
}

export default ChooseWheel
