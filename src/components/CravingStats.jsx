import { useEffect, useState } from "react";


function CravingStats() {

    const [cravings, setCravings] = useState([]);


    useEffect(() => {

        const data =
            JSON.parse(
                localStorage.getItem("cravings")
            ) || [];


        setCravings(data);

    }, []);



    const total = cravings.length;



    const average = total
        ?
        (
            cravings.reduce(
                (sum, item) =>
                    sum + Number(item.intensity),
                0
            )
            / total
        ).toFixed(1)
        :
        0;



    const triggers = {};


    cravings.forEach(item => {

        if (item.trigger) {

            triggers[item.trigger] =
                (triggers[item.trigger] || 0) + 1;

        }

    });



    let mostCommon = "Sin datos";


    Object.keys(triggers).forEach(key => {

        if (
            !mostCommon ||
            triggers[key] > triggers[mostCommon]
        ) {

            mostCommon = key;

        }

    });



    return (

        <section className="craving-stats">


            <h3>
                📊 Análisis de antojos
            </h3>



            <div className="stats">


                <div className="stat">

                    <strong>
                        {total}
                    </strong>

                    <p>
                        Antojos registrados
                    </p>

                </div>



                <div className="stat">

                    <strong>
                        {average}
                    </strong>

                    <p>
                        Intensidad promedio
                    </p>

                </div>



                <div className="stat">

                    <strong>
                        {mostCommon}
                    </strong>

                    <p>
                        Principal desencadenante
                    </p>

                </div>


            </div>



            <h4>
                Historial
            </h4>



            {
                cravings.length === 0 ?

                    <p>
                        Todavía no hay registros.
                    </p>

                    :

                    cravings.map((item, index) => (

                        <div
                            className="craving-item"
                            key={index}
                        >

                            <b>
                                🔥 {item.intensity}/10
                            </b>

                            <p>
                                {item.trigger}
                            </p>

                            <small>
                                {item.date}
                            </small>

                            {
                                item.note &&
                                <p>
                                    {item.note}
                                </p>
                            }

                        </div>

                    ))

            }


        </section>

    );

}


export default CravingStats;