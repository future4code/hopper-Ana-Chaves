import React, { useState } from 'react'
import Home from './Page/Home'
import PageMatch from './Page/pagematchs'


export default function App() {
  const[telaAtual, setTelAtual] = useState(0)

  const trocarDeTela = () => {
   if (telaAtual === 0) {
    return <Home/>
   } else {
     return <PageMatch/>
   }
  }

  const irParaOutraTela= () =>{
    if (telaAtual === 0) {
      setTelAtual(telaAtual +1)
    } else {
      setTelAtual(telaAtual -1)
    }
  }
  

  return (
    <div>
      {trocarDeTela()}
      <button onClick={irParaOutraTela}>Match</button>
    </div>
  )
}

