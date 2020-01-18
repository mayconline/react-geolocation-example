import React from 'react'


import './styled.css'

export default function Main({arrayDevs}){
   return(
        <>
        <ul>
           {arrayDevs && arrayDevs.map(dev => (
                <li key={dev._id} className='dev-item'>
                <header>
                    <img src={dev.avatar_url} alt={dev.name}/>
                    <div className='user-info'>
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                    </div>
                </header>
                <p>{dev.bio}</p>
                <a href={`http://github.com/${dev.github_username}`} target='_blank' rel='noopener noreferrer' >Acessar Perfil no Github</a>
                </li>
           ))}
        </ul>
      </>
    )
}