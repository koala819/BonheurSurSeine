import { RichText } from 'prismic-reactjs'

import { KeyTextField } from '@prismicio/types'

const Quote = ({ body, citation }: { body: any; citation: KeyTextField }) => {
  return (
    <div className="bg-white dark:bg-cyan-800 p-4 rounded-lg shadow-md text-center">
      <text>{RichText.render(body)}</text>
      <blockquote className="italic text-gray-600 dark:text-gray-200 mt-4">
        {citation}
      </blockquote>
    </div>
  )
}

export default Quote
