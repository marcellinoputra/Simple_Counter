import React, { Component } from 'react';

class Counter extends Component { 
   render(){
    return (
        <div>
            <span 
                style={{fontSize: 30}} 
                className={this.getBadgeClasses()}>{this.formatCount()}
            </span>
            <button 
                style={{fontSize: 30, margin: 5}} 
                className='btn btn-primary btn-sm' 
                onClick={ () => this.props.onIncrement(this.props.counter)}>Tambah</button>
            <button
                style={{fontSize:30}}
                className='btn btn-secondary btn-sm'
                onClick={() => this.props.onDecrement(this.props.counter)}>Kurang
            </button>
            <button 
                onClick={ () => this.props.onDelete(this.props.counter.id)} 
                className='btn btn-danger btn-sm m-2'>Hapus</button>
        </div>
    );
   }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

   formatCount(){
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
   }
}

 
export default Counter;