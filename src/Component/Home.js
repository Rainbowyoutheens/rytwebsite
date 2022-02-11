import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Subcomponents/Navbar";
import "../App.css";
import Cards from "../Component/Subcomponents/Cards";


function Home() {
  const background = "/myImages/girls22.png";  
  return <div>
    <header class="view" style={{backgroundImage: `url(${background})`}}>
      <div className="nav-main"><Navbar /></div>
      <div className='nav-content'>
        <div className="text-center">
          <h1 class="">
            <strong>"WE ARE HERE TO GUIDE AND MODEL YOUTHS AND TEENS"</strong>
          </h1>
          <p className="paragraph">Bulding a GODly generation...</p>
          <Link to="/Events" target="_blank" class="btn white-text">
          <button className="button"><strong>EVENTS</strong></button>            
          </Link>                   
        </div>                    
      </div>
      <div className="wytp">
        <Link to="/Events" target="_blank" class="btn white-text">
        <button className="button"><strong>WHEN YOUTH AND TEENS PRAY IN 3 DAYS</strong></button>            
        </Link>
      </div>
    </header>
    <section className="App-header">
      <h1>Welcome to Rainbow Youtheens</h1>      
      <div className="underline"></div>
      <div className="section-1">
        <p>We hold the saying, “empower a teenager with the right information, and 
              you have liberated a whole community from collapsing”. To help every young person transform into a complete person GOD has 
              created them to be as they fully become a RAINBOW.</p>
      </div>
    </section>
    <section className="container"><Cards /></section>
    <section className="section-2">
      <div><h2>Cultivating Youths and Teens all over the globe</h2></div>
      <div className="underline-2"></div>
      <div><h2>Equiping them with life skills</h2></div>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>    
  </div>;
}

export default Home;
