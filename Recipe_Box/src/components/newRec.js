import React from 'react';
import { Component } from 'react';

export default class Newrec extends Component {
     
  

     render() {
        return (
        <div>
         <div id="newrecpe">
    <form onSubmit={this.submitForm}>
    <br />
         Dish name: <br />
         <br />
       <input type="text" id="dishname"></input> <br />
       <br />
       Ingredients:
       <br />
       (please separate each 
        <br />ingredient by comma)
       <br />
       <br />

       <textarea rows="4" cols="25">
       </textarea>
       <br />
       <br />
        <input type="submit" id="submit"></input>
       </form>
    </div>
    </div>
    );
  }         

  submitForm(){

    var dishname=$('#dishname').val();
    alert(dishname);
    var ingredients=$('textarea').val();
    var res=ingredients.split(",");
    var root = React.createElement('div', { className: 'dishes' });
    root.textContent="hihihi";
    ReactDOM.render(root, document.getElementById('box'));
  }
    


}

