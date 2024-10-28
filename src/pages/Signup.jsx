import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img
          className=' hidden sm:block absolute w-full h-full object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
          alt="///"
        />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />


        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/60 rounded-lg'>
            <div className='max-w-[320px]  mx-auto py-16'>
              <h1 className='text-3xl font-nsans-bold capitalize'> Sign up</h1>
              <form className='w-full flex flex-col py-4'>
                <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder='email' autoComplete='email' />
                <input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder='password' autoComplete='current-password' />
                <button className='p-3  my-6 bg-red-700 rounded font-nsans-bold '> Sign up</button>
                <div className='flex justify-between items-center text-gray-600'>
                  <p>remember</p>
                  <p>remember</p>
                  
                </div>
              </form>


            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Signup