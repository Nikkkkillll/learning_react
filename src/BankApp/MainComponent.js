import { BrowserRouter, Routes, Route } from "react-router-dom"
import BankAppHome from "./bankAppHome"
import PersonalLogin from "./Personal/PersonalLogin"
import PersonalRegister from "./Personal/PersonalRegister"
import NriLogin from "./NRi/NriLogin"
import NriRegister from "./NRi/NriRegister"
import PersonalHome from "./Personal/PersonalHome"
import NriHome from "./NRi/NriHome"

export default function MainComponent() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BankAppHome />}>
                        <Route path="personal" element={<PersonalHome />}>
                            <Route path="personallogin" element={<PersonalLogin />} />
                            <Route path="personalregister" element={<PersonalRegister />} />
                        </Route>
                        <Route path="nri" element={<NriHome />}>
                            <Route path="nrilogin" element={<NriLogin />} />
                            <Route path="nriregister" element={<NriRegister />} />

                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}