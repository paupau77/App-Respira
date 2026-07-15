import { useSmoke } from "../context/SmokeContext";


function Profile() {

    const {
        name,
        setName,
        reason,
        setReason
    } = useSmoke();



    return (

        <section className="profile">

            <h3>
                👤 Tu perfil
            </h3>


            <label>
                Nombre
            </label>

            <input
                type="text"
                placeholder="¿Cómo te llamás?"
                value={name}
                onChange={
                    e => setName(e.target.value)
                }
            />


            <label>
                ¿Por qué querés dejar de fumar?
            </label>


            <textarea
                placeholder="Escribí tu motivo..."
                value={reason}
                onChange={
                    e => setReason(e.target.value)
                }
            />


            {
                name &&
                <p className="message">
                    💚 {name}, cada día estás más cerca de tu objetivo.
                </p>
            }


        </section>

    );

}


export default Profile;