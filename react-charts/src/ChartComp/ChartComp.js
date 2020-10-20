import React from 'react';
import { Pie } from 'react-chartjs-2';

const ChartComp = (props) => {
    return (
        <div>
            <Pie height={50}data={props.data} />
        </div>
    )
}

export default ChartComp;
