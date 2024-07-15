import Secondarypage from '../components/Homepage/Secondarypage/Secondarypage'
import Heropage from '../components/Homepage/Heropage/Heropage'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function App() {
  return (
    <div className="w-full h-[100vh]">
    <Navbar />
    <Heropage />
    <Secondarypage />
    <Footer />
    </div>
  )
}

export default App
