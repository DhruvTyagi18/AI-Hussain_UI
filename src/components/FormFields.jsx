import React from 'react'

function FormFields({labelName, type, name, placeholder, value, onChange, isSurpriseMe, handleSurpriseMe }) {
  return (
    <div>
      <div className='gap-2 mb-2'>
        <div className='flex'>
          <label htmlFor={name} className="block text-sm font-medium text-gray-900 mx-2">
            {labelName}
          </label>
          {
            isSurpriseMe && (
              <button type='button' onClick={handleSurpriseMe} className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black">
                Surprise Me
              </button>
            )
          }
        </div>
        <input
          type={type} 
          id={name} 
          name={name} 
          placeholder={placeholder} 
          value={value}
          onChange={onChange} 
          required 
          className='bg-gray-50 border mt-2 border-gray-300 
          text-gray-900 text-sm rounder-lg 
          focus:ring-[#4649ff] focus:border-[#4649ff] 
          outline-none block w-full p-3'/>

      </div>
    </div>
  )
}

export default FormFields