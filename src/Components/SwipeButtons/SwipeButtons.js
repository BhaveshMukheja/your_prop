import React from 'react';
import {  FaThumbsUp } from 'react-icons/fa';
import { MdOutlineReplay } from 'react-icons/md';

const SwipeButtons = ({ onSwipeLeft, onSwipeRight }) => {
  return (
    <div className='inline-flex space-x-10'>
      {/* Dislike button */}
      <button 
        onClick={onSwipeLeft}
        className='rounded-full h-12 w-12 bg-black flex items-center justify-center hover:scale-110 transition-transform'
      >
        <FaThumbsUp className='rotate-180 text-white text-xl'/>
      </button>

      {/* Replay button */}
      <button className='rounded-full h-12 w-12 border border-black flex items-center justify-center hover:scale-110 transition-transform'>
        <MdOutlineReplay className='-rotate-90 text-xl'/>
      </button>

      {/* Like button */}
      <button 
        onClick={onSwipeRight}
        className='rounded-full h-12 w-12 bg-brand-logo flex items-center justify-center hover:scale-110 transition-transform'
      >
        <FaThumbsUp className='text-white text-xl'/>
      </button>
    </div>
  );
};

export default SwipeButtons;