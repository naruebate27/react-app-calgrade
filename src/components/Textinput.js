import React, { Component } from 'react';

export default class Textinput extends Component{

render(){
    let props = this.props;
    return (
        <input type={props.type} className={props.classes} placeholder={props.placeholder} value={props.value} onChange={props.change}/>
    )
}}
