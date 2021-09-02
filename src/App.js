import { 
  Grid,
  Box,
  Paper,
  Container
} from '@material-ui/core';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { 
  useEffect, 
  useState
} from 'react'
import '@fontsource/roboto';
import PatientDisplay from './Components/PatientDisplay';
import PatientList from './Components/PatientList';
import Header from './Components/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6d9147',
    },
    secondary: {
      main: '#278c79',
    },

  },
  typography: {
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 18,
      fontWeight: 'bold' 
    },
    h3: {
      fontSize: '1 rem',
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100vh'
  },
  main: {
    padding: theme.spacing(2)
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

  /*
  ** Filter visit data acording to selected patient
  */

  useEffect(() => {
    const data = visitHistory?.filter((visit) => {
      return visit["Patient Name"] === selectedPatient;
    });
    setPatientData(data);
  }, [selectedPatient, visitHistory])
  
  /*
  ** Click handler for items in patient menu
  */

  const selectPatient = (patient) => {
    setSelectedPatient(patient);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className={`App ${classes.root}`}>
        <Header/>
        <Container>
        <Paper className={classes.main}>
          <Grid container direction='row'>
            <Grid item xs={12} sm={3}>
              <PatientList patients={patientList} selectPatient={selectPatient}/>
            </Grid>
            <Grid item xs={12} sm={9}>
              <PatientDisplay patient={selectedPatient} visits={patientData}/>
            </Grid>
          </Grid>
        </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
