import React, { useContext } from 'react';
import { MeteorContext } from '../../state/state';
import SearchInput from '../SearchInput/SearchInput';
import DataRow from '../DataRow/DataRow';

function Table() {
  const context = useContext( MeteorContext );

  return (
    <div>
      <SearchInput />
      <DataRow />
    </div>
  )
}

export default Table;
