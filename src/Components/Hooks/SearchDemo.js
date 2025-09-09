import { serialize } from "mongodb";
import { useSearchParams } from "react-router-dom";

export default function SearchDemo(){

    const [searchParams,setSearchParams]=useSearchParams();
    function handleSubmit(event){
        var params = serializeFormQuery(event.target);
        setSearchParams(params);
        alert(searchParams);
    }

    return(
        <div>
           <h2>Serach Params</h2>
           <form onSubmit={handleSubmit}>
            <dl>User Name</dl>
            <dd><input name="UserName" type="text"/></dd>
            <dl>Age </dl>
            <dd><input name="Age" type="number"/></dd>
            <button>Submit</button>
           </form>
        </div>
    )
}
//api