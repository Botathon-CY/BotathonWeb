import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import "react-vis/dist/style.css";
import Space from "./Space";
import '../styles/Boxes.css';



class Graph extends Component {


    render() {


        let hospital = require('../content/testOverTime.json');

        let data2 = [];
        let dataObj= {};

        for(var i=0;i<hospital.length;i++){

            data2.push({y: hospital[i].predicted_space, x: new Date(hospital[i].time)});
        }


        return (
            <div className="graphDiv">
            <XYPlot xType="time"
                width={1000}
                height={400}>
                <HorizontalGridLines />
                <LineSeries
                    data={data2}/>
                <XAxis title="Time"/>
                <YAxis title="Spaces"/>
            </XYPlot>
            </div>
        );
    }

}

export default Graph;