import React from 'react';
import MyButton from './MyButton';

export default function ButtonGroup({buttons}) {
  return (
    <>
      {buttons.map((button, index) => (
        <MyButton
          key={index}
          color={button.color}
          title={button.title}
          access={button.access}
        />
      ))}
    </>
  );
}
