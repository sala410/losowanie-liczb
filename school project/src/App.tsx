import {useState} from 'react';

export default function App() {
  const [wylosowne,setWylosowane] = useState([0])
  const [los,setLos] = useState(0)
  const [ilosc,setIlosc] = useState(1)

  const losuj=()=>{
    const nowaLiczba = Math.floor(Math.random()*ilosc + 1)
    if(wylosowne.find(e=> nowaLiczba === e) === undefined){
      setLos(nowaLiczba)
      setWylosowane([...wylosowne,nowaLiczba])
    }
    else{
      wylosowne.length!== ilosc && losuj()
    }
    
  }
  return (
    <div className="flex w-full h-[100vh] flex-col items-center justify-center">
      <div className='flex flex-col items-center'>
        <h2 className='text-xl font-bold'>Wylosowane Numerki:</h2>
        <div className='flex m-2'>
          {wylosowne.map(e=><p>{e} , </p>)}
        </div>
      </div>
      <h1 className='text-4xl m-5'>Losuj Numerek</h1>
      <div className='flex flex-col '>
        <label htmlFor="inp" className='text-2xl m-3'>Podaj ilość osób</label>
        <input type="text" className='text-xl m-4 border p-2 rounded-md ' onChange={(e)=>setIlosc(parseInt(e.target.value))} name="" id="inp" />
      </div>
      <h1>Numerek do pytania to: {los}</h1>
      <button onClick={()=>losuj()} className='m-4 px-5 py-1 border rounded-md bg-sky-400'>Losuj</button>
      <button onClick={()=>setWylosowane([])} className='m-4 px-5 py-1 border rounded-md bg-purple-500'>Wyczyść Tablic</button>
    </div>
  )
}

