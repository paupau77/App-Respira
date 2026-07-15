import {
    Home,
    ChartLine,
    HeartPulse,
    Trophy
} from "lucide-react";

import { useNavigation } from "../context/NavigationContext";


function BottomNav() {

    const {
        page,
        setPage
    } = useNavigation();


    return (

        <nav className="bottom-nav">


            <button
                className={page === "home" ? "active" : ""}
                onClick={() => setPage("home")}
            >

                <Home size={22} />

                <span>
                    Inicio
                </span>

            </button>



            <button
                className={page === "progress" ? "active" : ""}
                onClick={() => setPage("progress")}
            >

                <ChartLine size={22} />

                <span>
                    Progreso
                </span>

            </button>



            <button
                className={page === "health" ? "active" : ""}
                onClick={() => setPage("health")}
            >

                <HeartPulse size={22} />

                <span>
                    Salud
                </span>

            </button>



            <button
                className={page === "achievements" ? "active" : ""}
                onClick={() => setPage("achievements")}
            >

                <Trophy size={22} />

                <span>
                    Logros
                </span>

            </button>


        </nav>

    );

}


export default BottomNav;