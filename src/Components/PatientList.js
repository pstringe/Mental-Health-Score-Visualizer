import { 
    ListItem,
    List,
    Divider,
    ListItemText
 } from "@material-ui/core";
const PatientList = ({patients}) => {
    return (
    <List component="nav">
        {patients.map((patient) => {
            return (
                <>
                    <ListItem button>
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