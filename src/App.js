import React from 'react';
import './App.css';
import CovidData from './components/EtawahCovidData';
import Navbarm from './components/NavBar';
import UpCovidData from './components/UpCovidData';
import Footer from './components/Footer';
import IndiaCovidData from './components/IndiaCovidData';
import Graph from './components/Graph';


function App() {
  return (
    <div>
        <Navbarm />
      <div>
        <CovidData />
        <Graph />
        <UpCovidData />
        <IndiaCovidData />
      </div>
      <div style={{margin: "1%"}}>
        This data is fetched from <a href="https://api.covid19india.org/">Api of covid19india.org</a>.
        There may be some difference in the numbers as it may not be updated at the moment.
      </div>
      <Footer />
    </div>
  );
}

export default App;
