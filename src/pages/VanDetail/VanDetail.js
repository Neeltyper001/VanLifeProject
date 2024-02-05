import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import VanInfo from '../../components/vanDetail/VanInfo'
import axios from 'axios'
import './index.css'


const VanDetail = () => {        
    const [vanDetail, setVanDetail] = useState(null);
    const params = useParams();
    useEffect(()=>{
        axios.get(`/vans/data/${params.vanId}`)
        .then( res => setVanDetail(res.data))
        .catch(error => console.log(error))        
    },[params.vanId])
  return (
    <>
            {vanDetail ?
                <VanInfo 
                vanId={vanDetail.id}
                vanName={vanDetail.name}
                vanDesc={vanDetail.description}
                vanImg={vanDetail.image_url}
                vanPrice={vanDetail.price}
                vanType={vanDetail.type}                
                />   
                :
                    <div className="loading">
                        <h2>Loading.....</h2>
                    </div>
        }
    </>
  )
}

export default VanDetail