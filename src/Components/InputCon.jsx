import react  from 'react';

function InputBox(props){
    function addValue(event){
        props.addItem(props.id,event.target.value);
    }
    return(
        <div className="inputcontainer">
            <input className="emailInput" style={{border:props.validItem ? "1px solid #696866" : "1px solid red"}} onChange={addValue} id={props.id} placeholder="" value={props.valueStr} type="text"/>
            <label className="fieldText">{props.text}</label>
        </div>
    );
}

export default InputBox;