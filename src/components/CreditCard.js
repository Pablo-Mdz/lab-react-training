
function CreditCard (props) {
    const { type,  number,  expirationMonth, expirationYear, bank ,owner, bgColor, color} = props;
    const hide = '**** **** **** ' + number.slice(-4)

    
    const expirationDay = (`${expirationMonth}/${expirationYear}`)

    const divStyle = {
        color: color,
        backgroundColor: bgColor
    }

    return (
        <div style={divStyle} className="credit">
            <div className='visa'>
                <div><h2>{type}</h2></div>
            </div>
            
            <div><h1>{hide}</h1></div>

            <div className='raw'>
                <div><p>Expires {expirationDay}</p></div>
                <div><p className='push'>{bank}</p></div>
            </div>
            
            <div><p>{owner}</p></div>
        </div>
    )
}
export default CreditCard
