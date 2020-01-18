import React , {useEffect, useState} from 'react'


import './styled.css'

export default function Aside({onSubmit}){

  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const { latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
  
      },
      (err)=>{
        console.error(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

  async function handleSubmit(e){
    e.preventDefault();
    
    const obj={
      github_username,
      techs,
      latitude,
      longitude
   
    }

    await onSubmit(obj);
   
    setGithubUsername('')
        setTechs('');
  
   
  }

    return(
        <>
        <strong>Cadastrar</strong>
          <form onSubmit={handleSubmit}>
            <div className='input-block'>
              <label htmlFor='github_username'>Usuario do Github</label>
              <input 
                type='text'
                name='github_username' 
                id='github_username' 
                value={github_username}
                onChange={(e)=>{setGithubUsername(e.target.value)}}
                required 
              />
            </div>

            <div className='input-block'>
              <label htmlFor='techs'>Tecnologias</label>
              <input 
                type='text'
                name='techs' 
                id='techs' 
                value={techs}
                onChange={(e)=>{setTechs(e.target.value)}}
                required
               />
            </div>

            <div className='input-group'>

              <div className='input-block'>
                <label htmlFor='latitude'>Latitude</label>
                <input 
                  type='number'
                  name='latitude'
                  id='latitude' 
                  value={latitude}
                  onChange={(e)=>{setLatitude(e.target.value)}}
                  required 
                 />
              </div>

              <div className='input-block'>
                <label htmlFor='longitude'>Longitude</label>
                <input 
                  type='number'
                  name='longitude' 
                  id='longitude' 
                  value={longitude}
                  onChange={(e)=>{setLongitude(e.target.value)}}
                  required 
                />
              </div>
             
            </div>

            <button type='submit'>Cadastrar</button>

          </form>
        </>
    )
}