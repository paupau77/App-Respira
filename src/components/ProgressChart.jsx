import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

import { useSmoke } from "../context/SmokeContext";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



function ProgressChart() {

    const {
        quitDate,
        cigarettesPerDay
    } = useSmoke();


    function getDays() {

        if (!quitDate) return 0;

        const start = new Date(quitDate);
        const today = new Date();

        return Math.floor(
            (today - start) /
            (1000 * 60 * 60 * 24)
        );
    }


    const days = getDays();


    const labels = [];

    const avoided = [];


    for (let i = 0; i <= days; i++) {

        labels.push(`Día ${i}`);

        avoided.push(
            i * cigarettesPerDay
        );

    }


    const data = {

        labels,

        datasets: [

            {
                label:
                    "Cigarrillos evitados",

                data: avoided,

                tension: 0.3
            }

        ]

    };


    const options = {

        responsive: true,

        plugins: {
            legend: {
                position: "top"
            }
        }

    };


    return (

        <section className="chart-card">

            <h3>
                📈 Tu evolución
            </h3>


            <Line
                data={data}
                options={options}
            />

        </section>

    );

}


export default ProgressChart;