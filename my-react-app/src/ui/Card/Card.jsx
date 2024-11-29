import React from 'react';
import Profile from '../Profile/Profile';
import { useEffect, useRef, useState } from 'react';
import { getPriorityIcon, getStatusIcon } from '../../utils/sectionUtils';
import { getPriority } from '../../utils/gridUtils';
import "./Card.css";

export default function Card({ ticket, userData, hideStatusIcon, hideProfileIcon, hidePriorityIcon }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const titleRef = useRef(null); // Reference to the title element
  const bottomContainerRef = useRef(null); // Reference to the bottom-container element

  useEffect(() => {
    // Function to check if the title is overflowing
    const checkOverflow = () => {
      if (titleRef.current) {
        const titleElement = titleRef.current;
        setIsOverflowing(titleElement.scrollHeight > titleElement.clientHeight);
      }
    };

    // Check overflow on mount and on window resize
    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  useEffect(() => {
    // Adjust the margin-top of bottom-container based on overflow
    if (bottomContainerRef.current) {
      if (isOverflowing) {
        bottomContainerRef.current.style.marginBottom = '0.1rem';
      } else {
        bottomContainerRef.current.style.marginBottom = '0.5rem';
      }
    }
  }, [isOverflowing]);
  // const [overflowStates, setOverflowStates] = useState(ticket.map(() => false));

  // // Refs for all title elements and bottom containers
  // const titleRefs = useRef([]);
  // const bottomContainerRefs = useRef([]);

  // // Function to check overflow on the title element
  // const checkOverflow = (index) => {
  //   const titleElement = titleRefs.current[index];
  //   if (titleElement) {
  //     // Check if the title is overflowing
  //     setOverflowStates((prev) => {
  //       const newOverflowStates = [...prev];
  //       newOverflowStates[index] = titleElement.scrollHeight > titleElement.clientHeight;
  //       return newOverflowStates;
  //     });
  //   }
  // };

  // useEffect(() => {
  //   // On mount, check overflow for all cards
  //   ticket.forEach((_, index) => checkOverflow(index));

  //   // Re-check overflow on window resize
  //   const handleResize = () => {
  //     ticket.forEach((_, index) => checkOverflow(index));
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [ticket]); // Include the 'tickets' array as a dependency

  // useEffect(() => {
  //   // Adjust margin-top dynamically based on overflow status
  //   overflowStates.forEach((isOverflowing, index) => {
  //     if (bottomContainerRefs.current[index]) {
  //       bottomContainerRefs.current[index].style.marginTop = isOverflowing ? '0.1rem' : '0.5rem';
  //     }
  //   });
  // }, [overflowStates]); // Effect runs when overflowStates change




  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
          {!hideProfileIcon && <Profile name={userData.name} activityStatus={userData.available} />}
        </div>
        <div className='middle-container'>
          {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        <div className={`tag-container ${!hidePriorityIcon ? 'with-content' : ''}`}>
          {!hidePriorityIcon && getPriorityIcon(getPriority(ticket.priority))}
        </div>
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  )
}