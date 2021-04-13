import React, {FC, useState} from 'react';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  console.log('### > Hello')
  const [ , setCount] =useState(0)
  return <div>
    <h1>Hello React</h1>
    <button onClick={() => setCount(n => n+1)}>Click</button>
  </div>;
}
