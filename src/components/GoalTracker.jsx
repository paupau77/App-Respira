import { useState } from "react";


function GoalTracker() {

    const [goal, setGoal] = useState(
        localStorage.getItem("goal") || ""
    );


    const [amount, setAmount] = useState(
        localStorage.getItem("goalAmount") || ""
    );


    const [saved, setSaved] = useState(false);



    function saveGoal() {

        localStorage.setItem(
            "goal",
            goal
        );


        localStorage.setItem(
            "goalAmount",
            amount
        );


        setSaved(true);


        setTimeout(() => {
            setSaved(false);
        }, 2000);

    }



    return (

        <section className="goal-tracker">


            <h3>
                🎯 Mi meta personal
            </h3>



            <p>
                ¿Para qué querés usar el dinero ahorrado?
            </p>


            <input

                value={goal}

                onChange={
                    e => setGoal(e.target.value)
                }

                placeholder="Ej: Viaje, computadora..."

            />



            <input

                type="number"

                value={amount}

                onChange={
                    e => setAmount(e.target.value)
                }

                placeholder="Monto de la meta"

            />



            <button

                className="save-button"

                onClick={saveGoal}

            >

                Guardar meta

            </button>



            {
                goal &&

                <div className="goal-result">

                    <h4>
                        Tu objetivo:
                    </h4>

                    <p>
                        {goal}
                    </p>

                    <p>
                        Meta: ${amount}
                    </p>

                </div>

            }



            {
                saved &&

                <p>
                    ✅ Meta guardada
                </p>

            }


        </section>

    );

}


export default GoalTracker;