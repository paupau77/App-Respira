import { useState } from "react";
import { Wind } from "lucide-react";


function Welcome() {

    const [name, setName] = useState("");

    const [finished, setFinished] = useState(false);



    function start() {

        localStorage.setItem(
            "userName",
            name
        );


        localStorage.setItem(
            "welcomeDone",
            "true"
        );


        setFinished(true);

        window.location.reload();

    }



    return (

        <section className="welcome">


            <Wind size={60} />


            <h1>
                🚭 Respirá
            </h1>


            <p>
                Cada día sin fumar es una victoria.
            </p>



            <input

                placeholder="¿Cómo te llamás?"

                value={name}

                onChange={
                    e => setName(e.target.value)
                }

            />



            <button

                className="save-button"

                onClick={start}

            >

                Comenzar mi camino

            </button>



        </section>

    );

}


export default Welcome;