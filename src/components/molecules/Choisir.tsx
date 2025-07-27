import Choice from '@/src/components/atoms/Choisir_0Choice'
import Market from '@/src/components/atoms/Choisir_1Market'
import Brands from '@/src/components/atoms/Choisir_2Brands'
import Needs from '@/src/components/atoms/Choisir_3Needs'
import Compare from '@/src/components/atoms/Choisir_4Compare'

const ChooseWheel = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      <Choice />
      <Market />
      <Brands />
      <Needs />
      <Compare />
    </div>
  )
}

export default ChooseWheel
