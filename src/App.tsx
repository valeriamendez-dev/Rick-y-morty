import Card from "./components/Card/Card"
import { useCharacter } from "./hooks";
import './App.css'

function App() {
  const character=useCharacter()
  return(
    <>
      <div className="container">
      {character.map((c)=>(
        <Card
          key={c.id}
          name={c.name}
          status={c.status}
          image={c.image}
        />
      ))}
      </div>

    </> 
   
  )
}
export default App