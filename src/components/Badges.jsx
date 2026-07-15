import { Medal } from "lucide-react";
import { useSmoke } from "../context/SmokeContext";


const badges = [

    {
        days: 1,
        title: "🥉 Primer paso",
        text: "Completaste tu primer día sin fumar."
    },

    {
        days: 7,
        title: "🥈 Una semana fuerte",
        text: "Superaste los primeros días."
    },

    {
        days: 30,
        title: "🥇 Primer mes",
        text: "Un nuevo hábito empieza a crecer."
    },

    {
        days: 90,
        title: "💚 Recuperación",
        text: "Tu cuerpo continúa recuperándose."
    },

    {
        days: 365,
        title: "👑 Un año libre",
        text: "Un gran logro personal."
    }

];



function Badges() {

    const { quitDate } = useSmoke();



    function getDays() {

        if (!quitDate)
            return 0;


        const start =
            new Date(quitDate);

        const today =
            new Date();


        return Math.floor(
            (today - start) /
            (1000 * 60 * 60 * 24)
        );

    }



    const days = getDays();



    return (

        <section className="badges">


            <h3>
                🏅 Medallas
            </h3>



            <div className="badge-grid">


                {
                    badges.map((badge) => (


                        <div

                            key={badge.title}

                            className={
                                days >= badge.days
                                    ?
                                    "badge unlocked"
                                    :
                                    "badge"

                            }

                        >

                            <Medal size={30} />


                            <h4>
                                {badge.title}
                            </h4>


                            <p>
                                {badge.text}
                            </p>


                        </div>


                    ))

                }


            </div>


        </section>

    );

}


export default Badges;