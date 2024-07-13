import Secondarypage from '../components/Secondarypage/Secondarypage'
import Heropage from '../components/Heropage/Heropage'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
function App() {
  return (
    <div className="w-full h-[100vh] bg-background">
    <Navbar />
    <Heropage />
    <Secondarypage />
    <Footer />
    </div>
  )
}

export default App
