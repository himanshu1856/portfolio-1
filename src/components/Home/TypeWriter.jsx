import React, { useState, useEffect } from 'react';

const TypeWriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    { text: 'Hey there !!  ....', color: '#B4D4FF' },
    { text: 'In About Me section....', color: '#B6C4B6' },
    { text: 'You can see my experience and skills....', color: '#B6C4B6' },
    // Add more lines as needed
  ];

  useEffect(() => {
    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex((index + 1) % texts.length);
      } else {
        setTimeout(() => {
          setSubIndex(subIndex - 1);
        }, 30);
      }
    } else {
      if (subIndex === texts[index].text.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      } else {
        setTimeout(() => {
          setSubIndex(subIndex + 1);
        }, 150);
      }
    }

    const blinkTimeout = setTimeout(() => {
      setBlink(!blink);
    }, 500);

    return () => clearTimeout(blinkTimeout);
  }, [subIndex, index, isDeleting, blink, loopNum]);

  return (
    <div>
      <span className='text-sm md:text-xl lg:text-3xl' style={{ color: texts[index].color }}>
        {`${texts[index].text.substring(0, subIndex)}${blink ? '|' : ' '}`}
      </span>
    </div>
  );
};

export default TypeWriter;
