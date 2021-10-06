import React from 'react';
import { Pie } from 'react-chartjs-2';



export default class PieChart extends React.Component {

    render() {
        return (
            <div className="pieChart">
                <Pie
                    style={{width: "70", height: "50",color: "black", hoverBorderColor: "blue"}}
                    data={this.props.data}
                    options={{
                        title: {
                            display: false,
                            text: 'Percentage of Global Cases',
                            fontSize: 2
                        },
                        legend: {
                            display: false,
                            position: 'left',
                        }
                    }}
                />
            </div>
        );
    }
}

