//Styles
import './App.css'

//Components
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"
import ThirdComponent from './components/ThirdComponent'



function App() {

  return (
    <>
      <div>
        <h1>Entrando de cabeça no React!</h1>
      </div>
      <div>
        <FirstComponent/>
        <SecondComponent/> 
      </div>
      <div>
        <ThirdComponent/>
      </div>
    </>
  )
}

export default App
