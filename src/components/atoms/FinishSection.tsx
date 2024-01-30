import { RichText } from 'prismic-reactjs'

const FinishSection = ({ text }: { text: any }) => {
  return (
    <div>
      <text>{RichText.render(text)}</text>
    </div>
  )
}

export default FinishSection
