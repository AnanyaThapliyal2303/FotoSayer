import React, {useState, useEffect} from 'react';
import './App.css';
import { db } from './firebase';
import Post from './Post';

function App() {
    const [posts, setPosts]=useState([]);

// useEffect Runs a piece of code based on a specific condition

useEffect(()=>{
    //this is where code runs
db.collection('posts').onSnapshot(snapshot =>{
    //every time a new post is added, this code fires
    setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
    }))); //map allows to loop through a lot of documents like for loop
})
},[]); //it would run once when the app component loads but also everytime the variable '' changes

    return ( 
    <div className = "App" >
        <div className = "app__header" >
            <img 
              className = "app__headerImage"
              src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt = "insta" 
            />
        </div>
        
        <h1> Let 's build an Instagram Clone with React</h1>

        {
            posts.map(({id, post}) => (
                <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
            ))
        }



        </div>
    );
}

export default App;
