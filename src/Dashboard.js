//import React from 'react';
import React, { useState } from 'react';
import Chart from "chart.js/auto";


import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import 'bootstrap/dist/css/bootstrap.min.css';


// const data = {   
//     labels: ["Jun 2022","Jul 2022","Aug 2022","Sep 2022","Oct 2022","Nov 2022"],
//     datasets: 
//     [
//      {
//       label: 'Tickets',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [29,19,20,17,17,13]
//       },
//     ],
//   };


function Dashboard() {
  const [todaysbookingsdata, setTodaysBookingsData] = React.useState(null);
  const [avgbookingsdata, setAvgBookingsData] = React.useState(null);
  const [avgticketsdata, setAvgTicketsData] = React.useState(null);  
  const [supplierusesdata, setSupplierUsesData] = React.useState(null);
  const [supplierltbdata, setSupplierLTBData] = React.useState(null);
  const [topsearchedsectorsdata, setTopSearchedSectorsData] = React.useState(null);
  
  const [compid, setCompanyId] = useState('FTI');
  const [channel, setChannel] = useState('B2C');
  const [service, setService] = useState('AIR');
  const [sdate, setDate] = useState(new Date());


  const drpCompChange = event => {
    setCompanyId(event.target.value);
  };

  const drpChannelChange = (event) => {
    setChannel(event.target.value);
  }
  const drpServiceChange = (event) => {
    setService(event.target.value);
  }
  const dtDateChange = (date) => {
      setDate(date);     
  }


  //Call API using GET Method
  //   React.useEffect(() => {
  //     fetch("/api/getdata")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));  
  //   }, []);

  //Call API using POST Method
  //var body={"noOfMonts": 6 , "bookingTypes": 'Tickets', "companyId": compid };  
  //  const postRequest= React.useCallback(() => {   
  //     fetch("/api/getgraphdata", 
  //     {method: 'POST',
  //     headers: { 'Content-Type': 'application/json',},
  //     body: JSON.stringify(body),     
  // }) 
  //     .then((res) => res.json())
  //     .then((data) => setData(data));              
  // }, []); 

  function fnGraphsData() {   
    fnTodaysBookings();
    //fnAvgBookingData();
    //fnAvgTicketData();
    fnSupplierUses();
    fnSupplierLTB();
    fnTopSearchedSectors();   
    //setTimeout(fnGraphsData, 180000);  
  }

  //function yourFunction(){
   // fnTodaysBookings();    
  //  fnSupplierUses();
 //   fnSupplierLTB();
 //   fnTopSearchedSectors();  
 //   setTimeout(yourFunction, 180000);
//}

  function fnTodaysBookings() {
    fetch("http://localhost:3001/api/gettodaysbookings", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "searchdate": sdate.toLocaleDateString(),"service": service, "channel": channel, "companyId": compid })
    })
      .then((res) => res.json())
      .then((todaysbookingsdata) => setTodaysBookingsData(todaysbookingsdata));     
      //setTimeout(fnTodaysBookings, 100000);
  }

  function fnAvgBookingData() {
    fetch("http://localhost:3001/api/getavgbookingTicketingdata", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "noOfMonts": 6, "bookingTypes": 'Bookings', "companyId": compid })
    })
      .then((res) => res.json())
      .then((avgbookingsdata) => setAvgBookingsData(avgbookingsdata));
  }

  function fnAvgTicketData() {
    fetch("http://localhost:3001/api/getavgbookingTicketingdata", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "noOfMonts": 6, "bookingTypes": 'Tickets', "companyId": compid })
    })
      .then((res) => res.json())
      .then((avgticketsdata) => setAvgTicketsData(avgticketsdata));
  }
  
  function fnSupplierUses() {
    fetch("http://localhost:3001/api/getsupplieruses", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "searchdate": sdate.toLocaleDateString(),"service": service, "channel": channel, "companyId": compid })
    })
      .then((res) => res.json())
      .then((supplierusesdata) => setSupplierUsesData(supplierusesdata));

  }
  function fnSupplierLTB() {
    fetch("http://localhost:3001/api/getsupplierltb", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "searchdate": sdate.toLocaleDateString(),"service": service, "channel": channel, "companyId": compid })
    })
      .then((res) => res.json())
      .then((supplierltbdata) => setSupplierLTBData(supplierltbdata));

  }
  function fnTopSearchedSectors() {
    fetch("http://localhost:3001/api/gettopsearchedsectors", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "searchdate": sdate.toLocaleDateString(),"service": service, "channel": channel, "companyId": compid })
    })
      .then((res) => res.json())
      .then((topsearchedsectorsdata) => setTopSearchedSectorsData(topsearchedsectorsdata));

  }
  return (
    <div className="linechar t">
      <div>
        {/* <input type="radio" value="YTH" name="rbcompany" id="YTH" checked={compid === 'YTH'} onChange={handleChange}/> YTH
            <input type="radio" value="FTI" name="rbcompany" id="FTI"  checked={compid === 'FTI'} onChange={handleChange}/> FTI
            <input type="radio" value="WTT" name="rbcompany" id="WTT"  checked={compid === 'WTT'} onChange={handleChange}/> WTT
            <input type="radio" value="SYT" name="rbcompany" id="SYT"  checked={compid === 'SYT'} onChange={handleChange}/> SYT
            <input type="radio" value="FTN" name="rbcompany" id="FTN"  checked={compid === 'FTN'} onChange={handleChange}/> FTN
             */}

        <table>
          <tr>
            <td>Select Search Parameters:</td>
            <td>
              <div className="form-group">
                <DatePicker
                  selected={sdate}
                  onChange={dtDateChange}
                  name="startDate"
                  dateFormat="MM/dd/yyyy"
                />                
              </div>
            </td>
            <td>
              <select onChange={drpCompChange} id="drpcompany">
                <option value="FTI">FTI Demo</option>
                <option value="YTH">Yathir International</option>
                <option value="WTT">World Tourism & Travel</option>
                <option value="SYT">Haboob Travel</option>
                <option value="FTN">FCM Kenya</option>
              </select>
            </td>
            <td>
              <select onChange={drpChannelChange} id="drpchannel">
                <option value="B2C">B2C</option>
                <option value="B2B">B2B</option>
                <option value="RTL">Retail</option>
                <option value="CORP">Corporate</option>
              </select>
            </td>
            <td>
              <select onChange={drpServiceChange} id="drpService">
                <option value="AIR">Flight</option>
                <option value="HTL">Hotel</option>
                <option value="TRF">Transfer</option>
                <option value="SSG">Sightseeing</option>
                <option value="PKG">Package</option>
                <option value="VIS">VISA</option>
                <option value="INS">Insurance</option>
                <option value="CRU">Cruise</option>
                <option value="OTH">Other Service</option>

              </select>
            </td>


            <td><button onClick={fnGraphsData} type="submit" class="btn">Search</button> </td>
          </tr>
        </table>

        <table>
          <tr>      
          <td> {!todaysbookingsdata ? "" : <Bar data={todaysbookingsdata} />}</td>      
            <td> {!avgbookingsdata ? "" : <Bar data={avgbookingsdata} />}</td>
            <td> {!avgticketsdata ? "" : <Bar data={avgticketsdata} />}</td>
            <td> {!supplierusesdata ? "" : <Bar data={supplierusesdata} />}</td>
            <td> {!supplierltbdata ? "" : <Line data={supplierltbdata} />}</td>
            <td> {!topsearchedsectorsdata ? "" : <Line data={topsearchedsectorsdata} />}</td>
            
          </tr>
        </table>
      </div>      
      <table>
        <tr>
         
        </tr>
      </table>
    </div>

  );

};
export default Dashboard;
