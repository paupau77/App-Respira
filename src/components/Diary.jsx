import { useState } from "react";


function Diary() {

    const [mood, setMood] = useState("");

    const [note, setNote] = useState("");

    const [intensity, setIntensity] = useState(5);

    const [trigger, setTrigger] = useState("");


    const [saved, setSaved] = useState(false);



    function saveEntry() {

        const entry = {

            date:
                new Date().toLocaleDateString(),

            mood,

            note,

            intensity,

            trigger

        };


        const oldEntries =
            JSON.parse(
                localStorage.getItem("diaryEntries")
            ) || [];


        localStorage.setItem(
            "diaryEntries",
            JSON.stringify([
                ...oldEntries,
                entry
            ])
        );


        setSaved(true);


        setTimeout(() => {
            setSaved(false);
        }, 2000);

    }



    return (

        <section className="diary">

            <h3>
                📖 Mi diario de progreso
            </h3>


            <label>
                ¿Cómo te sentís hoy?
            </label>


            <div className="moods">

                <button onClick={() => setMood("😊 Feliz")}>
                    😊
                </button>

                <button onClick={() => setMood("😐 Normal")}>
                    😐
                </button>

                <button onClick={() => setMood("😞 Difícil")}>
                    😞
                </button>

                <button onClick={() => setMood("😡 Ansioso")}>
                    😡
                </button>

            </div>



            <label>
                Contá cómo fue tu día
            </label>


            <textarea
                value={note}
                onChange={
                    e => setNote(e.target.value)
                }
                placeholder="Hoy me sentí..."
            />



            <label>
                Intensidad del antojo:
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
                ¿Qué provocó el antojo?
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
                    Reunión social
                </option>

                <option>
                    Otro
                </option>


            </select>



            <button
                className="save-button"
                onClick={saveEntry}
            >
                Guardar día
            </button>


            {
                saved &&
                <p className="saved">
                    ✅ Registro guardado
                </p>
            }


        </section>

    );

}


export default Diary;