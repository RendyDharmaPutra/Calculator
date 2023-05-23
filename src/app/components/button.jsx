'use client';

import { Button } from '@material-tailwind/react';

export default function InputButton({ element, display, setDisplay }) {
  const push = (val) => {
    let calc = display;
    let length = calc.length;
    const operator = ['%', '/', '*', '+', '-'];
    if (
      calc.startsWith('0') &&
      !operator.includes(val) &&
      !operator.includes(calc[1])
    ) {
      calc = '';
      // setDisplay(calc.concat(val));
    } else if (
      operator.includes(calc[length - 1]) &&
      operator.includes(val)
      // && calc[length - 1] == val
    ) {
      // setDisplay(calc);
      calc[length - 1] == val ? (val = '') : (calc = calc.slice(0, length - 1));
      // val = '';
    }

    setDisplay(calc.concat(val));
  };
  return (
    <Button
      className='w-[5.5rem] h-[5rem] text-xl text-center rounded-3xl mb-5'
      //   className='btn-input'
      size='lg'
      onClick={() => push(element)}
    >
      {element}
    </Button>
  );
}
