import React, {useState} from "react";

function ColorPicker(){
    
    const [color, setColor] = useState("#FFFFFF");
    
    function handleColorChange(event) {
        setColor(event.target.value)
    }


    return(<div className="Color-picker-container">
        <h1 className="title">Color Picker</h1>
        <div className="Color-display" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label className="selector-text">Select a Color</label>
        <input className="selector-color" type="color" value={color} onChange={handleColorChange}/>
    </div>);
}
export default ColorPicker;