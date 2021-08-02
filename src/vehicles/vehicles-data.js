import React, { useState, useEffect }  from 'react';

import { GetMultiplePagesData } from '../api/get-multiple-pages-data';
import { getMultiplePagesData } from '../api/get-multiple-pages-data-noreact';


export function Vehicles({ callback }) {
  const filterPilotlessVehicles = (data) => {
    const filterdData = data.filter(vehicles => vehicles.pilots.length > 0);
    callback(filterdData);
  }
  
  useEffect(
    ()=>getMultiplePagesData('https://swapi.dev/api/vehicles',filterPilotlessVehicles)
  ,[])

  return (
    <div>
      {/* <GetMultiplePagesData
        url='https://swapi.dev/api/vehicles'
        callback={filterPilotlessVehicles}
      /> */}
    </div>
  );
}