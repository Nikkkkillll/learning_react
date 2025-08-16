export default function OneWayDataBinding(){
    var name="Nikhil";
    return(
        <div className="container">
            <input type="text" value={name}/>
            <br></br>
            <p>Hello!!! {name}</p>
        </div>
    )
}