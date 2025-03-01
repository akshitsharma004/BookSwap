import React from 'react';
import Exchange from "../Components/Exchange";
import WhyToExchange from '../Components/WhyToExchange';
import BookSwap from '../Components/BookSwap';

function MainExchange() {
  return (
    <div>
     <Exchange/>
     <BookSwap/>
     <WhyToExchange/>
    </div>
  )
}

export default MainExchange