import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import './App.css';
import PatientDisplay from './Components/PatientDisply';
import PatientList from './Components/PatientList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { 
  useEffect, 
  useState
} from 'react'

import '@fontsource/roboto';

function App() {
  const request = "http://localhost:5000/patients";
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    fetch(request)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setPatientList(data);
    });
  }, [])
  
 

  return (
    <>
      <Header/>
      <Grid className="App">
        <PatientList patients={patientList}/>
        <PatientDisplay/>
      </Grid>
      <Footer/>
    </>
  );
}

export default App;
