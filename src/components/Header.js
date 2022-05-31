import React from "react";
import {NavLink} from "react-router-dom";
import {useState,useEffect,useRef} from "react";


function Idinput(){

  const [id,changeid] = useState("");

  const enterid = useRef(null);
  const enteruser = useRef(null);

  const detectKeydown = (e) =>{

    e.preventDefault()
    
    if(e.key === 'Enter' && id !== "")
    {
      var h=document.createElement('h4')
      h.innerHTML="User ID: " + enterid.current.value;
      enteruser.current.replaceChild(h,enterid);
      h.style.backgroundColor="#ffff44"
      enteruser.current.style.backgroundColor="#ffff44";
    }
  }

  useEffect(() => {
    window.addEventListener('key',detectKeydown,true);
  }, [id])


  return(
  <div className="enter_user" id="enteruser" ref={enteruser}>
  <li>
  <input type="number" value={id} onChange = {e => changeid(e.target.value) } placeholder="Enter User ID" id="enterid" ref={enterid} required />
  <span><i className="fa fa-user" style={{fontSize: '40px', color: 'rgb(75, 75, 75)'}} /></span>
  </li> 
  </div>
  );
}


class Header extends React.Component{
    render(){
        return(
            <header>
                 <nav className="navbar">
        <ul style={{display: 'block'}} >
        <div className="items">
          <div className="navbar_left_items clicking">
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">☰</label>
            <div id="collapse">
              <li>
                <NavLink to="" className="order_book" >Order Book</NavLink>
              </li>
              <li>
                <NavLink to = "order_history" className="order_history">Order History</NavLink>
              </li>
            </div>
          </div>
          <div className="navbar_right_items" id="user">
            {/* <form action="" target="_blank" method="post" > */}
            {/* <div className="enter_user"> */}
              
              {/* <li> */}
              <Idinput />
                {/* <input type="text" placeholder="Enter User ID" id="id" ref={id} required />
                <span>
                  <i className="fa fa-user" style={{fontSize: '40px', color: 'rgb(75, 75, 75)'}} /></span> */}
              {/* </li>
            </div> */}
          </div>
        </div>
        </ul>
      </nav>

            </header>
        );
    }
}

export default Header;