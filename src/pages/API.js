import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";

function API() {
    const [symbols, setSymbols] = useState([]);

useEffect(() => {
    axios.get("localhost:9090/getsymbols")
        .then(Res => {
          setSymbols(Res.data.symbols);
     })
        .catch(err => {
          console.log(err)
        })

},["localhost:9090/getsymbols"])

  return(
    
      
        
          <select className="symbol" id="symbols" required>
          <option value disabled selected hidden>Select a Symbol</option>
          {
          symbols.map(symbols => (
            <option value={symbols}>{symbols}</option>
          ))
          }
          </select>
      
    
  )
}

export default API;