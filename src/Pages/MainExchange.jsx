import React from 'react';
import Exchange from "../Components/Exchange";
import WhyToExchange from '../Components/WhyToExchange';
import BookSwap from '../Components/BookSwap';
import Categories from '../Components/Categories';
import Community from '../Components/Community';

function MainExchange() {
  return (
    <div>
     <Exchange/>
     <BookSwap/>
     <WhyToExchange/>
    <Community/>
    </div>
  )
}

export default MainExchange