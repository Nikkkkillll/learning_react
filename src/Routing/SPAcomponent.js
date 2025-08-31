import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import ShoppingComponent from "../Components/DataBinding/ShoppingComponent";


//Using Component
function HTML() {
    return (
        <div>
            <h2>Html</h2>
            <p>It is a Markup Language</p>
        </div>
    )
}

export default function SPAcomponent() {


    return (
        <div className="conatiner-fluid">
            <BrowserRouter>
                <nav>
                    <ol>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">JavaScript</Link></li>
                        <li><Link to="/shopping">Shopping</Link></li>
                    </ol>
                </nav>
                <hr></hr>
                {/* <Routes>
                    <Route path="shopping" element={<ShoppingComponent/>
                        
                    } />

                    <Route path="html" element={<HTML/>
                        
                    } />

                    <Route path="css" element={<main>
                        <h2>CSS</h2>
                        <p>It is Styling Language</p>
                    </main>} />
                    <Route path="js" element={<main>
                        <h2>JavaScript</h2>
                        <p>It is a logical language</p>
                    </main>} />
                    <Route path="/" element={
                        <main>
                            <h2>Home</h2>
                            <p>Tutorial Home </p>
                        </main>
                    } />
                    <Route path="*" element={
                        <main>
                            <code>Not Fount : Page you requested not found</code>
                        </main>
                    } />

                </Routes> */}
                <Outlet/>
            </BrowserRouter>
        </div>
    )
}