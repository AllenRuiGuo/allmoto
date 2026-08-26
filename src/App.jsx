import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContactModal from './components/ContactModal/ContactModal'

import Home from './pages/Home'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'

function App() {

    const [contactOpen, setContactOpen] = useState(false)

    return (
        <BrowserRouter>

            <Header
                onContactClick={() => setContactOpen(true)}
            />

            <main>
                <Routes>

                    <Route
                        path="/"
                        element={
                            <Home
                                onContactClick={() => setContactOpen(true)}
                            />
                        }
                    />

                    <Route
                        path="/projects"
                        element={<Projects />}
                    />

                    <Route
                        path="/projects/:projectId"
                        element={<ProjectDetails />}
                    />

                </Routes>
            </main>

            <Footer
                onContactClick={() => setContactOpen(true)}
            />

            <ContactModal
                isOpen={contactOpen}
                onClose={() => setContactOpen(false)}
            />

        </BrowserRouter>
    )
}

export default App