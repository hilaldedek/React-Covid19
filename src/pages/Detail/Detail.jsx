// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { DateInput,StyledDiv } from './Detail.style'

const Detail = () => {
    const[tarih,setTarih]=useState();
    const [veri,setVeri]=useState("");
    
    useEffect(() => {
      axios
        .get(
          "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
        )
        .then((res) => setVeri(res.data[tarih]))
        .catch((err) => console.log(err));
        // console.log(veri);
    }, [veri, tarih]);
  // const getVeri=()=>{
  //   console.log(veri);
  // }





    // console.log(veri);
  //  console.log(veri.tests);
  //   const getVeri = async()=>{
  //     const url="https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";
  //     try{
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       const veri =await Object.values(date)?.totalTests;
  //       console.log(tarih);
  //       console.log(data);
  //       console.log(veri);
  //       console.log(date);

  //     }catch(error){
  //       console.log(error);
  //     }
      
      
  //   }
  //   useEffect(()=>{
  //       getVeri(tarih);
  //   },[veri,tarih]);

  //   const {totalTests,totalPatients,totalDeaths,tests} = veri;

  //  const date=tarih;
    
  return (
    <div>
        <DateInput type="date" onChange={(e) => setTarih((new Date(e.target.value)).toLocaleDateString('en-GB'))}/>
        {/* <Button type='submit' onClick={getVeri}>Search</Button> */}
        <StyledDiv>
          <h1>Tests:</h1>
          <p>{veri===undefined ? "data loading..." : veri.tests}</p>
        </StyledDiv>
        <StyledDiv>
          <h1>Cases:</h1>
          <p>{veri===undefined ? "data loading..." : veri.cases}</p>
        </StyledDiv>
        <StyledDiv>
          <h1>Deaths: </h1>
          <p>{veri===undefined ? "data loading..." : veri.deaths}</p>
        </StyledDiv>
        <StyledDiv>
          <h1>Recovered:</h1>
          <p>{veri===undefined ? "data loading..." : veri.recovered}</p>
        </StyledDiv>
    </div>
  )
  }
export default Detail