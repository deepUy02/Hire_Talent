import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Full Stack Developer",
    "Data Analyst",
    "Software Tester"
]
const CategoryCarousel = () => {
  return (
    <div>
        <Carousel className="w-full max-w-lg mx-auto my-20">
            <CarouselContent>
            {
                category.map((cat, index) => (
                    <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                        <Button variant="outline" className="rounded-full">{cat}</Button>
                    </CarouselItem>
                ))
            }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/> 
        </Carousel>
    </div>
  )
}

export default CategoryCarousel
