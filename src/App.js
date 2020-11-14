import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import Post from './Post';
import PostInput from './PostInput';
import './App.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('posts').get().then((sc) => {
      const post = [];
      sc.forEach((doc) => {
        post.push(doc.data());
      });

      setPosts(post);
    });
    firebase.firestore().collection('posts').onSnapshot((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const processedPosts = posts.map((post) => (
    <Post
      title={post.title}
      body={post.body}
      author={post.author}
    />
  ));

  return (
    <>
      <h1>Posts</h1>
      {processedPosts}
      <PostInput />
    </>
  );
}

export default App;
