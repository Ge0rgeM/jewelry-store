import './App.css'
import Header from './Components/Header.jsx'
import Intro from './Components/Intro.jsx'
import Footer from './Components/Footer.jsx'
import HowToOrder from './Components/HowToOrder.jsx'
import TextUs from './Components/TextUs.jsx'
import Collection from './Components/Collection.jsx'
function App() {

  return (
    <div className="max-w-300 h-screen px-10 py-5 m-auto">
      <Header />
      <Intro />
      <Collection />
      <HowToOrder />
      <TextUs />
      <Footer />
    </div>
  )
}

export default App
