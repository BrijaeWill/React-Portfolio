import Header from '/Components/header.jsx'
import Footer from '../Components/footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '/Main/App.css'
function App(){
    return(
        <div>
            <Header/>
            <Footer/>
        </div>
    )
}
export default App