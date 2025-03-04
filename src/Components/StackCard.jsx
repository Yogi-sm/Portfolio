import react from "react";

function StackCard(props){
    return(
        <div className="stackCard shadow">
            <img className="stackcardImg" src={props.imgSrc} alt="stackImg" />
            <p className="poppinsFontwhite Stackcardheadtext">{props.headText}</p>
            <p className="poppinsFontgrey stackcardInfotext">{props.roleText}</p>

        </div>

    );
}

export default StackCard;