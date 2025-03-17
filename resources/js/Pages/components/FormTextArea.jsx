import React from 'react'

const FormTextArea = ({ placeholder, value, onChange, rows=6 }) => {
  return (
    <textarea className='text-sm bg-transparent w-full rounded-lg mt-2 placeholder:text-gray-400 placeholder:text-xs border border-gray-400 focus:outline-none focus:ring-1 focus:ring-clblue resize-none' rows={rows} placeholder={placeholder} value={value} onChange={onChange}>

    </textarea>
  )
}

export default FormTextArea
