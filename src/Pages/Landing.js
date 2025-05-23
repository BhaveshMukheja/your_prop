import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import SwipeButtons from "../Components/SwipeButtons/SwipeButtons";
import { motion, AnimatePresence } from "framer-motion";
import { FaThumbsUp } from "react-icons/fa";
import CardStack from "../Components/CardStack/CardStack";
import StackDesign from "../Components/StackDdesign/StackDesign";
import bg from "../Assets/background.png"




const cardData = [
  {
    id: 1,
    Specifications:{
        title: "3BHK Flat in HSR Layout",
        description: "BM Mystic Greens, Sector 2, HSR Layout, Bangalore",
        Accomodation: "3 BHK",
        Room: "Private",
        Availability:"1 May"

    },
    Rate:{
        Rent:"25K per month",
        Security:"50K",
        Extra:"2.5 per month"

    },
    Preference:{
        Gender:"No preference",
        Food:"No preference",
        Smoking:"No preference"
    },
    Flatemate:2,
  },
  {
    id: 2,
    Specifications:{
        title: "2BHK Flat in HSR Layout",
        description: "BM Mystic Greens, Sector 2, HSR Layout, Bangalore",
        Accomodation: "2 BHK",
        Room: "Shared",
        Availability:"10 May"
    },
    Rate:{
        Rent:"15K per month",
        Security:"30K",
        Extra:"2.5K per month"

    },
    Preference:{
        Gender:"Male",
        Food:"No preference",
        Smoking:"Non Smoker"
    },
    Flatemate:1
  },
  {
    id: 3,
    Specifications:{
        title: "1BHK Flat in HSR Layout",
        description: "BBM Mystic Greens, Sector 2, HSR Layout, Bangalore",
         Accomodation: "1 BHK",
        Room: "Private",
        Availability:"9 May"
    },
    Rate:{
        Rent:"10K per month",
        Security:"25K",
        Extra:"3K per month"

    },
    Preference:{
        Gender:"No Preference",
        Food:"No Preference",
        Smoking:"No Preference"
    },
    Flatemate:0,
  },

  
];





const Landing = () => {
  const [cards, setCards] = useState(cardData);
  const [removedCards, setRemovedCards] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState(null);

  const handleSwipe = (direction) => {
    if (cards.length === 0) return;
    
    setFeedbackType(direction);
    setShowFeedback(true);
    
    const cardToRemove = cards[0];
    setTimeout(() => {
      setCards(prev => prev.slice(1));
      setRemovedCards(prev => [...prev, cardToRemove]);
      setShowFeedback(false);
    }, 500);
  };

  const undoLastSwipe = () => {
    if (removedCards.length === 0) return;
    
    const lastCard = removedCards[removedCards.length - 1];
    setCards(prev => [lastCard, ...prev]);
    setRemovedCards(prev => prev.slice(0, -1));
  };

  return (
    <>
      <div
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
      <Navbar className="z-1"/>
      <div className="flex justify-center pt-8 relative min-h-[70vh]">
        <div className="w-full max-w-[1800px] px-4" style={{ width: "90%" }}>
            <div className="absolute w-[98.5%] left-3 top-1 -z-10">
            <StackDesign/>
            </div>
          <CardStack 
            cards={cards} 
            onSwipeLeft={() => handleSwipe('left')}
            onSwipeRight={() => handleSwipe('right')}
          />

          <FeedbackOverlay 
            show={showFeedback} 
            type={feedbackType} 
          />
        </div>
      </div>

      <div className="w-screen inline-flex justify-center items-center mt-20">
        <SwipeButtons 
          onSwipeLeft={() => handleSwipe('left')}
          onSwipeRight={() => handleSwipe('right')}
          onUndo={undoLastSwipe}
        />
      </div>
    </>
  );
};

const FeedbackOverlay = ({ show, type }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`absolute inset-0 flex items-center justify-center z-100 min-h-screen ${
          type === 'right' ? 'bg-brand-logo/80' : 'bg-transparent'
        } pointer-events-none`}
        style={{zIndex:1000}}
      >
        {type === 'right' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5 }}
            className="text-white text-8xl "
            
          >
        
            <div className="h-56 w-56 bg-brand-logo rounded-full flex items-center justify-center  shadow-[0px_0px_15px] shadow-white">
            <FaThumbsUp />

            </div>
          </motion.div>
        )}
      </motion.div>
    )}
  </AnimatePresence>

);

export default Landing;