import React from 'react';
import { Chart } from "react-google-charts";
import './poll-result.css';

class PollResult extends React.Component {
    renderChart() {
        const question = this.props.poll.question;
        const options = this.props.poll.options;
        let data = [
            ["Option", "Votes"]
        ];

        options.forEach((option) => {
            data.push([option.description, option.votes]);
        });

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