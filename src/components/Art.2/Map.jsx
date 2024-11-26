import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { list } from './TollList';
import circle from '../../pictures/Toll/dot-outline.png'

function circleIcon (_iconSize){
    return L.icon({
        iconUrl: circle,
        iconSize: _iconSize
    })
}

export default function Map() {
  const [visibleMarkerIndex, setVisibleMarkerIndex] = useState(-1);

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function isOutOfViewportFromBottom(el) {
    const rect = el.getBoundingClientRect();
        return rect.top > (window.innerHeight || document.documentElement.clientHeight);
  }

    const handleScroll = () => {
        const marker0 = document.getElementById('marker-0');

        if (marker0 && isOutOfViewportFromBottom(marker0)) {
            setVisibleMarkerIndex(-1);
        } else {
            list.map((_, index) => {
                const element = document.getElementById(`marker-${index}`);
                if (element && isInViewport(element)) {
                    setVisibleMarkerIndex(index);
                }
            });
        }
    };

window.addEventListener('scroll', handleScroll, { passive: true });

    useEffect(() => {
        scroll()
    }, [list]);

    console.log(visibleMarkerIndex)

    return (
        <>
        <div id="mapcontainer" style={{ height: '100vh', width: '100%' }}>
            <MapContainer
            center={[59.269294, 11.028108]}
            zoom={11}
            scrollWheelZoom={false}
            dragging={false}
            doubleClickZoom={false}
            style={{ height: '100%', width: '100%' }}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {list.map((position, index) =>
                index <= visibleMarkerIndex ? (
                <Marker key={index} position={position.position} icon={circleIcon(15)}>
                    {/* <p>{index + 1}</p> */}
                    <Popup>Nr.{index + 1}: {position.toll}</Popup>
                </Marker>
                ) : null
            )}
            </MapContainer>
        </div>

        <section>
            {list.map((_, index) => (
            <div key={index} className='markers' id={`marker-${index}`}>
                <h2>Markør {index + 1}:  <br /> {_.toll} </h2>
            </div>
            ))}
        </section>
        </>
    );
}
