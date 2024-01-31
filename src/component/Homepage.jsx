import React, { useEffect, useState } from 'react'
import styled from 'styled-components' 
import { BsSearch } from "react-icons/bs";
import { useDebounce } from 'use-debounce';
import axios from 'axios'
import CountryCard from './CountryCard';
const Loader = () => <div className="loader">Loading...</div>;

const Homepage = () => {
  const [search, setsearch] = useState('');
  const [value] = useDebounce(search, 1000);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlechange = () => {
    setLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/currency/${search}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!search) {
      setdata([]);
    }
    handlechange();
  }, [value]);
  return <>
  <Container>
    <h1 className='head' >MetaSocial</h1>
    <h2 className='second'>Enter currency to know the eligible countries..</h2>
     <div className='inpcont'>
      <span className='icon'> <BsSearch /></span>
    <input onChange={(e)=>setsearch(e.target.value)} className='searchinp' placeholder='Search By currency INR,EUR'/>
     </div>
     <div className="card">
          {loading ? (
            <Loader />
          ) : (
            data.length > 0 &&
            data.map((el, index) => {
              return <CountryCard key={index} data={el} />;
            })
          )}
        </div>
  </Container>
  </>
}

export default Homepage



const Container = styled.div`
  width: 80%;
  margin: auto;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;

  .searchinp {
    width: 500px;
    border-radius: 5px;
    height: 40px;
    font-size: larger;
    padding-left: 40px;

    /* Add media query for smaller screens */
    @media (max-width: 600px) {
     width: 100%;
    }
  }
.second{
  position: relative;
  top: 120px;
}
  .inpcont {
    padding-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    position: relative;
    left: 30px;
  }
.head{
  text-align: start;
  color: #FF5473;
}
  .card {
    margin-bottom: 20px;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    /* Update grid-template-columns for responsiveness */
    grid-template-columns: repeat(3,300px);
    gap: 40px;
  }
  .loader {
    font-size: larger;
    margin-top: 20px;
    position: relative;
    left: 300px;
  }
  @media (max-width: 992px) {
   
    .card {
    margin-bottom: 20px;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    /* Update grid-template-columns for responsiveness */
    grid-template-columns: repeat(2,300px);
    gap: 40px;
  }
  .loader {
    font-size: larger;
    margin-top: 20px;
    position: relative;
    left: 300px;
  }
  }
  
  /* Media Query for mobile screens */
  @media (max-width: 600px) {
    .card {
    margin-bottom: 20px;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    /* Update grid-template-columns for responsiveness */
    grid-template-columns: repeat(1,300px);
    gap: 40px;
  }
  .loader {
    font-size: larger;
    margin-top: 20px;
    position: relative;
    left: 30px;
  }
  }
  
 `
