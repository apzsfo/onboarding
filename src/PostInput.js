import React, { useState } from 'react';
import firebase from 'firebase';

export default function PostInput() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
  });

  function addToFirebase() {
    firebase.firestore().collection('posts').add(post);
  }

  return (
    <>
      <input onChange={(e) => setPost({ ...post, title: e.target.value })} />
      <input onChange={(e) => setPost({ ...post, body: e.target.value })} />
      <input onChange={(e) => setPost({ ...post, author: e.target.value })} />
      <button type="button" onClick={() => { addToFirebase(); }}>Submit</button>
    </>
  );
}
