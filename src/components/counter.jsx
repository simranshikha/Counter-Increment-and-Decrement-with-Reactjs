import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate (prevProps,prevState){
        console.log("PrevProps", prevProps);
        console.log("prevState", prevState);
    }
    componentWillUnmount () {
        console.log("Counter - ")
    }

    state = {
        value :this.props.counter.value,
    }

    render() {       
        console.log("Navbar - Counter")
        return (
            <div className="row">
                <div className="col-2">
                    <h4>{this.props.id}</h4>
                    <span className={ this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                <button 
                    onClick={() => this.props.onIncrement (this.props.counter)} 
                    className="btn btn-secondary btn-sm"
                >+</button>

                <button 
                    onClick={() => this.props.onDecrement (this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2"
                    disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                >-</button>

                <button 
                 onClick={() => this.props.onDelete (this.props.counter.id)} 
                 className="btn btn-danger btn-sm ">Delete</button>
                </div>                
            </div>
        ); 
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero'  : value;
    }
}

export default Counter ;