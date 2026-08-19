import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'

function App() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/projects/:projectId"
                    element={<ProjectDetails />}
                />

            </Routes>

            <Footer />

        </BrowserRouter>
    )
}

export default App