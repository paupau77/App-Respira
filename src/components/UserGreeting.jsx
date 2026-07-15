import { UserRound } from "lucide-react";


function UserGreeting() {

    const name =
        localStorage.getItem("userName")
        || "amigo";


    return (

        <section className="user-greeting">

            <UserRound size={32} />

            <div>

                <h2>
                    Hola, {name} 👋
                </h2>

                <p>
                    Seguimos avanzando juntos, un día a la vez.
                </p>

            </div>

        </section>

    );

}


export default UserGreeting;