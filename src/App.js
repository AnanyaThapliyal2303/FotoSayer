import React from 'react';
import './App.css';
import Post from './Post';

function App() {
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

        <Post username='ananya.thapliyal' caption=" Hello Cutiee..." imageUrl='https://petavistaaquaculture.in/team/Dwitrisha.jpeg'/>
        <Post username='dwitrisha' caption=" Hello" imageUrl='https://www.ikea.com/in/en/images/products/smycka-artificial-flower-rose-red__0903311_pe596728_s5.jpg'/>
        <Post username='swim.trish' caption=" World" imageUrl='https://www.thespruce.com/thmb/XuFXZRtRZTcA4qkm4WMc_dTkO8s=/2832x2832/smart/filters:no_upscale()/gazania-flowers-1315701_10-d5712d24749940ee90fab455ed9d0562.JPG'/>

        </div>
    );
}

export default App;
