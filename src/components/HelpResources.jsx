import { HeartHandshake, Phone, Wind } from "lucide-react";


const tips = [
    "Esperá 5 minutos antes de decidir fumar. La intensidad del antojo suele bajar.",
    "Tomá agua lentamente y cambiá de ambiente.",
    "Respirá profundo varias veces y recordá por qué decidiste dejar de fumar.",
    "Mantené tus manos ocupadas con otra actividad."
];


function HelpResources() {

    return (

        <section className="help-resources">

            <h3>
                🆘 Ayuda y recursos
            </h3>


            <div className="help-card">

                <Wind size={30} />

                <div>

                    <h4>
                        Respiración para momentos difíciles
                    </h4>

                    <p>
                        Inhalá 4 segundos, mantené 4 segundos,
                        exhalá 6 segundos. Repetilo varias veces.
                    </p>

                </div>

            </div>



            <div className="help-card">

                <HeartHandshake size={30} />

                <div>

                    <h4>
                        Consejos rápidos
                    </h4>


                    <ul>

                        {
                            tips.map((tip, index) => (

                                <li key={index}>
                                    {tip}
                                </li>

                            ))
                        }

                    </ul>

                </div>

            </div>




            <div className="help-card">

                <Phone size={30} />

                <div>

                    <h4>
                        Apoyo profesional
                    </h4>

                    <p>
                        Si sentís que necesitás ayuda,
                        buscá apoyo de profesionales de salud
                        o programas de cesación tabáquica.
                    </p>

                </div>

            </div>


        </section>

    );

}


export default HelpResources;