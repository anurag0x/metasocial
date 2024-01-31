import React from 'react';
import './CountryCard.css'; // Import a CSS file for styling

const CountryCard = ({ data }) => {
  return (
    <div
      id='cardstyle'
      className='country-card'
    >
      <div className='card-header'>
        <img
          className='country-flag'
          src={data.flags.png}
          alt={`${data.name.common} Flag`}
        />
      </div>
      <h3>Name - {data.name.common}</h3>
      <h4>Capital - {data.capital ? data.capital[0] : null}</h4>
    </div>
  );
};

export default CountryCard;
