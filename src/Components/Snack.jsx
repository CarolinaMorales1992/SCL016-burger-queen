import React, {useState} from 'react'
import {Menu} from '../Menu.json'
import {Link} from 'react-router-dom'
//let arrayMenu = require('./Menu.json');

const Snack = (props) => {


    const [food, setFood] = useState(Menu)
    

    let snackFood = food.filter(item => item.type === "Acompañamiento")

    function snackBtnFood(name, price) {   
       props.snackTypeProp(name);
       props.snackPriceProp(price);
    }

    return ( 
        <div>
            <ul>
                {
                snackFood.map((item,i)=> ( 
                       <li key={i}> 
                       <button className = "snacks" style={{height:400, width: 300}} onClick = {() => snackBtnFood(item.name, item.price)}>
                        {<img src = {item.images} style={{height:200, width: 250}}/>}
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



export default Snack