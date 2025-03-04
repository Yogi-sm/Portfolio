import react from 'react'

function SkillCard(props){
    return (
        <div className="skillCard">
            <button className="skillsicon">
                <img className="logoimg" src={props.imgSrc} alt="logo"></img>
            </button>
            <p className="skilltext">{props.text}</p>

        </div>
    );
}

export default SkillCard;