import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

export default function DetailPage () {

  const {id} = useParams()

  const [detail, setDetail] = useState({})
  const [movies, setMovies] = useState([])
  const [movieArr, setMovieArr] = useState([])
 
  
  const fetchMovies = async(url) => {
    try {
      const resp = await axios.get(url)
      console.log(resp.data.title);
      setMovieArr.push([
        ...movieArr,
        resp.data.title
      ])
    } catch (error) {
      console.log(error);
    }
  }
  

  const fetchDetail = async () => {
    try {
      const resp = await axios.get(`https://swapi.dev/api/people/${id}`)
      setDetail(resp.data);
      resp.data.films.forEach((e)=> {
        fetchMovies(e)
      })
      setMovies(movieArr)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDetail()
  }, [])
  
console.log(movieArr);
  return (
    <div>
      <div>DETAIL</div>
      <div>
        <h1>Name :{detail.name}</h1>
        <h1>Birth Year: {detail.birth_year}</h1>
        <h1>Eye Color: {detail.eye_color}</h1>
        <h1>Gender: {detail.gender}</h1>
        <h1>Hair Color: {detail.hair_color}</h1>
        <h1>Height: {detail.height}</h1>
        <h1>Mass: {detail.mass}</h1>
        <h1>Skin Color: {detail.skin_color}</h1>

        <div>
          {
            movieArr?.map((e, index)=> {
              return (
                <h1
                key ={index}
                >{e}</h1>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}