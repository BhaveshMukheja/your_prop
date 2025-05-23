import React from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

import Specification from './Specifications/Specificaton';
import Rate from './Rate/Rate';
import Ammenities from './Ammenities/Ammenities';
import Flatemates from './Flatemates/Flatemates';
import Carousel from './Carousel/Carousel';

const Card = ({ data, active, onSwipeLeft, onSwipeRight, zIndex, index, }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => active && onSwipeLeft(),
    onSwipedRight: () => active && onSwipeRight(),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true
  });

  // Stack styles: slight offset for cards behind
  const offsetScale = 1 - index * 0.03;
  const offsetY = 0 ;

  return (
    <motion.div
      {...handlers}
      className={`absolute w-full border border-gray-200 p-5 rounded-3xl shadow-xl bg-brand-card ${active ? 'cursor-grab ' : 'cursor-default '}`}
      style={{
        zIndex,
        // scale: offsetScale,
        // top: offsetY
      }}
      drag={active ? "x" : false}
    //   dragConstraints={{ left: 0, right: 0 }}
    //   onDragEnd={(e, info) => {
    //     if (info.offset.x > 200) onSwipeRight();
    //     if (info.offset.x < -200) onSwipeLeft();
    //   }}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{
        opacity: 1,
        // scale: offsetScale,
        // y: offsetY
      }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <div className="lg:col-span-5"><Carousel /></div>
        <div className="lg:col-span-5"><Specification data={data.Specifications} /></div>
        <div className="lg:col-span-2"><Rate data={data.Rate} /></div>
        <div className="lg:col-span-5"><Ammenities /></div>
        <div className="lg:col-span-3"><Flatemates data={data.Preference} /></div>
      </div>
    </motion.div>
  );
};

export default Card;
