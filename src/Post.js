import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, body, author }) {
  //   const [text, setText] = useState(''); // use empty string as our initial value
  // text that is actually displayed to the screen
  //   const [displayText, setDisplayText] = useState('');
  // return an input that displays our text whenever we click the button
  const post = `${title}: ${body} - ${author}`;
  //   console.log(displayText);
  return (
    <>
      <div>
        {post}
      </div>
      {/* <input onChange={(e) => { setText(e.target.value); }} /> */}
      {/* <button type="button" onClick={() => { setDisplayText(text); }}>Click me!</button> */}
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
