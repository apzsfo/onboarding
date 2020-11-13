import React, { useState } from 'react';

export default function Post() {
  const [text, setText] = useState(''); // use empty string as our initial value
  const [displayText, setDisplayText] = useState(''); // text that is actually displayed to the screen

  // return an input that displays our text whenever we click the button
  return (
    <>
      <div>
        {displayText}
      </div>
      <input onChange={(e) => { setText(e.target.value); }} />
      <button type="button" onClick={() => { setDisplayText(text); }}>Click me!</button>
    </>
  );
}
