function Random (props){
    
    const randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min)

    
    return (
        <p>Random value between {props.min} and {props.max} = {randomNum}  </p>
    )
    }
    
    export default Random