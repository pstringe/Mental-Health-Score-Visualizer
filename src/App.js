import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid,
  Box
} from '@material-ui/core';
import './App.css';
import PatientDisplay from './Components/PatientDisplay';
import PatientList from './Components/PatientList';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { 
  useEffect, 
  useState
} from 'react'

import '@fontsource/roboto';

function App() {
  const requestPatientList = "http://localhost:5000/patients";
  const requestVisitHistory = "http://localhost:5000/history";

  const [patientList, setPatientList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [patientData, setPatientData] = useState([]);
  const [visitHistory, setVisitHistory] = useState([]);

  useEffect(() => {
    
    /*
    ** retrieve patient names
    */

    fetch(requestPatientList)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setPatientList(data);
    });

    /*
    ** retrieve patient data
    */

    fetch(requestVisitHistory)
    .then(response => response.json())
    .then(data => {
      setVisitHistory(data);
    });
  }, [])

  useEffect(() => {
    const data = visitHistory?.filter((visit) => {
      return visit["Patient Name"] === selectedPatient;
    });
    console.log('patient data', data)
    setPatientData(data);
  }, [selectedPatient, visitHistory])
  
  const selectPatient = (patient) => {
    console.log('select', patient);
    setSelectedPatient(patient);
  }

  return (
    <Box height={1} className="App">
      <Header/>
      <Grid container direction='row'>
        <Grid item xs={3}>
          <PatientList patients={patientList} selectPatient={selectPatient}/>
        </Grid>
        <Grid item xs={9}>
          <PatientDisplay patient={selectedPatient} visits={patientData}/>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  );
}

export default App;
