import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function TutorialRoutes() {
    return (
        <div className="container-fluid ">
            <BrowserRouter>
                <Routes>
                    <Route path="shopping" element={<ShoppingComponent />

                    } />

                    <Route path="html" element={<HTML />

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

                </Routes>
            </BrowserRouter>
        </div>
    )
}