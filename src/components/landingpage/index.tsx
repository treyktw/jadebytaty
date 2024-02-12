import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <main className='relative h-screen md:flex'>
        <Image 
        src="/placeholder1.png"
        alt='Placeholder image'
        width={500}
        height={500}
        quality={100}
        priority
        className="absolute inset-y-0 left-0 w-1/2 h-[865px] mt-[80px] object-cover"
      />
      <div className='absolute inset-y-0 right-0 w-1/2 flex justify-center items-center'>
        <Image 
          src="/placeholder2.jpeg"
          alt='Placeholder image'
          width={400}
          height={700}
          objectFit="cover"
          quality={100}
          priority
          className="" 
        />
      </div>
      
      

      <div className='absolute inset-0 flex flex-col items-center justify-center max-w-3xl mx-auto text-center'>
        <div>
          <h1 className='text-9xl'>
          Make-Up <br />
          <span className='italic'>for humans</span>
        </h1>
        </div>
        
        <Button className='mt-6 rounded-none w-1/3 h-16'>
          <Link href='/schedule' className='text-2xl'>Schedule</Link>
        </Button>
      </div>
    </main>
  )
}

export default LandingPage