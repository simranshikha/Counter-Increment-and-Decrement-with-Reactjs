import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count :0,
        // tags: ["Tag1", "Tag2", "Tag3"]
    }

    handlerIncrement = () => {
        this.setState({count: this.state.count + 1});
    };
    render() {       

        return (
            <div>
                <span className={ this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.handlerIncrement} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
            </div>
        ); 
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero'  : count;
    }
}

export default Counter ;