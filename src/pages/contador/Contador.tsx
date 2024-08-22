import { useState } from "react"

function Contador() {
  // States,Hooks -> React
  const [valor,setValor] = useState(0);
  
  // Function -> Typescript
  function handleClick() {
    setValor(valor + 1)
  }

  return (
    <div>
      <h2>Componente Contador</h2>
      <p> O valor valor inicial do meu estado é: {valor} </p>
      <button onClick={handleClick}>Adicionar +1</button>
    </div>
  )
}

export default Contador