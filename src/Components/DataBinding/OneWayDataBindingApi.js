// import { useEffect, useState } from "react";

// export default function OneWayDataBindingApi() {
//     const [mars, setMars] = useState({ photos: [] });//even if we dont define the type then it will automatically inderstanf because java is not strictly typed
//     useEffect(() => {
//         //we fetch the data from api buy using a promise called Fetch which we do in javascript
//         fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
//             //now while accesing because it it promise while fecting the data is coming in binary form so we have to conver the data into json
//             //then idicates what to do with data thst is coming
//             .then(response => response.json())//converting intp json
//             //after converting intop json then another promise method will come and which ewill collect the data and this data we have to store inside the mars so we need a setter
//             .then(data => { setMars(data); })



//     }, []);
//     return (
//         <div className="container">
//             <h2>Mars Photos</h2>
//             <table className="table table-hover">
//                 <thead>
//                 <tr>
//                     <th>Photo id</th>
//                     <th>Camera Name</th>
//                     <th>Rover Name</th>
//                     <th>Photo</th>
//                 </tr>
//                 </thead>
//             </table>
//             <tbody>
//                 {
//                     mars.photos.map((photo) => {
//                         return(
//                         <tr key={photo.id}>
//                             <td>{photo.id}</td>
//                             <td>{photo.camera.full_name}</td>
//                             <td>{photo.rover.name}</td>
//                             <td>
//                                 <img src={photo.img_src} width="100" height="100" />
//                             </td>
//                         </tr>
//                         )
//                     })
//                 }
//             </tbody>

//         </div>
//     )
// }

import { useEffect, useState } from "react";

export default function OneWayDataBindingApi() {
  const [mars, setMars] = useState({ photos: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.photos)) {
          setMars(data);
        } else {
          setMars({ photos: [] });
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading photos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h2>Mars Photos</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Photo id</th>
            <th>Camera Name</th>
            <th>Rover Name</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {mars.photos.map(photo => (
            <tr key={photo.id}>
              <td>{photo.id}</td>
              <td>{photo.camera.full_name}</td>
              <td>{photo.rover.name}</td>
              <td>
                <img src={photo.img_src} width="100" height="100" alt="Mars" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
