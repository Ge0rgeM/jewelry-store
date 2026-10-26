import './App.css'
import Header from './Components/Header.jsx'
import Intro from './Components/Intro.jsx'
import Footer from './Components/Footer.jsx'
import HowToOrder from './Components/HowToOrder.jsx'
import TextUs from './Components/TextUs.jsx'
import Collection from './Components/Collection.jsx'
function App() {

  return (
    <div className="mx-auto min-h-screen w-full max-w-300 px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
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
