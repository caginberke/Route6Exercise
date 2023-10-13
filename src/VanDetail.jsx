import React, { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import vanData from "./data.json";

function VanDetail() {
    const params = useParams()
    const location = useLocation()
    const [vans, setVans] = useState(vanData.vans);
    const [currentVan, setCurrentVan] = useState(null);

    useEffect(() => {
        const selectedVan = vans.find(van => van.id === params.id);
        setCurrentVan(selectedVan);
    }, [params.id, vans]);


    const search = location.state?.search || ""
    const type = location.state?.type || "all"

  return (
    <div>
        <Link
            to={`..${search}`}
            relative="path"
            className='back-button'
        >&larr; <span>{`Back to ${type} vans`}</span></Link>


            {currentVan ? (
                <div className="van-detail">
                    <img alt={currentVan.name} src={currentVan.imageUrl} />
                    <i className={`van-type ${currentVan.type} selected`}>
                    {currentVan.type}
                    </i>
                    <h2>{currentVan.name}</h2>
                    <p className="van-price"><span>${currentVan.price}</span>/day</p>
                    <p>{currentVan.description}</p>
                <button className="link-button">Rent this van</button>
                </div>
            ) : (
                <p>We couldn't find a van.</p>
            )}
        </div>
  )
}

export default VanDetail