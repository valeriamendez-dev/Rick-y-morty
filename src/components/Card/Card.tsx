import "./Card.css"

interface Props{
    name: string,
    status: string,
    image: string
}


function Card({name,status, image}:Props){

    return(
        <div className={`card ${status === "Alive" ? "alive" : "dead"}`}>

            {/* IMAGEN */}
            <img src={image} alt={name} />

            {/* INFO */}
            <div className="card-info">

                <h2>{name}</h2>

                <p className="status">
                    <span className="dot"></span>
                    {status === "Alive" ? "Alive" : "Dead"}
                </p>

            </div>
        </div>
    )
}

export default Card