import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaGem } from 'react-icons/fa'


export const Card = (props) => {
    let review = props.review
  return (
    <div className="flex flex-col relative">
      <div className="absolute top-[-100px] z-[10]">
        <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25] mx-auto" src={review.image} />
        <div className="rounded-full bg-violet-500 w-[140px] h-[140px] absolute top-[-8px] left-[8px] z-[-25]"></div>
      </div>

      <div className="text-center mt-5">
        <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
      </div>

      <div className="text-center mt-2">
        <p className="text-violet-500 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-violet-500 mx-auto mt-5">
        <FaQuoteLeft></FaQuoteLeft>
      </div>

    <div className="text-center mt-4 text-slate-600">
        {review.text}
    </div>

      <div className="text-violet-500 mx-auto mt-5">
        <FaQuoteRight></FaQuoteRight>
      </div>

      
    </div>
  );
};

export default Card;
