import { useEffect, useState } from "react";
import { useSmoke } from "../context/SmokeContext";


function QuitTimer() {

    const { quitDate } = useSmoke();

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });


    useEffect(() => {

        function calculate() {

            if (!quitDate) {
                return;
            }


            const start = new Date(quitDate);

            const now = new Date();


            const difference = now - start;


            if (difference < 0) {
                return;
            }


            const seconds =
                Math.floor(
                    difference / 1000
                );


            const days =
                Math.floor(
                    seconds / 86400
                );


            const hours =
                Math.floor(
                    (seconds % 86400) / 3600
                );


            const minutes =
                Math.floor(
                    (seconds % 3600) / 60
                );


            const remainingSeconds =
                seconds % 60;


            setTime({
                days,
                hours,
                minutes,
                seconds: remainingSeconds
            });

        }


        calculate();


        const interval =
            setInterval(
                calculate,
                1000
            );


        return () => clearInterval(interval);


    }, [quitDate]);



    return (

        <section className="quit-timer">

            <h3>
                🚭 Tiempo sin fumar
            </h3>


            {
                quitDate ?

                    <div className="timer-grid">


                        <div>
                            <strong>
                                {time.days}
                            </strong>
                            <span>
                                Días
                            </span>
                        </div>


                        <div>
                            <strong>
                                {time.hours}
                            </strong>
                            <span>
                                Horas
                            </span>
                        </div>


                        <div>
                            <strong>
                                {time.minutes}
                            </strong>
                            <span>
                                Minutos
                            </span>
                        </div>


                        <div>
                            <strong>
                                {time.seconds}
                            </strong>
                            <span>
                                Segundos
                            </span>
                        </div>


                    </div>

                    :

                    <p>
                        Ingresá tu fecha de abandono para comenzar tu contador.
                    </p>

            }


        </section>

    );

}


export default QuitTimer;