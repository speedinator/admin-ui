import "./home.scss";
import ChartBox from "../../components/chartBox/ChartBox";
import TopBox from "../../components/topBox/TopBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxRevenue, chartBoxUser } from "../../data";
import { chartBoxProduct } from "../../data";
// import ChartBar from "../../components/chartBar/ChartBar";
// import { BarChart, PieChart } from "recharts";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

const Home = () => {

  // const test ="tes4t"
  // console.log(chartBoxUser)
  return (
    <div className="home">
      <div className="box box1"><TopBox /></div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox /></div>
      {/* <div className="box box7"><ChartBar {...chartBoxUser}/></div> */}
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  );
};

export default Home;
