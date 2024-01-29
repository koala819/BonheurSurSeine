import { RichText } from 'prismic-reactjs'

const FinishSection = ({ text }: { text: any }) => {
  return (
    <section className="p-6">
      <text className="text-lg font-semibold">{RichText.render(text)}</text>
    </section>
  )
}

export default FinishSection
