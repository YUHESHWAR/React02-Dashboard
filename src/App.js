import logo from "./logo.svg";
import "./App.css";
import {
  faChartLine,
  faCoins,
  faDollar,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { StackChart } from "./StackChart";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <SummarBoxList />
      <Overview />
    </div>
  );
}

function Overview() {
  return (
    <div className="overview-container">
      <StackChart />
    </div>
  );
}

function SummarBoxList() {
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count",
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
    },
  ];
  return (
    <div className="summary-block">
      {dataList.map((data) => (
        <SummaryBox data={data} />
      ))}
    </div>
  );
}

function SummaryBox({ data }) {
  const CustomProgress = styled(LinearProgress)(({ theme }) => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[300],
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: data.iconColor,
    },
  }));

  return (
    <div className="summary-box-container">
      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        <FontAwesomeIcon style={{ color: data.iconColor }} icon={data.icon} />
      </div>
      <h2 className="summary-box-number">
        {data.type === "money" ? "$" : null}
        {data.number}
      </h2>
      <CustomProgress variant="determinate" color="primary" value={50} />
      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p className="summary-box-percent">
          {data.performance == "up" ? (
            <ArrowDropUpIcon style={{ color: "rgb(3, 200, 149)" }} />
          ) : (
            <ArrowDropDownIcon style={{ color: "red" }} />
          )}
          {data.percent}%
        </p>
      </div>
    </div>
  );
}

export default App;
