import React from 'react'
import bgimage from './assets/bgimage.png'
import logo from './assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons';
import google from './assets/google.png'

const App = () => {
  return (
    <>
    <div className=' flex w-[100%] items-center justify-center flex-row '>
      

    <div style={{
      backgroundImage: `url(${bgimage})`,
      minHeight: '140vh',      
      backgroundSize: 'contain', 
      backgroundPosition: 'center',
      backgroundPosition: 'left center' ,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'fixed',
      
      
      
      
    }} className=' bg-black  hidden sm:block sm:w-[40%] md:w-[50%]   lg:w-[70%]'>
  

</div>
      


      <div className='sm:w-[60%] md:w-[50%] w-full mb-6'>
        
          <img src={logo} alt=""  className='mt-12 ml-8 '/>
          <p className='text-2xl font-semibold mt-6 ml-8'>Create A New Account</p>
          <p className='ml-12 mt-4 text-gray-500 font-medium'>Full Name</p>
          <input type="text" className='ml-8  p-2 rounded-md  flex w-[80%] mt-1 border bg-gray-100  border-none' placeholder='Email or phone number' />
          <p className='ml-12 mt-4 text-gray-500 font-medium'>City</p>
          <input type="text" className='ml-8  p-2 rounded-md  flex w-[80%] mt-1 border bg-gray-100  border-none' placeholder='Email or phone number' />
          <p className='ml-12 mt-4 text-gray-500 font-medium'>Mobile Number</p>
          <input type="number" className='ml-8  p-2 rounded-md  flex w-[80%] mt-1 border bg-gray-100  border-none' placeholder='Email or phone number' />
          <p className='ml-12 mt-4 text-gray-500 font-medium'>Email</p>
          <input type="email" className='ml-8  p-2 rounded-md  flex w-[80%] mt-1 border bg-gray-100  border-none' placeholder='Email or phone number' />









          <p className='ml-12 mt-4 text-gray-500 font-medium'>Password</p>
          <div className="relative ml-8 w-[80%] mt-1">
            <input
              type='password'
              className="p-2 rounded-md w-full border bg-gray-100"
              placeholder="Enter password"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            
            >
              <FontAwesomeIcon icon={faEye} />
            </span>
            </div>
          <p className='ml-12 mt-4 text-gray-500 font-medium'>Retype Password</p>
          <div className="relative ml-8 w-[80%] mt-1">
            <input
              type='password'
              className="p-2 rounded-md w-full border bg-gray-100"
              placeholder="Enter password"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            
            >
              <FontAwesomeIcon icon={faEye} />
            </span>
            </div>






      

<button  className="p-2 rounded-md ml-8 mt-6 border bg-black text-white font-bold w-[80%]">Sign up</button>




<p className='text-center mt-3 '>Already have an account? <strong>Sign in now</strong></p>



            </div>
  
        
      </div>
  
    </>
  )
}

export default App
