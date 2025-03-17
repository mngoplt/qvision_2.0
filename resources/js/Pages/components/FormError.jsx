import React from 'react'

const FormError = ({error}) => {
  return (
    <div className='text-xs text-red-500 mt-1'>
        {error}
    </div>
  )
}

export default FormError
