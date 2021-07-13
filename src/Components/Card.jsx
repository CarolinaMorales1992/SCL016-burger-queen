import React, {useState, useEffect} from 'react';
import Burger from './Burger'
import Snack from './Snack'
import Drinks from './Drinks'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*----------------------------------- Estado de comidas, precio individual y total-------------------------------------------*/ 
const Card = () => {
/* Estado de hamburguesas */
const [burgerTypeState, setBurgerTypeState] = useState();
const [burgerPriceState, setBurgerPriceState] = useState();

/* Estado de bebidas */
const [drinkTypeState, setDrinkTypeState] = useState();
const [drinkPriceState, setDrinkPriceState] = useState();

/* Estado de acompañamientos */
const [snackTypeState, setSnackTypeState] = useState();
const [snackPriceState, setSnackcPriceState] = useState();

/* Comanda con precios de productos y total */
const [productList, setProductList] = useState([]);
const [totalList, setTotalList] = useState([]);
const [finalPrice, setFinalPrice] = useState(0);

/*------------------------------------------ Obtener y cambiar estados de comidas --------------------------------------------*/

/* Hamburguesas = burgers */ 

useEffect(() => {
  if (burgerTypeState != undefined) {
    productList.push(burgerTypeState);
  }

  if (burgerPriceState != undefined) {
    totalList.push(burgerPriceState);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    setFinalPrice(totalList.reduce(reducer));
  }
}, [burgerTypeState, burgerPriceState]);

/* Bebidas = drinks */

useEffect(() => {
  if (drinkTypeState != undefined) {
    productList.push(drinkTypeState);
  }

  if (drinkPriceState != undefined) {
    totalList.push(drinkPriceState);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    setFinalPrice(totalList.reduce(reducer));
  }
}, [drinkTypeState, drinkPriceState]);

/* Acompañamientos = snack */ 

useEffect(() => {
  if (snackTypeState != undefined) {
    productList.push(snackTypeState);
  }

  if (snackPriceState != undefined) {
    totalList.push(snackPriceState);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    setFinalPrice(totalList.reduce(reducer));
  }
}, [snackTypeState, snackPriceState]);

/* ----------------------------------------------------------------------------------------------------------------------------- */

    return (
     
    <Router>
    <div className='container mt-5'>
      <div className='row'>

      {/* TARJETA MENU */}
        <div className='col-md-8'>
          <div className='cardMenu'>
            <div className="list-group">
              <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
               
                  <Link to='/' className="btn btn-lg btn-primary bloc" type="button">
                  Hamburguesas
                  </Link>   
               
                  <Link to='/Acompañamiento' className="btn btn-lg btn-primary bloc" type="button">
                  Acompañamiento
                  </Link>
                  
                  <Link to='/Bebidas' className="btn btn-lg btn-primary bloc" type="button">
                  Bebidas
                  </Link>

              </div>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <fieldset className="form-group">
                <div className="btn-group-vertical">
                  <Switch>
                    <Route path='/' exact>
                      <Burger burgerTypeProp={setBurgerTypeState} burgerPriceProp={setBurgerPriceState} />
                    </Route>
                    <Route path='/Acompañamiento'>
                    <Snack snackTypeProp={setSnackTypeState} snackPriceProp={setSnackcPriceState} />
                    </Route>
                    <Route path='/Bebidas'>
                      <Drinks drinkTypeProp={setDrinkTypeState} drinkPriceProp={setDrinkPriceState} />
                    </Route>
                  </Switch>

                  </div>
                </fieldset>
              </a>
            </div>
          </div>
        </div>
        
        {/* TARJETA COMANDA */}
        <div className='col-md-4'>
          <div className='cardTicket'>
            <div className="list-group">
            <div className="card text-white bg-primary">
              <div className="card-header">Orden</div>
              </div>
              <a className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Items</h5>
                  <small className="text-muted">

                  <ul>
                        {
                        productList.map((item,i)=> (
                            
                            <li key={i}>              
                                  <p>{`${item} $${totalList[i]}`}</p>
                            </li>  
                          
                            ))
                        }          
                  </ul>

                  </small>
                </div>
                <p className="mb-1">TOTAL ${finalPrice}</p>
                <small className="text-muted">{}</small>
              </a>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre cliente" id="inputDefault" />
                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                <label className="btn btn-primary" htmlFor="btncheck3">Enviar</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Router>  
    )
}

export default Card
