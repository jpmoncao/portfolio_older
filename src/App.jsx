import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import { About } from "./components/About/About"
import { Skills } from "./components/Skills/Skills"
import { Projects } from "./components/Projects/Projects.jsx"
import { Contacts } from "./components/Contacts/Contacts"

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contacts />
        </>
    )
}

export default App
