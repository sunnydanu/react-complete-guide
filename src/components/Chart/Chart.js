import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                max={totalMaximum}
                label={dataPoint.label}
                value={dataPoint.value} />)}
    </div>

}

export default Chart;