import React from "react";
import NavBar from "./navbar";


function More (props) {
    return (
        <div className="more-main">
          <NavBar />
          <div className='more-body'>
              Coming Soon!
          </div>
          <footer>
            <p style={{margin: 'auto', verticalAlign: 'text-bottom'}}>Created by Sameer Mithani</p>
          </footer>
        </div>
      );    
}

export default More;