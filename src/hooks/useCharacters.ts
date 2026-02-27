import { useEffect, useState } from "react";
import type {Character} from "../types"; 

const useCharacter=()=>{
    const [character,setCharacter]=useState<Character[]>([])

    const traerCharacter=async()=>{
            try{
                const respuesta= await fetch ("https://rickandmortyapi.com/api/character")
                const datos = await respuesta.json()
                const listadoReal = datos.results.map((c:any, index:number)=>({
                    id:index+1,
                    name:c.name,
                    status:c.status,
                    image:c.image

                }))
                setCharacter(listadoReal)
                
            }
            catch(error){
                console.log(error)
            }

    }
    useEffect(()=>{
        traerCharacter()
    },[])

    return (character)
}
export default useCharacter