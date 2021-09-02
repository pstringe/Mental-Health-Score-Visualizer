import { 
    ListItem,
    List,
    Divider,
    ListItemText
 } from "@material-ui/core";
const PatientList = ({patients, selectPatient}) => {
    return (
    <List component="nav">
        {patients.map((patient, idx) => {
            return (
                <div key={idx}>
                    <ListItem button onClick={(e) => selectPatient(patient)}>
                        <ListItemText primary={patient} />
                    </ListItem>
                    <Divider />
                </div>
            );
        })}
        
    </List>
  );
}
 
export default PatientList;