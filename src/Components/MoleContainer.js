import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";


function MoleContainer(props) {
    const [displayMole, setDisplayMole] = useState(false)

    const handleClick = (e) => { //Function to handle when mole is clicked the score is set +1 and the display turns to false.
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }
    let theMole = displayMole ? <Mole setScore = {props.setScore} toggle = {setDisplayMole} handleClick = {handleClick}/> : <EmptySlot toggle={setDisplayMole}/>
    
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
          {theMole}  
            
        </div>
    )
}

export default MoleContainer;