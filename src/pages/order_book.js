import React from "react";
import API from "./API"
import { useState } from "react";



function Dropdown(){

  const [ordertype,setordertype] = useState('');
  const [quantity,setquantity] = useState(null);
  const [price,setprice] = useState(null);
  const [type,settype] = useState(null)

  function savedata(){


    let data={ordertype,quantity,price,type}
    fetch("http://localhost:3000/orders",{
      method:'POST',
      headers:{
        'Accept' : 'application/json' ,
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.log(result);

    })

  }

  function buy(){
    settype('buy');
    savedata();
  }

  function sell(){
    settype('sell');
    savedata();
  }

  
  return(
    <form className="place_order_open_menu" id="menubox" >
                      <div className="place_order_open_menu_inputs">
                        <select value={ordertype} onChange={(e) => setordertype(e.target.value)} className="ordertype" required>
                          <option value disabled selected hidden>Order Type</option>
                          <option value='Limit'>Limit</option>
                        </select>
                        <input type="number" value={quantity} onChange={(e) => setquantity(e.target.value)} id="quantity" min={0} max step={1} placeholder="Quantity" required />
                        <input type="number" value={price} onChange={(e) => setprice(e.target.value)} id="price"  min={0} max step="0.05" placeholder="Price" required />
                        <div className="place_order_open_menu_btn">
                          <input type="submit" className="bs" defaultValue="Buy" onClick ={buy} />
                          <input type="submit" className="bs" defaultValue="Sell" onClick ={sell} />
                          {/* <button type="submit" formaction="/action_one">First action</button>
                                <button type="submit" formaction="/action_two">Second action</button>
                     */}
                        </div>
                      </div></form>
  )
}

function PlaceOrder(props){

  const [open,setOpen] = useState(false);

  return(
    <>
    <button className="place_order_btn" onClick={() => setOpen(!open)}>
    <i className="fa-solid fa-envelope-open-dollar" /> 
    <i className="fa fa-fw fa-envelope" style={{fontSize: '13px', color: '#efefef'}} />
    Place Order
    <i className="fa fa-angle-right" style={{marginLeft: '60px'}} id="arrow" /><transform />
    </button>

    {open && props.children }
    </>
  )

}



class Home extends React.Component {
    render(){
        return(
            <>
            <main>
            <div id="b-placeholder">
            </div>
            <div id="display_screen" className="clicking">
              <div className="side_menu">
                <ul className="menu_items">
                  <form action target="_self" method="post">
                    <li className="item_1">
                      {/* <select className="symbol" id="symbols" required>
                        <option value disabled selected hidden>Select a Symbol</option>
                        <option value={1}><API /></option>
                      </select> */}
                      <API/>
                    </li>
                    <li className="item_2">
                      {/* <input type="submit" value=" View Order Book"> */}
                      <button className="view_order_btn" onclick="return validate()"><i className="fa fa-eye" style={{fontSize: '14px', color: '#efefef'}} />
                        View Order Book
                      </button>
                    </li>
                  </form>
                  <li className="item_3"> 
                  <PlaceOrder>
                  <Dropdown />
                  </PlaceOrder>
                  </li>
                  
                      </ul>
              </div>
              <div id="empty_screen">
                Order book display
              </div>
            </div>
          </main>
          </>
        );
    }
}

export default Home;

