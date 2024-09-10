import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from './actions';
// import { changeTheNumber } from './reducers/upDown';

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container"> 

      <h1>Increment/Decrement counter</h1> 
      <h4>using React and Redux</h4> 

        <div className="quantity"> 
          <a className="quantity__minus" title="Decrement" onClick={()=> dispatch(decNumber())}><span>-</span></a>          
          <input name="quantity" type="text" className="quantity__input" value={myState} readOnly/> 
          <a className="quantity__plus" title="Increment" onClick={()=> dispatch(incNumber())}><span>+</span></a> 
          </div>
        </div>
    </>
  )
}

export default App