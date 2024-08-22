import './App.css'
import { useState } from 'react'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import Tarefa from './pages/tarefa/Tarefa'

function App() {
// const [nome_estado,nome_funcao_estado] = useState(valor_inicial_estado) -> Criando um estado em React
  return (
    <>
        {/*<Home
          titulo="Título da minha primeira postagem"
          texto="Texto da minha primeira postagem"
        />
        <Home
          titulo="Título da minha segunda postagem"
          texto="Texto da minha segunda postagem"
        /> */}
        {/*
          <Contador/>
        */}
        <Tarefa/>
    </>
  )
}

export default App
