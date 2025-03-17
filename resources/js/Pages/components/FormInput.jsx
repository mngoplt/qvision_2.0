import React from 'react'
import FormError from './FormError'

const FormInput = ({ id, type, placeholder, value, onChange, error }) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} id={id} className='text-sm bg-transparent w-full rounded-lg mt-2 placeholder:text-gray-400 placeholder:text-xs border border-gray-400 focus:outline-none focus:ring-1 focus:ring-clblue h-12' required={true} value={value} onChange={onChange}/>
        {error && <FormError error={error} />}
    </div>
  )
}

export default FormInput
