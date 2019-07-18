import React, {Component} from 'react';





class Fontchange extends Component {
    fireKey = e => {
       e.keyPress = 17 && 107  ;             
     }
     render () {
       return (
         <div>
           <button onClick={this.fireKey}> > </button>
         </div>
       )
     }
   }

   export default Fontchange;