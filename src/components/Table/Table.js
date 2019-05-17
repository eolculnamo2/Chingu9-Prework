import React, { useContext } from 'react';
import { MeteorContext } from '../../state/state';
import DataRow from '../DataRow/DataRow';

function Table() {
  const context = useContext( MeteorContext );
  const { apiData } = context.state;

  return (
    <div>
      <DataRow />
      {apiData.map( x => {
        return <DataRow
                 data={x}
                 key={x.id}
               />
      })}
    </div>
  )
}

export default Table;
