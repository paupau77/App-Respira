import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";


const messages = [

    "🚭 Cada día sin fumar es una inversión en tu futuro.",

    "💚 Un antojo dura minutos. Tu decisión puede durar toda la vida.",

    "🌱 Tu cuerpo está trabajando para recuperarse.",

    "🔥 Ya superaste momentos difíciles antes. Este también pasará.",

    "🫁 Cada respiración libre es una pequeña victoria.",

    "⭐ No buscás ser perfecto, buscás avanzar."

];


function DailyMotivation() {

    const [message, setMessage] = useState("");



    useEffect(() => {


        const today =
            new Date().toDateString();


        const saved =
            JSON.parse(
                localStorage.getItem("dailyMotivation")
            );



        if (saved?.date === today) {

            setMessage(saved.message);

        } else {


            const random =
                messages[
                Math.floor(
                    Math.random() * messages.length
                )
                ];



            localStorage.setItem(

                "dailyMotivation",

                JSON.stringify({

                    date: today,

                    message: random

                })

            );


            setMessage(random);


        }


    }, []);



    return (

        <section className="motivation">


            <Sparkles size={32} />


            <h3>
                Mensaje de hoy
            </h3>


            <p>
                {message}
            </p>


        </section>

    );

}


export default DailyMotivation;