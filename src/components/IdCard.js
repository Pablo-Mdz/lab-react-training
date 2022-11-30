import React from "react"

function IdCard (props){
    const {lastName, firstName, gender, height} = props
    const BDate = props.birth.toDateString()
    // const dateStr= String(birth).split(' ').splice(0, 4).join(' ')
    return (
        
    <div className="con">
        <div className="idCard">
            <div className="idImg">
                <img src={props.picture} alt="" />   
            </div>
            <div className="idtext">
                <p><b>Last name:</b> {lastName}</p>
                <p><b>First name:</b> {firstName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {BDate}</p>
            </div>
        </div>
    </div>
    )
}

export default IdCard; 