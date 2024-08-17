import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Quarks", "Leptons", "Gauge Bosons", "Scalar Bosons"],
    [2 / 3, -1, 0, 0],
    [2 / 3, -1, 0, null],
    [2 / 3, -1, 0, null],
    [-1 / 3, 0, 1, null],
    [-1 / 3, 0, -1, null],
    [-1 / 3, 0, null, null],
    [-1 / 3, 0, null, null],
];

export const options = {
    title: "Charges of subatomic particles",
    legend: { position: "top", maxLines: 2 },
    colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
    interpolateNulls: false,
};

export function HistroChart() {
    return (
        <Chart
            chartType="Histogram"
            width="100%"
            height="250px"
            data={data}
            options={options}
        />
    );
}
