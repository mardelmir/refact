import './App.css'
import Employees from './employees'
import Calculator from './calculator'
import Header from './header'
import Footer from './footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Calculator />
        <Employees />
      </main>
      <Footer />
    </>
  )
}

export default App