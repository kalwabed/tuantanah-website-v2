import { useEffect } from 'react'
import { init } from 'pell'

interface Props {
  initialValue?: string
  setValue: (value: string) => void
}

const ContentEditor = (props: Props) => {
  const { initialValue = '', setValue } = props
  useEffect(() => {
    const editor = init({
      element: document.getElementById('editor'),
      defaultParagraphSeparator: 'p',
      onChange: html => setValue(html),
      actions: ['bold', 'underline', 'italic', 'heading1', 'paragraph', 'olist', 'ulist', 'link']
    })
    editor.content.innerHTML = initialValue
    return
  }, [])

  return <div id="editor" className="pell" />
}

export default ContentEditor
