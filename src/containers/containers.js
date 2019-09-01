import React , {Component} from 'react';
import './containers.css';

export default class Containers extends Component{

    render(){
        return(
            <div className="container Mt-50">
                { this.props.children }
            </div>
        )
    }
}