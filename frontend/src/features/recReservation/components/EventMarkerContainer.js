import React, { useState } from "react"
import { MapMarker, useMap } from "react-kakao-maps-sdk"

export default function EventMarkerContainer({ position, content }) {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)
  
    return (
      <MapMarker
        position={position}
        image={{
          src: "https://cdn-icons-png.flaticon.com/512/5717/5717262.png", 
          size: {
            width: 45,
            height: 45,
          }, 
          options: {
            offset: {
              x: 25,
              y: 45,
            }, 
          },
        }}
        onClick={(marker) => {
          console.log(content)
          map.panTo(marker.getPosition())}}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    )
  }
