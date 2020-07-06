import React from 'react';
import './App.css';
import CovidData from './components/EtawahCovidData';
import Navbarm from './components/NavBar';
import UpCovidData from './components/UpCovidData';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbarm />
      <div>
        <CovidData />
        <UpCovidData />
      </div>
      <div style={{margin: "1%"}}>
        This data is fetched from <a href="api.covid19india.org">Api of covid19india.org</a>.
        There may be some difference in the numbers as it may not be updated at the moment.
      </div>
      <Footer />
    </div>
  );
}

export default App;
