import React , {useEffect, useState}  from 'react';
import api from '../../services/api';

import './styled.css';

import Aside from '../../Components/Aside';
import Main from '../../Components/Main';

export default function Home(){

    const [arrayDevs, setArrayDevs] = useState([]);

    useEffect(()=>{
       async function loadDevs(){
            const response = await api.get('/devs')
                setArrayDevs(response.data)
        }

      loadDevs()
    }, [])


    async function handleAddDev(obj){

        const response =  await api.post('/devs/insert', obj)
            setArrayDevs([response.data , ...arrayDevs])
      }

    return(
    
        <div className='Home'>
            <aside>
                <Aside onSubmit={handleAddDev} />
            </aside>

            <main>
                <Main arrayDevs={arrayDevs}/>
            </main>

        </div>
       
    )
}