//Styles
import './App.css'

//Components
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"
import ThirdComponent from './components/ThirdComponent'



function App() {

  const ShowMsg = (x) =>{
    if(x){
    return <h2> Deu certo! </h2>
    } else{
        return <h2> Deu errado! </h2>
    }
}

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
      
      <div>
        <button onClick={() =>{alert('Clicado na opção Inline!')}}>
          Inline function
        </button>
      </div>

      <div className='ShowMsg'>
        {ShowMsg(true)}
      </div>
    </>
  )
}

export default App
