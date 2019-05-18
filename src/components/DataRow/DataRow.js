import React from 'react';
import PropTypes from 'prop-types';
import './DataRow.css';

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
    <div className="data-row__flex-wrap">
      <div className="data-row__item data-row__mobile">{name}</div>
      <div className="data-row__item">{id}</div>
      <div className="data-row__item">{nameType}</div>
      <div className="data-row__item">{recclass}</div>
      <div className="data-row__item data-row__mobile">{mass}</div>
      <div className="data-row__item">{fall}</div>
      <div className="data-row__item data-row__mobile">{year.split('-')[0]}</div>
      <div className="data-row__item">{geolocation.latitude}</div>
      <div className="data-row__item">{geolocation.longitude}</div>
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
