import React from 'react';
import { Chart } from "react-google-charts";
import './poll-result.css';

class PollResult extends React.Component {
    // Render a pie chart for the poll (using Google Charts)
    renderChart() {
        // 1. Set the pie chart's dataset to contain options and votes.
        const options = this.props.poll.options;
        let data = [
            ["Option", "Votes"]
        ];

        // 2. Add all of the poll's options and their votes to the dataset for the chart.
        options.forEach((option) => {
            data.push([option.description, option.votes]);
        });

        // 3. Create the pie chart template for rendering.
        return (
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    is3D: true,
                    legend: {
                        alignment: 'center',
                        textStyle: {
                            fontSize: 16
                        }
                    }
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        );

    }

    // Render the pie chart.
    render() {
        return (
            <div className="poll-result">
                <h3>{this.props.poll.question}</h3>
                {this.renderChart()}
            </div>
        );
    }
}

export default PollResult;