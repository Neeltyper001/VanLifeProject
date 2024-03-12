import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import VanInfo from '../../components/vanDetail/VanInfo'
import axios from 'axios'
import './index.css'


const VanDetail = () => {        
    const [vanDetail, setVanDetail] = useState(null);
    const params = useParams();
    const {state} = useLocation();    
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
                vanFilters={state.search}
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