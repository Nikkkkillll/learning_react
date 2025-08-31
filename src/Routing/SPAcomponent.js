import { BrowserRouter,Route,Routes,Link} from "react-router-dom";

export default function SPAcomponent(){
    return(
        <div className="conatiner-fluid">
            <BrowserRouter>
                <nav>
                    <ol>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">JavaScript</Link></li>
                    </ol>
                </nav>
                <hr></hr>
                <Routes>
                    <Route path="html" element={<main>
                        <h2>Html</h2>
                        <p>It is a Markup Language</p>
                    </main>}/>

                    <Route path="css" element={<main>
                        <h2>CSS</h2>
                        <p>It is Styling Language</p>
                    </main>}/>
                    <Route path="js" element={<main>
                        <h2>JavaScript</h2>
                        <p>It is a logical language</p>
                    </main>}/>
                    <Route path="/" element={
                        <main>
                            <h2>Home</h2>
                            <p>Tutorial Home </p>
                        </main>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>   
         )
}