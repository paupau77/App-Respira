import { useSmoke } from "../context/SmokeContext";


function Statistics() {

    const {
        quitDate
    } = useSmoke();



    const cigarettesPerDay =
        Number(
            localStorage.getItem("cigarettesPerDay")
        ) || 0;


    const pricePack =
        Number(
            localStorage.getItem("packPrice")
        ) || 0;



    function getDays() {

        if (!quitDate)
            return 0;


        const start =
            new Date(quitDate);


        const now =
            new Date();



        return Math.floor(

            (now - start)

            /

            (1000 * 60 * 60 * 24)

        );

    }



    const days =
        getDays();



    const cigarettesAvoided =
        days * cigarettesPerDay;



    const packsAvoided =
        cigarettesAvoided / 20;



    const savedMoney =
        Math.round(
            packsAvoided * pricePack
        );



    return (

        <section className="statistics">


            <h3>
                📊 Mi progreso
            </h3>



            <div className="stats-grid">


                <div>

                    <strong>
                        {days}
                    </strong>

                    <span>
                        Días sin fumar
                    </span>

                </div>



                <div>

                    <strong>
                        {cigarettesAvoided}
                    </strong>

                    <span>
                        Cigarrillos evitados
                    </span>

                </div>



                <div>

                    <strong>
                        ${savedMoney}
                    </strong>

                    <span>
                        Dinero ahorrado
                    </span>

                </div>



            </div>


        </section>

    );

}


export default Statistics;