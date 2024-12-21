import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState(""); 
  const [details, setDetails] = useState(""); 
  const [imageUrl, setimageUrl] = useState("");
  const [favourite, setFavourite] = useState(false)
  const [allCards, setallCards] = useState([]); 

  const submitHandler =(e) =>{
    e.preventDefault()
    const newArr = [...allCards, {name, details, imageUrl,favourite}]
    console.log(newArr)
    setallCards(newArr)
    setname("")
    setDetails("")
    setimageUrl("")

  }
  


  return (
    <>
      <div className="w-full flex hieght-[100vh] bg-zinc-200">
        <div className='w-[49%] h-[100%] bg-zinc-200'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <h1 className='text-[40px] p-5'>Add Contact</h1>
            <h3 className='text-[20px] p-5'>Name*</h3>
            <input value={name} onChange={(e)=> {setname(e.target.value)}} type='text' placeholder='Enter Name' className='px-3 m-5 py-6 border-black bg-black text-white'/>

            <h3 className='text-[20px] p-5'>Company*</h3>
            <input value={details} onChange={(e)=>{setDetails(e.target.value)}} type='text' placeholder='Company' className='px-3 m-5 py-6 border-black bg-black text-white'/>

            <h3 className='text-[20px] p-5'>Phone*</h3>
            <input value={imageUrl} onChange={(e)=>{{setimageUrl(e.target.value)}}} type='text' placeholder='Phn Number' className='px-3 m-5 py-6 border-black bg-black text-white'/>
            <br/>
            <input checked = {favourite} onChange={(e)=>{setFavourite(e.target.checked)}} type="checkbox" />
            
            <button className='px-3 py-1 m-5 bg-black text-white rounded font-sm '>Submit</button>

          </form>
        </div>
        <div className='w-[50vh] h-full '>
          <h1 className='text-[40px] p-5'>Contact List</h1>{
            (allCards.map(function(elem){
              return <div className='w-[30vw] ml-8 h-[35vh] bg-orange-600 tracking-widest'>
              <h1 className='p-5 text-3xl text-bold tracking-widest'>Name:{elem.name}</h1>
              <h1 className='p-5 text-xl text-bold'>Company:{elem.details}</h1>
              <h1 className='p-5 text-xl text-bold'>Phone:{elem.imageUrl}</h1>
              <h1 className='px-5 text-xl text-bold'>{elem.name} {elem.favourite?'Fav':''}</h1>
  
            </div>
            }))
          }
          
          
        </div>
      </div>
    </>
  )
}

export default App
