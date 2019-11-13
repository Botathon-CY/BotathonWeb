import React from 'react';
import Space from "./Space";
import Graph from "./Graph";

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

                    {
                        this.state.hospitalDetails.parking_areas.map(title =>
                            <Space numberValue={title.spaces}
                                   valueName={title.name}/>
                        )}

                    <br />
                    <Graph />
                </div>);
            }

    }

    render() {
        return(
            <>
                <p>
                Enter the name of a hospital below

                </p>
                <form onSubmit={this.handleChange}>
                <input type="text" ref={input => this.name = input}></input>
                 <br />
                <button>Find</button>
                </form>
                <p>
                  Parking for  {this.state.hospitalName}
                </p>
                {this.renderStuff()}


            </>
        )
    }
}

export default Spaces;