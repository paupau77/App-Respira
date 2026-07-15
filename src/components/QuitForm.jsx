import { useSmoke } from "../context/SmokeContext";

function QuitForm() {
    const {
        quitDate,
        setQuitDate,
        cigarettesPerDay,
        setCigarettesPerDay,
        cigarettePrice,
        setCigarettePrice,
    } = useSmoke();

    return (
        <section className="card">

            <h3>🚭 Comencemos tu camino</h3>

            <label>
                Fecha en la que dejaste de fumar
            </label>

            <input
                type="date"
                value={quitDate}
                onChange={(e) => setQuitDate(e.target.value)}
            />


            <label>
                Cigarrillos por día antes de dejarlo
            </label>

            <input
                type="number"
                value={cigarettesPerDay}
                onChange={(e) =>
                    setCigarettesPerDay(Number(e.target.value))
                }
            />


            <label>
                Precio del paquete
            </label>

            <input
                type="number"
                value={cigarettePrice}
                onChange={(e) =>
                    setCigarettePrice(Number(e.target.value))
                }
            />

        </section>
    );
}

export default QuitForm;