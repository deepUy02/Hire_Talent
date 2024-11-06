import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
  {
    filterType:"Location",
    array:["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType:"Industry",
    array:["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType:"Salary",
    array:["0-40k", "41k-1lakh", "1lakh to 5 lakh"]
  },
]

const FilterCard = () => {
  return (
    <div>
      <h1 className='font-bold text-lg'>
        FilterJobs
      </h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data,index) => (
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      <Label>{item} </Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
