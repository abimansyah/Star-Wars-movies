import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CharacterCard({data}) {
  
  const navigate = useNavigate()

  const id = data.url.slice(29)

  useEffect(() => {
    // console.log(data);
    // console.log(id)
  }, [])
  
  

  return (
    <div className="flex flex-col bg-white m-2 p-4 rounded-lg items-start border-2 ">
      <div className="font-bold">
        <h1>{data.name}</h1>
      </div>

      <div className="pb-2">
        <div className="flex justify-between">
          <h1>Birth: </h1>
          <h1>{data.birth_year}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Eye Color: </h1>
          <h1>{data.eye_color}</h1>
        </div>
      </div>

      <div>
        <button 
        onClick={()=> {
          navigate(`/detail/${id}`)
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See Detail
        </button>
      </div>
    </div>
  )
}