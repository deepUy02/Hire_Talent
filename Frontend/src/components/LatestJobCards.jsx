import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-120 cursor-pointer'>
      <h1 className='font-medium text-lg'>Company Name</h1>
      <p className='text-sm text-gray-500'>India</p>

      <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          explicabo!
        </p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'text-[#9422e6] font-bold'} variant="ghost">24 LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;