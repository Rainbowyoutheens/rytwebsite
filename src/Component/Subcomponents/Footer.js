import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
      <div className="container white-text">
        <div className="row">
          <div className="col-md-6 row footer-row1">
            <img className="col-md-5" src="images/ryt-logo-WHITE.png" alt="logo" width="100" height="70" />
            <p className="col-md-7 align-left">Rainbow Youtheens is a family where young people are trained, moulded, nurtured,
               inspired, empowered and developed to serve GOD with passion and become the best
               in life</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 row">
            <div className="col-md-6">
              <ul className="align-left">
                <Link to="/Blog" className="text-link"><li>POSTS</li></Link>
                <Link to="/Events" className="text-link"><li>EVENTS</li></Link>
                <Link to="/Events" className="text-link"><li>AWARDS</li></Link>
                <Link to="/Academy" className="text-link"><li>FOUNDATION ACADEMY</li></Link>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="align-left">
                <Link to="/About" className="text-link"><li>ABOUT US</li></Link>
                <Link to="/Contact" className="text-link"><li>CONTACT</li></Link>
                <Link to="/Blog" className="text-link"><li>VIDEO</li></Link>
                <Link to="/Blog"><li></li></Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-left">
          <p>Copyright &copy; 2022 Rainbow Youtheens Ministry</p>
        </div>
      </div>
    </div>
  )
}

export default Footer