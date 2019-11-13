import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import "react-vis/dist/style.css";
import Space from "./Space";



class Graph extends Component {




    render() {

        const MSEC_DAILY = 86400000;


        let hospital = require('../content/testOverTime.json');

        let data2 = [];
        let dataObj= {};

        for(var i=0;i<hospital.length;i++){

            const timestamp = new Date(hospital[i].time).getTime();
            console.log(timestamp);
            data2.push({y: hospital[i].predicted_space, x: new Date(hospital[i].time)});
        }

        console.log(data2);


        return (
            <XYPlot xType="time"
                width={1000}
                height={600}>
                <HorizontalGridLines />
                <LineSeries
                    data={data2}/>
                <XAxis title="X Axis"/>
                <YAxis title="Y Axis"/>
            </XYPlot>
        );
    }

}

export default Graph;