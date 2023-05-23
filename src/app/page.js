'use client';

import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import CalcButton from './components/button';
import InputButton from './components/button';
import { Input } from 'postcss';

export default function Home() {
  const [display, setDisplay] = useState('0');
  // let display = 'Tes';

  // Elements
  const elements = [
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '.',
    '0',
    ',',
  ];

  // Computing Function

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

  const clear = () => {
    setDisplay('0');
  };

  const del = () => {
    let calc = display;
    let end = calc.length;
    // setCalc(display.replace(end, ''));
    end == 1 ? setDisplay('0') : setDisplay(calc.slice(0, end - 1));

    // setDisplay(calc.slice(0, end - 1));
  };

  const equal = () => {
    let operation = display;
    let res = eval(operation);
    setDisplay(String(res));
  };

  // Styling

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'gray',
    },

    box: {
      // margin: '2px',
      paddingTop: '4px',
      paddingBottom: '4px',
      display: 'flex',
      justifyContent: 'space-around',
      width: '150px',
      backgroundColor: '#0080ff',
    },

    btn: {
      width: '30px',
      height: '30px',
    },

    debug: {
      backgroundColor: 'white',
    },
  };

  return (
    <div className='bg-gray-200 w-full max-w-[28.25rem] min-h-[38rem]'>
      <div className='px-6 py-0 flex justify-end items-end  h-[7rem]'>
        <h3 className='text-6xl'>{display}</h3>
      </div>
      <div className=' pt-5 px-2 text-gray-900 flex justify-between flex-wrap'>
        <Button
          className='w-[5.5rem] h-[5rem] text-xl text-center rounded-3xl mb-5'
          size='lg'
          onClick={() => clear()}
        >
          AC
        </Button>
        <Button
          className='w-[5.5rem] h-[5rem] text-xl text-center rounded-3xl mb-5'
          size='lg'
          onClick={() => del()}
        >
          D
        </Button>
        {/* <InputButton
            element={'%'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'/'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'7'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'8'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'9'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'*'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'6'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'5'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'4'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'-'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'3'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'2'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'1'}
            display={display}
            setDisplay={setDisplay}
          />
          <InputButton
            element={'+'}
            display={display}
            setDisplay={setDisplay}
          /> */}
        {elements.map((element) => {
          return (
            <InputButton
              element={element}
              display={display}
              setDisplay={setDisplay}
            />
          );
        })}
        <Button
          className='w-[5.5rem] h-[5rem] text-xl text-center rounded-3xl mb-5'
          size='lg'
          onClick={() => equal()}
        >
          =
        </Button>
      </div>
      {/* <div style={style.container}>
      </div> */}
      {/* <div style={style.box}>
        <p style={style.debug}>{display}</p>
      </div> */}
      {/* <div style={style.box}>
        <button style={style.btn} onClick={() => clear()}>
          AC
        </button>
        <button style={style.btn} onClick={() => del()}>
          D
        </button>
        <button style={style.btn} onClick={() => push('%')}>
          %
        </button>
        <button style={style.btn} onClick={() => push('/')}>
          /
        </button>
      </div>
      <div style={style.box}>
        <button style={style.btn} onClick={() => push('7')}>
          7
        </button>
        <button style={style.btn} onClick={() => push('8')}>
          8
        </button>
        <button style={style.btn} onClick={() => push('9')}>
          9
        </button>
        <button style={style.btn} onClick={() => push('*')}>
          *
        </button>
      </div>
      <div style={style.box}>
        <button style={style.btn} onClick={() => push('4')}>
          4
        </button>
        <button style={style.btn} onClick={() => push('5')}>
          5
        </button>
        <button style={style.btn} onClick={() => push('6')}>
          6
        </button>
        <button style={style.btn} onClick={() => push('-')}>
          -
        </button>
      </div>
      <div style={style.box}>
        <button style={style.btn} onClick={() => push('1')}>
          1
        </button>
        <button style={style.btn} onClick={() => push('2')}>
          2
        </button>
        <button style={style.btn} onClick={() => push('3')}>
          3
        </button>
        <button style={style.btn} onClick={() => push('+')}>
          +
        </button>
      </div>
      <div style={style.box}>
        <button style={style.btn} onClick={() => push('.')}>
          .
        </button>
        <button style={style.btn} onClick={() => push('0')}>
          0
        </button>
        <button style={style.btn} onClick={() => push(',')}>
          ,
        </button>
        <button style={style.btn} onClick={() => equal()}>
          =
        </button>
      </div> */}
    </div>
  );
}
