import react from 'react';

function ExpCard(props){
    return (
        <div className="Shadow ExperienceContainer">
            <p className="poppinsFontwhite ">{props.startDate} <span style={{float:"right"}}>{props.endDate}</span></p>
            <img className="companyLogo" src={props.imgSrc} alt="CompanyLogo"></img>
            <p className="poppinsFontwhite expText">{props.company}</p>
            <p className="poppinsFontgrey roleText">{props.role}</p>
        </div>
    );
}

export default ExpCard;