import React, { Component } from "react";
import Fcomponent from './Fcomponent'

export default class Ccomponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Button not pressed'
        };
        this.updateData = this.updateData.bind(this);
    }
    updateData (value){
        this.setState({
            name: value
        });
    }
    render(){
        return(
        <div>
            <p>Statet: {this.state.name}</p>
            <Fcomponent 
            updateData={this.updateData}
            />
        </div>
        );
    }
}