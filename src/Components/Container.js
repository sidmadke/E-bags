export default function Container(){
    return(
        <div className="contain">
            <img src={require("../img/thoratbagsschool y.png")} height="70%"></img>
            <div className="details">
                <p>Bag Name</p>
                <span>Price:###</span>
            </div>
        </div>
    )
}