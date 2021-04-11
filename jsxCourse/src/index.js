//import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//create react component

const App = function(){
    const buttonText = 'click me';
   

    return (
        <div>
    <label className ="label" htmlFor = "name">enter name </label>
    <input id ="name" type = "text"  ></input>
  <button style = {{backgroundColor: 'blue' , color: 'white'}}>
      
{buttonText}</button>
  
    
  </div>
    );
}
// take react component and show it to screen
ReactDOM.render(
    <App/>, 
    //need this to show anything on screen//
    document.querySelector('#root')
);
