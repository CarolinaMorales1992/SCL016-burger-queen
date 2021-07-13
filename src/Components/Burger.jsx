import React, {useState} from 'react'
import {Menu} from '../Menu.json'
import {Link} from 'react-router-dom'
//let arrayMenu = require('./Menu.json');

const Burger = (props) => {


    const [food, setFood] = useState(Menu)
    
    
    let burgerFood = food.filter(item => item.type === "Hamburguesas")

    function burgerBtnFood(name, price) {
        props.burgerTypeProp(name);
        props.burgerPriceProp(price);
    }

    return ( 
        <div>
            
            <ul>
                {
                burgerFood.map((item,i)=> (
                     
                    <li key={i}>
                        <button className = "burgers" style={{height:400, width: 300}} onClick = {() => burgerBtnFood(item.name, item.price)}>
                        {<img src = {item.images} style={{height:200, width: 250}}/>}
                          <p><b>{item.name}</b></p>
                          <p className="descriptionFood"><i>{item.description}</i></p>
                          <p>${item.price}</p>
                        </button>
                    </li>  
                   
                    ))
                }          
            </ul>
        </div>
    )
}

export default Burger