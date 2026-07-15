import { useState } from "react";
import { Flame, Wind } from "lucide-react";


const messages = [
    "Las ganas de fumar pasan. Tu decisión permanece. 💚",
    "Respirá profundo. Este momento difícil también va a pasar.",
    "Cada antojo que superás fortalece tu nuevo hábito.",
    "No necesitás un cigarrillo, necesitás unos minutos para vos."
];


function CravingHelp() {

    const [active, setActive] = useState(false);

    const [message, setMessage] = useState("");

    const [seconds, setSeconds] = useState(0);


    function startHelp() {

        const random =
            messages[
            Math.floor(
                Math.random() * messages.length
            )
            ];


        setMessage(random);

        setActive(true);

        setSeconds(60);


        const timer =
            setInterval(() => {

                setSeconds(prev => {

                    if (prev <= 1) {

                        clearInterval(timer);

                        return 0;

                    }

                    return prev - 1;

                });

            }, 1000);

    }



    return (

        <section className="craving">

            <h3>
                🔥 ¿Tenés ganas de fumar?
            </h3>


            <button
                className="craving-button"
                onClick={startHelp}
            >

                <Flame size={24} />

                Necesito ayuda ahora

            </button>



            {
                active &&

                <div className="craving-box">


                    <Wind size={30} />


                    <p>
                        {message}
                    </p>


                    <h2>
                        {seconds}
                    </h2>


                    <span>
                        Respiración consciente
                    </span>


                </div>

            }


        </section>

    );

}


export default CravingHelp;