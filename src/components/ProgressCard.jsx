import { useSmoke } from "../context/SmokeContext";

function ProgressCard() {

    const {
        quitDate,
        cigarettesPerDay,
        cigarettePrice
    } = useSmoke();


    const calculateDays = () => {

        if (!quitDate) return 0;

        const start = new Date(quitDate);
        const today = new Date();

        const difference =
            today - start;

        return Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );
    };


    const days = calculateDays();

    const cigarettesSaved =
        days * cigarettesPerDay;


    const packsSaved =
        cigarettesSaved / 20;


    const moneySaved =
        packsSaved * cigarettePrice;


    return (

        <section className="progress">

            <h3>
                📊 Tu progreso
            </h3>


            <div className="stats">

                <div className="stat">
                    <span>🚭</span>
                    <strong>{days}</strong>
                    <p>Días sin fumar</p>
                </div>


                <div className="stat">
                    <span>🚬</span>
                    <strong>{cigarettesSaved}</strong>
                    <p>Cigarrillos evitados</p>
                </div>


                <div className="stat">
                    <span>💰</span>
                    <strong>
                        ${moneySaved.toFixed(0)}
                    </strong>
                    <p>Dinero ahorrado</p>
                </div>

            </div>

        </section>

    );
}

export default ProgressCard;