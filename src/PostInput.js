import React, { useState } from 'react';
import firebase from 'firebase';

export default function PostInput() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
    date: (new Date()).toTimeString(),
  });

  function addToFirebase() {
    setPost({ ...post, date: (new Date()).toTimeString() });
    if (post.title !== '' && post.body !== '' && post.author !== '') {
      firebase.firestore().collection('posts').add(post);
    }
  }
  return (
    <>
      <input placeholder="title" onChange={(e) => setPost({ ...post, title: e.target.value })} />
      <input placeholder="body" onChange={(e) => setPost({ ...post, body: e.target.value })} />
      <input placeholder="author" onChange={(e) => setPost({ ...post, author: e.target.value })} />
      <button type="button" onClick={() => { addToFirebase(); }}>Submit</button>
    </>
  );
}
