import { 
    ListItem,
    List,
    Divider,
    ListItemText,
    Box,
    Typography
} from "@material-ui/core";
import { useState } from "react";

/*
** This component lists all patients with visit history
*/

const PatientList = ({patients, selectPatient}) => {
    const [selected, setSelected] = useState(-1);

    /*
    ** event handler selects a patient by updating global state and changes the display by updating local state
    */
   
    const select = (e, idx, patient) => {
        setSelected(idx);
        selectPatient(patient);
    }

    return (
        <Box>
            <Typography variant='h2' color='textSecondary'>Patients</Typography>
            <List component="nav">
                {patients.map((patient, idx) => {
                    return (
                        <div key={idx}>
                            <ListItem selected={selected === idx} button onClick={(e) => select(e, idx, patient)}>
                                <ListItemText primary={patient} />
                            </ListItem>
                            <Divider />
                        </div>
                    );
                })}
                
            </List>
        </Box>
  );
}
 
export default PatientList;