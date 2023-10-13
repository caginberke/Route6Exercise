import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  const context = useOutletContext()
  return (
    <img src={context.imageUrl} className="host-van-detail-image" />
  )
}

export default HostVanPhotos