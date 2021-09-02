import { Container } from '@material-ui/core';
import { 
  Grid,
  Box
} from '@material-ui/core';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
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

const theme = createTheme({
  palette: {
    primary: {
      main: '#6d9147',
    },
    secondary: {
      main: '#278c79',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100vh'
  }
}));

function App() {
  const requestPatientList = "http://localhost:5000/patients";
  const requestVisitHistory = "http://localhost:5000/history";
  const [patientList, setPatientList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [patientData, setPatientData] = useState([]);
  const [visitHistory, setVisitHistory] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    
    /*
    ** retrieve patient names
    */

    fetch(requestPatientList)
    .then(response => response.json())
    .then(data => {
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
    setPatientData(data);
  }, [selectedPatient, visitHistory])
  
  const selectPatient = (patient) => {
    console.log('select', patient);
    setSelectedPatient(patient);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className={`App ${classes.root}`}>
        <Header/>
        <Container>
        <Grid container direction='row'>
          <Grid item xs={3}>
            <PatientList patients={patientList} selectPatient={selectPatient}/>
          </Grid>
          <Grid item xs={9}>
            <PatientDisplay patient={selectedPatient} visits={patientData}/>
          </Grid>
        </Grid>
        </Container>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
