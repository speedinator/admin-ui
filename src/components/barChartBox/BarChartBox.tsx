import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData:object[];

}

const BarChartBox = (props:Props) => {

    // const test = props.dataKey

    // const test2 = JSON.stringify(props.dataKey)

    console.log(props.dataKey)

  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Bar dataKey={props.dataKey} fill={props.color} />
                <Tooltip 
                contentStyle={{backgroundColor: "#2a3447", borderRadius: "5px" }}
                labelStyle={{display: "none"}}
                cursor={{fill:"none"}}
                />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
