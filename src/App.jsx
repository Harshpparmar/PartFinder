import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Builder from "./components/Builder"

import Guides from "./components/Guides"
import Footer from "./components/Footer"
import CPUPage from "./components/Product Pages/CPUPage"
import CoolerPage from "./components/Product Pages/CoolerPage"
import MotherboardPage from "./components/Product Pages/MotherboardPage"
import MemoryPage from "./components/Product Pages/MemoryPage"
import StoragePage from "./components/Product Pages/StoragePage"
import VideoCardPage from "./components/Product Pages/VideoCardPage"
import PowerSupplyPage from "./components/Product Pages/PowerSupplyPage"
import CasePage from "./components/Product Pages/CasePage"
import ProductDetail from './components/ProductDetail'
import MonitorPage from "./components/Product Pages/MonitorPage"
import OsPage from "./components/Product Pages/OsPage"



function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    
                    <Route exact path="/builder" element={<Builder />} />
                    <Route exact path="/guides" element={<Guides />} />
                    <Route path="/components/cpu" element={<CPUPage />} />
                    
                    <Route path="/components/cooler" element={<CoolerPage />} />
                    <Route path="/components/motherboard" element={<MotherboardPage />} />
                    <Route path="/components/memory" element={<MemoryPage/>} />
                    <Route path="/components/storage" element={<StoragePage/>} />
                    <Route path="/components/videoCard" element={<VideoCardPage/>} />
                    <Route path="/components/power-supply" element={<PowerSupplyPage/>} />
                    <Route path="/components/case" element={<CasePage/>} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/components/monitor" element={<MonitorPage/>}/>
                    <Route path="/components/os" element={<OsPage/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
