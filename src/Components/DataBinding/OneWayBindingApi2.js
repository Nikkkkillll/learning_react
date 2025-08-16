import { useEffect, useState } from "react";

export default function OneWayBindingApi2() {
    const [mars, setMars] = useState({ photos: [] });//even if we dont define the type then it will automatically inderstanf because java is not strictly typed
    useEffect(() => {
        //we fetch the data from api buy using a promise called Fetch which we do in javascript
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            //now while accesing because it it promise while fecting the data is coming in binary form so we have to conver the data into json
            //then idicates what to do with data thst is coming
            .then(response => response.json())//converting intp json
            //after converting intop json then another promise method will come and which ewill collect the data and this data we have to store inside the mars so we need a setter
            .then(data => { setMars(data); })



    }, []);
    return (
        <div className="container">
            <h2>Mars Photos</h2>
            <div className="d-flex flex-wrap">
                {
                    mars.photos.map(photo =>
                        <div className="card p-2 m-2 w-25">
                            <img src={photo.img_src} className="card-img-top " height="150" />
                            <div className="card-header">
                                <h2>{photo.camera.full_name}</h2>
                            </div>
                            <div className="card-body">
                                <p>{photo.rover.name}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
