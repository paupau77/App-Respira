import { Trophy } from "lucide-react";
import { useSmoke } from "../context/SmokeContext";

const achievements = [
    {
        days: 1,
        title: "Primer día",
        text: "Diste el primer paso hacia una vida más saludable."
    },
    {
        days: 7,
        title: "Una semana completa",
        text: "Tu cuerpo empieza a adaptarse al cambio."
    },
    {
        days: 30,
        title: "Un mes de victoria",
        text: "Un hábito nuevo comienza a construirse."
    },
    {
        days: 90,
        title: "Tres meses fuerte",
        text: "Tu resistencia y respiración siguen mejorando."
    },
    {
        days: 365,
        title: "Un año libre",
        text: "Un logro enorme en tu camino."
    }
];


function Achievements() {

    const { quitDate } = useSmoke();


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


    return (
        <section className="achievements">

            <h3>
                🏆 Tus logros
            </h3>


            {achievements.map((item) => (

                <div
                    className={
                        days >= item.days
                            ? "achievement unlocked"
                            : "achievement"
                    }
                    key={item.title}
                >

                    <Trophy size={28} />

                    <div>

                        <h4>
                            {item.title}
                        </h4>

                        <p>
                            {item.text}
                        </p>

                    </div>

                </div>

            ))}


        </section>
    );
}


export default Achievements;