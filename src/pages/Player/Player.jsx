import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {

const {id} = useParams();
const navigate = useNavigate();


  const [apiData, setApiData ]= useState({
    name:"",
    key:"",
    published_at: "",
    typeof: ""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmRlZjVlM2M1ODBmYTZmY2U3ZGU2M2RlYzgyZDNkMSIsIm5iZiI6MTczMzc1MzUyOS44ODksInN1YiI6IjY3NTZmYWI5Y2U0N2YyMDkwMDUxNWU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u_Z7Pl1cy-cY2NCABfY6oV_4YFnzKa_Zbom7mkGDyDw'
    }
  };


  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
       frameborder="0" 
      width='90%' height='90%' 
      title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>
    </div>
  )
}

export default Player
