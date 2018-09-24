import React , { Component } from 'react';
import './style.css';
class ConditionalRendering extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

render() {

    const {
        className,
        isActive,
        ...other
      } = this.props;

return(

    <div className={`default ${className} ${this.props.isActive ? 'blue' : ''}`} { ...other }>  
    <h1> Return This Content </h1>
    </div>
);


}
}

export default ConditionalRendering; 