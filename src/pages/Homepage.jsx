import React, { useState, useEffect } from "react";
import axios from 'axios'
import CharacterCard from "../components/CharacterCard";

export default function Homepage() {

  const [data, setData] = useState([])


  const fetchData = async () => {
    try {
      const resp = await axios.get('https://swapi.dev/api/people')
      setData(resp.data.results);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <div className="grid grid-cols-5">
        {
          data.map((e, index) => {
            return (
              <CharacterCard 
              key={index}
              data={e}/>
            )
          })
        }
      </div>
    </div>
  )
}