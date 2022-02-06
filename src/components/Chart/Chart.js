import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const datapointValues = props.datapoints.map(
    (datapoints) => datapoints.value
  );
  const totalMaximum = Math.max(...datapointValues);

  return (
    <div className="chart">
      {props.datapoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
