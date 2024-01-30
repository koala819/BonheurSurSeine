import { RichText } from 'prismic-reactjs'

const FinishSection = ({ text }: { text: any }) => {
  return (
    <section className="p-6">
      <p>{RichText.render(text)}</p>
    </section>
  )
}

export default FinishSection
