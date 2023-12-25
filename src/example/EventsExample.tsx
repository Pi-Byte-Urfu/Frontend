import React, { FC, useRef, useState } from 'react';

const EventsExample:FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef.current?.value)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('Drop')
  }
  
  return (
    <div>
      <input value={value} onChange={changeHandler} type='text' placeholder='управляемый'/>
      <input ref={inputRef} type='text' placeholder='неуправляемый'/>
      <button onClick={clickHandler}>
        Кнопка
      </button>
      <div draggable style={{width: 200, height: 200, background: 'red', marginBottom: 20}}>
      </div>
      <div style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginBottom: 20}}
        onDrop = {dropHandler}
        onDragLeave = {leaveHandler}
        onDragOver = {dragWithPreventHandler}
      >

      </div>
    </div>
  );
};

export default EventsExample;