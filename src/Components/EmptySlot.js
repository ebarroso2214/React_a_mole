import MoleHill from '../molehill.png'
import { useEffect } from "react";

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}} src={MoleHill} />
        </div>
    )
    }
export default EmptySlot;