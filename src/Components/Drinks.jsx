import React, {useState} from 'react'
import {Menu} from '../Menu.json'
import {Link} from 'react-router-dom'
//let arrayMenu = require('./Menu.json');

const Drinks = (props) => {


    const [food, setFood] = useState(Menu)
    

    let drinksFood = food.filter(item => item.type === "Bebidas")

    function drinkBtnFood(name, price) {
        props.drinkTypeProp(name);
        props.drinkPriceProp(price);
    }

    return ( 
        <div>
            <ul>
                {
                drinksFood.map((item,i)=> ( 
                       <li key={i}> 
                       <button className = "drinks" style={{height:400, width: 300}} onClick = {() => drinkBtnFood(item.name, item.price)}>
                        {<img src = {item.images} style={{height:200, width: 200}}/>}
                        <p><b>{item.name}</b></p>
                        <p className = "descriptionFood"><i>{item.description}</i></p>
                        <p>${item.price}</p>
                        
                        </button>
                    </li>  
                ))
                }    

                       
                
            </ul>

        </div>
    )
}

export default Drinks
