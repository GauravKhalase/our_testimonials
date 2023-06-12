import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Testimonials = (props) => {
    let reviews = props.reviews

    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length -1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center m-10 p-10 transition-all duration-1000 hover:shadow-lg rounded-md'>
        <Card review={reviews[index]}/>

    <div className="flex text-3xl mt-5 gap-5 text-violet-400 font-bold mx-auto">
        <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500">
            <FiChevronLeft></FiChevronLeft>
        </button>
        <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500">
            <FiChevronRight></FiChevronRight>
        </button>
    </div>

      <div>
        <button onClick={surpriseHandler} className="bg-violet-400 hover:text-violet-800 transition-all duration-200 px-10 py-2 mt-4 rounded-md text-white text-lg">
            Surprise Me
        </button>
      </div>
    </div>

    
  )
}

export default Testimonials