
import { Padding } from "@mui/icons-material";
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Sales", "Expenses", "Profit"],


    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
    ["2018", 963, 540, 350],
    ["2019", 613, 540, 350],
    ["2020", 789, 540, 350],
    ["2021", 365, 412, 216],
    ["2022", 860, 960, 350],
    ["2023", 1030, 640, 1350],
];

export const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
    

};

export default function BarChart() {
    return (
        <Chart

            chartType="Bar"
            width="100%"
            height="350px"
            data={data}
            options={options}
            legendToggle={true}
        />
    );
}
