import React, { useEffect, useState } from 'react'
import ReactQuill, {Quill} from 'react-quill'
import { ImageResize } from 'quill-image-resize-module-ts' 
Quill.register('modules/imageResize', ImageResize);

type Props = {
  editorStates?:any,
  editorStateChange?:any,
}

const TextEditor = ({
    editorStates,
    editorStateChange,
  }: Props) => {


    const modules = {
      toolbar: [
        [{ 'header': [1, 2, 3,4,false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        [{'align': '' }, {'align': 'center' }, {'align': 'right' }, {'align' : 'justify' }],
        ['clean']
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
      },
      imageResize: {
        parchment: Quill.import('parchment'),
        modules: [ 'Resize', 'DisplaySize']
      },
    }
  
    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image',
      'align', 'center', 'right','justify'
    ]

  return (
        <div className='textEditor'>
                   <ReactQuill 
                    theme="snow" 
                    value={editorStates} 
                    onChange={editorStateChange}
                    modules={modules}
                    formats={formats}
                      />
         </div>
  )
}

export default TextEditor
