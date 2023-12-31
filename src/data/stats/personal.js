import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1994-05-07T07:21:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  // {
  //   key: 'places',
  //   label: 'Places I have been to',
  //   link: '',
  // },
  {
    key: 'location',
    label: 'Current city',
    value: 'San Francisco, CA',
  },
  {
    key: 'code_language',
    label: 'Favorite Language',
    value: 'Python',
  },
  {
    key: 'tv show',
    label: 'Favorite TV Shows',
    value: 'Ozark, Mindhunters, House of Cards',
  },
  {
    key: 'movie',
    label: 'Favorite Movies',
    value: 'La La Land, Manchester By the Sea',
  },

];

export default data;
