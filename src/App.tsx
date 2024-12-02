import React from 'react';
import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
// import './App.css';
import 'boxicons'
function App() {
  return (
    <div >
     <Navbar/>
     <Main
            title="Consectuer vehicula ab"
            title2="November 21,2017/ kitchen ,Lifestyle"
            image="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos dolores amet ut voluptas iure tenetur reiciendis accusamus perferendis. Repellendus, quasi. Soluta nobis distinctio nulla? Inventore harum molestiae cum rerum!"
            title3="Consectuer vehicula ab Consectuer vehicula ab"
            title4="November 21, 2017 / Kitchen, Lifestyle"
            description2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that;"


          />
     <Footer/>
    </div>
  );
}

export default App;
