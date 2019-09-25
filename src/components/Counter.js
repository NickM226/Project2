/*
import React, { Component } from 'react';

//start writing class based components

export default class Counter extends Component{
    //every class needs a constructor
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    //arrow function 
    //fundamental way to write functions in React
    increment = () => {
        let curVal = this.state.count;
        let newVal = curVal + 1;
        this.setState({
            count: newVal
        })
    }

    

    //every class needs a render as well
    render(){
        return( //render needs to return something because it is a function
            //to return multiple things, use a div (which is like an empty container) and put stuff inside.
            <div>
                <p>this is the main button.</p>
                <button onClick ={() => this.increment()}>Click Me!!!</button>
                <p>The current count is: {this.state.count}</p>
            </div>
        );
    }
}
*/