import { HeartPulse, Wind } from "lucide-react";
import { useSmoke } from "../context/SmokeContext";


function HealthProgress() {

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


    const lungProgress =
        Math.min(
            100,
            Math.round((days / 365) * 100)
        );


    const heartProgress =
        Math.min(
            100,
            Math.round((days / 365) * 100)
        );



    return (

        <section className="health-progress">


            <h3>
                🫁 Tu recuperación
            </h3>


            <p className="warning">

                Estimaciones educativas generales.
                No reemplazan una evaluación médica.

            </p>



            <div className="health-card">


                <Wind size={32} />


                <div className="health-info">

                    <h4>
                        Función respiratoria
                    </h4>


                    <div className="bar">

                        <div
                            className="fill"
                            style={{
                                width: `${lungProgress}%`
                            }}
                        />

                    </div>


                    <span>
                        {lungProgress}% de progreso estimado
                    </span>

                </div>


            </div>




            <div className="health-card">


                <HeartPulse size={32} />


                <div className="health-info">


                    <h4>
                        Salud cardiovascular
                    </h4>


                    <div className="bar">

                        <div
                            className="fill"
                            style={{
                                width: `${heartProgress}%`
                            }}
                        />

                    </div>


                    <span>
                        {heartProgress}% de progreso estimado
                    </span>


                </div>


            </div>



        </section>

    );

}


export default HealthProgress;