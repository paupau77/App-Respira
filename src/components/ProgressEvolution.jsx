import {
    Line
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

import { useSmoke } from "../context/SmokeContext";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);



function ProgressEvolution() {

    const { quitDate } = useSmoke();



    function getDays() {

        if (!quitDate)
            return 0;


        return Math.floor(

            (new Date() - new Date(quitDate))

            /

            (1000 * 60 * 60 * 24)

        );

    }



    const days =
        getDays();



    const labels = [

        "Inicio",
        "1 semana",
        "1 mes",
        "3 meses",
        "6 meses",
        "1 año"

    ];



    const data = {

        labels,

        datasets: [

            {

                label:
                    "Días sin fumar",

                data: [

                    0,

                    Math.min(days, 7),

                    Math.min(days, 30),

                    Math.min(days, 90),

                    Math.min(days, 180),

                    Math.min(days, 365)

                ]

            }

        ]

    };



    return (

        <section className="progress-evolution">


            <h3>
                📈 Evolución del progreso
            </h3>


            <Line data={data} />


        </section>

    );

}


export default ProgressEvolution;