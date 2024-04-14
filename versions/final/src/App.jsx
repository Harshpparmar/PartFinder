import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Builder from "./components/Builder"
import Complete from "./components/Complete"
import Guide from "./components/Guide"
import Footer from "./components/Footer"
import CPUPage from "./components/CPUPage"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    
                    <Route exact path="/builder" element={<Builder />} />
                    <Route exact path="/complete-build" element={<Complete />} />
                    <Route exact path="/guide" element={<Guide />} />
                    <Route path="/components/cpu" element={<CPUPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
