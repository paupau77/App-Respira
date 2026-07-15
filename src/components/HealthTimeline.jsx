import { CheckCircle2, Circle } from "lucide-react";
import { useSmoke } from "../context/SmokeContext";


const benefits = [
    {
        days: 0,
        title: "20 minutos",
        description:
            "La frecuencia cardíaca y la presión arterial comienzan a descender."
    },
    {
        days: 1,
        title: "12 horas",
        description:
            "El nivel de monóxido de carbono en sangre vuelve a valores normales."
    },
    {
        days: 14,
        title: "2 semanas",
        description:
            "Mejora la circulación y aumenta la capacidad pulmonar."
    },
    {
        days: 30,
        title: "1 mes",
        description:
            "La función pulmonar continúa mejorando y disminuye la tos."
    },
    {
        days: 90,
        title: "3 meses",
        description:
            "Mejora notablemente la respiración y la resistencia física."
    },
    {
        days: 365,
        title: "1 año",
        description:
            "El riesgo cardiovascular disminuye significativamente."
    }
];


function HealthTimeline() {

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

        <section className="timeline">

            <h3>
                ❤️ Recuperación de tu cuerpo
            </h3>


            {
                benefits.map((item) => (

                    <div
                        className="timeline-item"
                        key={item.title}
                    >

                        {
                            days >= item.days
                                ?
                                <CheckCircle2 className="done" />
                                :
                                <Circle className="pending" />
                        }


                        <div>

                            <h4>
                                {item.title}
                            </h4>

                            <p>
                                {item.description}
                            </p>

                        </div>

                    </div>

                ))
            }

        </section>

    );
}


export default HealthTimeline;