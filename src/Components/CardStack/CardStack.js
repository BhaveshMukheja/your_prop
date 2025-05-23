import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../Card/Card';

const CardStack = ({ cards, onSwipeLeft, onSwipeRight }) => {
  const visibleCards = cards.slice(0, 3); // Show top 3 cards

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <AnimatePresence>
        {visibleCards.map((card, index) => (
          <Card
            key={card.id}
            data={card}
            active={index === 0}
            onSwipeLeft={() => onSwipeLeft(card.id)} // Pass card ID
            onSwipeRight={() => onSwipeRight(card.id)}
            zIndex={visibleCards.length - index} // Fix zIndex (3, 2, 1)
            index={index}
          />
        ))}
      </AnimatePresence>

      {cards.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-3xl">
          <p className="text-gray-500">No more properties to show</p>
        </div>
      )}
    </div>
  );
};

export default CardStack;