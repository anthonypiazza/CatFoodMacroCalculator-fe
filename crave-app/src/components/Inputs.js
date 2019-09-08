import React from 'react';

const Inputs = (props) => {
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.history.push("/results")
    }

    return(
        <div>
            <form style={{ display: "flex", flexDirection:"column"}}>
                <div style={{padding: "10px 0px"}}>
                    <label>Crude Protein (min %)</label>
                    <input 
                        onChange={props.handleChange}
                        type="text"    
                        name="protein"
                    />
                </div>
                <div style={{padding: "10px 0px"}}>
                    <label>Crude Fat (min %)</label>
                    <input 
                        onChange={props.handleChange}
                        type="text"    
                        name="fat"
                    />
                </div>
                <div style={{padding: "10px 0px"}}>
                    <label>Crude Fiber (max %)</label>                    
                    <input 
                        onChange={props.handleChange}
                        type="text"    
                        name="fiber"
                    />
                </div>
                <div style={{padding: "10px 0px"}}>
                    <label>Moisture (max %)</label>                    
                    <input 
                        onChange={props.handleChange}
                        type="text"    
                        name="moisture"
                    />
                </div>
                <div style={{padding: "10px 0px"}}>
                    <label>Ash (max %)</label>                    
                    <input 
                        onChange={props.handleChange}
                        type="text"    
                        name="ash"
                    />
                </div>
                <div style={{padding: "10px 0px"}}>
                    <label>Taurine (min %)</label>                    
                    <input 
                        onChange={props.handleChange}
                        type="text"    
                        name="taurine"
                    />
                </div>
            </form>
            <button onClick={handleSubmit}>Submit to Calculate</button>
        </div>
    )
}

export default Inputs;