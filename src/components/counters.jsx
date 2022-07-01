import React, { Component } from 'react';
import Counter from "./counter";



class Counters extends Component {
    
    render() { 
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <button 
                className='btn btn-primary btn-sm m-2'
                onClick={onReset}
                >Reset</button>
                {counters.map(counter => (
                    <Counter 
                    key={counter.id}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement} 
                    onDelete={onDelete}
                    counter={counter}>

                  </Counter>  
                ))}
            </div>


        );
    }
}
 
export default Counters;