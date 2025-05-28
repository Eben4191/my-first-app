
import {useState} from "react";
import {Link} from 'react-router-dom';
export function Nav (){
    return(
        <div>
             < div className = "top">
            <h3>ebenX training layout</h3> 
            </div>
        <nav>
            <ul className="nav-list">
            <li> <Link to="/" className="nav-link">Homepage</Link> </li>
             <li> <Link to ="/about-me" className="nav-link">AboutMe</Link> </li>
             <li><Link to ="/Contact" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
        </div>
    )
}
 export function Promo(){
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const[result,setResult] = useState(0);
    const distance = parseFloat(num1);
    const time = parseFloat(num2)
    const speed= () => setResult(distance / time);
    return(
        <div className = "promo">
            <div className="Form">
            <h2>Speed:{result}</h2>
            <label for="dis">
                <b>Distance</b>
            <input id="dis"  type="number"placeholder="distance" value= {num1} onChange={(e)=>setNum1 (e.target.value)} /><br/>
            </label>
            <label for="time"> 
                <b>Time in s</b>
            <input id ="time" type = "number" placeholder="time" value ={num2} onChange ={ (e) =>setNum2 (e.target.value)} /> <br/>
            </label>
        <button onClick={speed}>calculate</button>
        </div>
        </div>
        
    )
}
export function Card(){
    return(
    <div className = "container">
        <div className = "card">
            <h2>This is the first heading of the card one</h2>
            
        </div>
        <div className ="card">
            <h2>this is the second heading of the card two</h2>
        </div>
    </div>
    );
}
export function Middle(){
    return(
        <div className = "middlediv">
            <div className ="middletext">
           <h2> this is the middle session.</h2>
            </div>
        </div>
    )
}
export function Footer(){
    return(
        <footer>
        <p>this is the footer it usually contain some copyright info</p>
        </footer>
    )
}
