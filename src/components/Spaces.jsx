import React from 'react';
import Space from "./Space";
import Graph from "./Graph";
import '../styles/Boxes.css';

class Spaces extends React.Component {

    constructor(props){
        super(props);
        this.state = { hospitalName: '', hospitalDetails: {}};
    }


    handleChange = event => {
        event.preventDefault();
        const hospName = this.name.value;
        let hospital = require('../content/test.json');
        console.log(hospital.name);
        this.setState({
            hospitalName: hospName,
            hospitalDetails: hospital
        });

    };



    renderStuff()
    {
        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }

        if (!isEmpty(this.state.hospitalDetails)) {

                return (
                <div>
                    <h3>
                        Current Parking Availability for  {this.state.hospitalName}
                    </h3>
                    {
                        this.state.hospitalDetails.parking_areas.map(title =>
                            <Space numberValue={title.spaces}
                                   valueName={title.name}/>
                        )}

                    <br />
                    <h3>
                        Anticipated Parking Availability for  {this.state.hospitalName}
                    </h3>
                    <Graph />
                </div>);
            }

    }

    render() {
        return(
            <>
                <h2>
                Enter the name of a hospital below

                </h2>
                <form onSubmit={this.handleChange}>
                <input type="text" className="textBox" ref={input => this.name = input}></input>
                 <br />
                <button className="buttonStyle">Find</button>
                </form>

                {this.renderStuff()}


            </>
        )
    }
}

export default Spaces;