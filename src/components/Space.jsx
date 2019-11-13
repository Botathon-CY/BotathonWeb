import React from 'react';
import '../styles/Boxes.css';

class Space extends React.Component {


    render() {
        return(
            <div className="outerBox">
                <div className="valueBox">
                {this.props.numberValue}
                </div>
                <div className="nameBox">
                    {this.props.valueName}
                </div>
            </div>
                )};
}

export default Space;