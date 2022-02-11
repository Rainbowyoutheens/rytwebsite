import React from 'react';
import Icons from "./Icons"

function cards() {
  return <div >
    <div className="App-header">
      <h1>RECENTS POSTS</h1>
      <div className="underline-1"></div>
    </div>    
    <div className="row">
      <div className="col-md-4">
        <div className="card shadow">
          <img src="/myImages/wyp-2.png" className="width-100 border-bottom img-radius" alt="services"/>
          <div className="card-body">
            <h6>Self Discovery</h6>          
            <div><p>Fevruary 10, 2022.</p></div>
            <p>We have mapped out the schools within Port-Harcourt Metropolis
                that are seriously affected by this menace (cultism).
            </p>
          </div> 
          <Icons />                      
        </div>
      </div>    
      <div className="col-md-4">
        <div className="card shadow">
          <img src="/myImages/cum.jpg" className="width-100 border-bottom img-radius" alt="services"/>
          <div className="card-body">
            <h6>Community Development</h6>         
            <div><p>Fevruary 10, 2022.</p></div>
            <p>We hold the saying, “empower a teenager with the right information, and 
                you have liberated a whole community from collapsing” .
            </p>
          </div>
          <Icons />                
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow">
          <img src="/myImages/wyp.png" className="width-100 border-bottom img-radius" alt="services"/>
          <div className="card-body">
            <h6>Building Young People</h6>          
            <div><p>Fevruary 10, 2022.</p></div>
            <p>To help every young person transform into a complete person GOD has 
                created them to be as they fully become a RAINBOW.
            </p>
          </div>
          <Icons />                
        </div> 
      </div> 
    </div>
    <div><button className="btn-1 button-bg"><strong>SEE MORE POSTS</strong></button></div>
        
  </div>;
}

export default cards;
