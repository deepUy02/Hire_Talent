import { Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
            <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Alert Portal</span>
            <h1 className='text-5xl font-bold'>Search, Apply & <br/> Get Your <span className='text-[#5123a2]'>Dream Jobs</span></h1>
            <p>Connecting talent with opportunities, one dream job at a time.</p>
            <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input 
                    type="text" 
                    placeholder='Find your jobs'
                    className='outline-none border-none w-full'
                />
                <Button className="rounded-r-full bg-[#441693]">
                    <Search className='h-5 w-5'/>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
 