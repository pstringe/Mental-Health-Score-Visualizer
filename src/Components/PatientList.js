import { 
    ListItem,
    List,
    Divider,
    ListItemText
 } from "@material-ui/core";
const PatientList = ({patients, selectPatient}) => {
    return (
    <List component="nav">
        {patients.map((patient) => {
            return (
                <>
                    <ListItem button onClick={(e) => selectPatient(patient)}>
                        <ListItemText primary={patient} />
                    </ListItem>
                    <Divider />
                </>
            );
        })}
        
    </List>
  );
}
 
export default PatientList;