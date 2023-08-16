import { Bar, BarChart, ResponsiveContainer } from "recharts";
import "./chartBar.scss";

const ChartBar = (props:any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={props.chartData}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
