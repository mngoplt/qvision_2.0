import React from 'react'

const FormLabel = ({ htmlFor, textLabel }) => {
  return (
    <label htmlFor={htmlFor} className='text-xs'>
        {textLabel}
    </label>
  )
}

export default FormLabel
