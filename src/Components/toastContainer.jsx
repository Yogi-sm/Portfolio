import react from "react";

function toastBox(props){
    return (
        <div className={`toastContainer ${props.className}`} style={{border:props.className == 'appear' ? "1px solid #96d6b3" : "1px solid red"}}>
        <p>{props.text}</p>
      </div>
      
    );
}

export default toastBox;