import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
<>
<div>
    <div className='grid place-items-center gap-y-6 max-w-6xl mx-auto px-4 '>
        <h1 className='text-4xl font-bold'>Get in Touch</h1>
        <p className='mt-6 max-w-xl text-xl text-center text-gray-400'>Have a project in mind or want to discuss opportunities? I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
    </div>
    <div className='flex'>
        <div className='w-80 grid grid-cols-1 md:grid-cols-1 gap-6 ml-20'>
            <h1 className='text-xl font-bold'>Contact Information</h1>
            <div className='bg-gray-950 px-4 py-6 rounded hover:border border-blue-600'>
              <div className='flex items-center gap-4'>
                <MdOutlineMail size={25} className='text-blue-600'/>
                <div>
                    <h1>Email</h1> 
                <p>devsonone222@gmail.com</p>
                </div>
                
                </div>

            </div>
            <div className='bg-gray-950 px-4 py-6 rounded hover:border border-blue-600'>
                <div className='flex items-center gap-4'>
                    <FaPhoneAlt size={25} className='text-blue-600'/>
                    <div><h1>Phone</h1>
                <p>6267254284</p>
                </div>
                    </div>
                
                

            </div>
            <div className='bg-gray-950 px-4 py-6 rounded hover:border border-blue-600'>
                <div className='flex items-center gap-4'>
                    <FaLocationDot size={25} className='text-blue-600'/>
                   
                <div><h1>Location</h1>
                <p>Bhilai, Chhatisgadh</p>
                </div>
                 </div>

            </div>

        </div>

        <div className='bg-gray-950 ml-20 rounded-xl mb-20'>
            <div className='w-full px-20 py-6 '>
                <h3 className='font-semibold text-xl'>Send Me a Message</h3>
                <p className='text-gray-400'>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            <form className='space-y-5 mx-3'>
                <label className='block text-sm mb-1 text-gray-300'>Name</label>              
                <input className="w-full bg-black border border-gray-800 rounded px-4 py-2
                   focus:outline-none focus:border-blue-600" type="text" placeholder='your Name' />

                <label className='block text-sm mb-1 text-gray-300'>Email</label>               
                <input className="w-full bg-black border border-gray-800 rounded px-4 py-2
                   focus:outline-none focus:border-blue-600" type="text" placeholder='your@email.com' />

                <label className='block text-sm mb-1 text-gray-300'>Message</label>
                <textarea className="w-full bg-black border border-gray-800 rounded px-4 py-2
                   focus:outline-none focus:border-blue-600" type="text" placeholder='Write yourMessage...' />
                   <button type='submit' className='w-full bg-blue-600 py-2 rounded font-medium
                 hover:bg-blue-700 transition'>Send Message</button>
            </form>

        </div>
    </div>
    

</div>
</>
)
}

export default Contact