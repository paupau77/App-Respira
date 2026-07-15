import { useState } from "react";


function CravingDiary() {

    const [intensity, setIntensity] = useState(5);

    const [trigger, setTrigger] = useState("");

    const [note, setNote] = useState("");

    const [saved, setSaved] = useState(false);



    function saveCraving() {


        const craving = {

            date:
                new Date().toLocaleString(),

            intensity,

            trigger,

            note

        };


        const old =
            JSON.parse(
                localStorage.getItem("cravings")
            ) || [];



        localStorage.setItem(

            "cravings",

            JSON.stringify(
                [
                    ...old,
                    craving
                ]
            )

        );



        setSaved(true);


        setTimeout(() => {

            setSaved(false);

        }, 2000);


    }



    return (

        <section className="craving-diary">


            <h3>
                🔥 Registrar un antojo
            </h3>



            <label>
                Intensidad:
                {intensity}/10
            </label>


            <input

                type="range"

                min="1"

                max="10"

                value={intensity}

                onChange={
                    e => setIntensity(e.target.value)
                }

            />



            <label>
                ¿Qué lo provocó?
            </label>


            <select

                value={trigger}

                onChange={
                    e => setTrigger(e.target.value)
                }

            >

                <option>
                    Seleccionar
                </option>

                <option>
                    Estrés
                </option>

                <option>
                    Café
                </option>

                <option>
                    Aburrimiento
                </option>

                <option>
                    Trabajo o estudio
                </option>

                <option>
                    Reunión social
                </option>

                <option>
                    Otro
                </option>


            </select>




            <label>
                ¿Qué pasó?
            </label>


            <textarea

                value={note}

                onChange={
                    e => setNote(e.target.value)
                }

                placeholder="Ej: tuve ganas después de tomar café..."

            />




            <button

                className="save-button"

                onClick={saveCraving}

            >

                Guardar antojo

            </button>



            {
                saved &&

                <p className="saved">
                    ✅ Antojo registrado
                </p>

            }



        </section>

    );

}


export default CravingDiary;