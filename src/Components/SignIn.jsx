import React from 'react'

function SignIn() {
  return (
    <div className='bg-black flex py-20 justify-center'>
        <form className='py-10 flex w-[25rem] border border-orange-500 rounded-md items-center text-white flex-col gap-5'>
            <input
            type='text'
            placeholder='First Name'
            className='rounded-full hover:bg-yellow-600 px-10 py-4 border border-orange-500 '
            />
            <input
            type='text'
            placeholder='Last Name'
            className='rounded-full hover:bg-yellow-600 px-10 py-4 border border-orange-500 '
            />
            <input
            type='NumberedInput'
            placeholder='Phone Number'
            className='rounded-full hover:bg-yellow-600 px-10 py-4 border border-orange-500 '
            />
            <input
            type='text'
            placeholder='Email address'
            className='rounded-full hover:bg-yellow-600 px-10 py-4 border border-orange-500 '
            />
            <input
            type='text'
            placeholder='Address'
            className='rounded-full hover:bg-yellow-600 px-10 py-4 border border-orange-500 '
            />
            <button className='px-12 mt-10 py-3 border bg-yellow-600 hover:bg-orange-500 border-orange-500 rounded-full'>Submit</button>
        </form>
    </div>
  )
}

export default SignIn