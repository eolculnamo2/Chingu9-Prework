import React, { useContext } from 'react';
import { MeteorContext } from '../../state/state';
import DataRow from '../DataRow/DataRow';

function Table() {
  const context = useContext( MeteorContext );
  const { displayData } = context.state;

  return (
    <div>
      <DataRow />
      {displayData.map( x => {
        return <DataRow
                 fall={x.fall}
                 geolocation={x.geolocation}
                 id={x.id}
                 key={x.id}
                 mass={x.mass}
                 name={x.name}
                 nameType={x.nametype}
                 recclass={x.recclass}
                 year={x.year}
               />
      })}
    </div>
  )
}

export default Table;
