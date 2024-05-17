"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewTest(){
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  
  const fetchData = async () => {
    const response = await fetch("/api/json_data/fullstack/");
    const data = await response.json();

    
    setData(data);
    setFilteredData(data);
  }

  const pushData = () => {
    const filteredData1 = data.filter((d) => d.isSellected === true);
    if(filteredData1.length < 1)
      {
        filteredData1.push(...data);
      }
    setFilteredData(filteredData1);
  }

  useEffect(() => {
    fetchData();
  }, []);



  function myFunction(type, id) {
    var checkBox = document.getElementById(id);
    
    if (checkBox.checked == true){
      for(let i = 0; i < data.length; i++) {
        if(data[i].type === type) {
          data[i].isSellected = true
        }
      }
      pushData()
    } else {
      for(let i = 0; i < data.length; i++) {
        if(data[i].type === type) {
          data[i].isSellected = false
        }
      }
      pushData()
    }
  }

  return(
    <div className="main-container">
        <div className="filter-bar-container">
          <div className='filter-bar'>
           <h1>Frontend</h1>
            HTML
            <input type="checkbox" id="htmlCheck" onClick={() => myFunction("html","htmlCheck")} />
            <br/>
            CSS
            <input type="checkbox" id="cssCheck" onClick={() => myFunction("css","cssCheck")}/>
            <br/>
            Javascript
            <input type="checkbox" id="javascriptCheck" onClick={() => myFunction("javascript","javascriptCheck")}/>
            <br/>
            React
            <input type="checkbox" id="reactCheck" onClick={() => myFunction("react","reactCheck")}/>
            <br/>
            Next.js
            <input type="checkbox" id="next_js_Check" onClick={() => myFunction("next_js","next_js_Check")}/>
            <br/>
            Figma
            <input type="checkbox" id="figmaCheck" onClick={() => myFunction("figma","figmaCheck")}/>
            <br/>
            MUI
            <input type="checkbox" id="muiCheck" onClick={() => myFunction("mui","muiCheck")}/>
            <br/>
            <h1>Backend</h1>
            Django
            <input type="checkbox" id="djangoCheck" onClick={() => myFunction("django","djangoCheck")}/>
            <br/>
            Postgresql
            <input type="checkbox" id="postgresqlCheck" onClick={() => myFunction("postgresql","postgresqlCheck")}/>
            <br/>
            Docker
            <input type="checkbox" id="dockerCheck" onClick={() => myFunction("docker","dockerCheck")}/>
          </div>
        </div>
        <div className="resource-container">
          <h1 className='content-heading'>Resources</h1>
         {filteredData.map((d, i) => 
            <>
              <h2 className='list-heading'>{d.heading}</h2>
              <ul className='list-container' key={i}>
                {d.links.map((d, i) =>
                  
                    <li className='list-item' key={i}><Link href={d.link}>{d.title}</Link></li>
                  
                )}
                <br/>
              </ul>
            </>
          )}
        </div>
    </div>
  )
}