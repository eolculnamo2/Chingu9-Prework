import React from 'react';
import PropTypes from 'prop-types';

function DataRow(props) {
  const {
    name,
    id,
    nameType,
    recclass,
    mass,
    fall,
    year,
    geolocation,
  } = props;

  return (
    <div>
      <div>{name}</div>
      <div>{id}</div>
      <div>{nameType}</div>
      <div>{recclass}</div>
      <div>{mass}</div>
      <div>{fall}</div>
      <div>{year}</div>
      <div>{geolocation.latitude}</div>
      <div>{geolocation.longitude}</div>
    </div>
  )
}

DataRow.defaultProps = {
  name: 'Name',
  id: 'ID',
  nameType: 'Name Type',
  recclass: 'Rec Class',
  mass: 'Mass(g)',
  fall: 'Fall',
  year: 'Year',
  geolocation: {
    latitude: 'Latitude',
    longitude: 'Longitude',
  }
}

DataRow.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  nameType: PropTypes.string,
  recclass: PropTypes.string,
  mass: PropTypes.string,
  fall: PropTypes.string,
  year: PropTypes.string,
  geolocation: PropTypes.shape({
    latitude: PropTypes.string,
    longitude: PropTypes.string
  })
}

export default DataRow;
