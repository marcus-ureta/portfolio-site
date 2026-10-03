import cardStyle from './Project.module.css';

function Card({image, header, description, tech1, tech2, tech3, link, showState}){
    const goToProject = () => {

        if(link === "null") {
            alert("This project is currently unavailable.");
            return;
        }

        window.open(link);
    }

    const cardState = `${cardStyle.card} ${showState ? '' : cardStyle.disable}`;

    return(
        <div className={cardState}>
            <a href={link}><img src={image}/></a>
            <h2>{header}</h2>
            <p>{description}</p>

            <div className={cardStyle.bottom}>
                <div className={cardStyle.tech}>
                    {tech1 ? <h4>{tech1}</h4> : null}
                    {tech2 ? <h4>{tech2}</h4> : null}
                    {tech3 ? <h4>{tech3}</h4> : null}
                </div>

                <button onClick={() => goToProject()}>View Project</button>
            </div>
        </div>
    );
}

export default Card;