import axios from 'axios';
import React, { useEffect, useState } from 'react';


const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e3aaf36d"


function LandingPage() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let response = await axios.get(URL)
    console.log(response)
  }

  return <div></div>;
}

export default LandingPage;
