import { 
    Box,
    Typography
} from "@material-ui/core";
import LineGraph from "./LineGraph";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    graph: {
        width: '100%',
        height: '100%'
    },
    toolbar: {
        padding: theme.spacing(1),
        margin: theme.spacing(2)
    },
    empty: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

/*
** This component takes in the name of a patient and their visit history and displays
** a graph of their data as
*/

const PatientDisplay = ({patient, visits}) => {
    const classes = useStyles();
    console.log('visits', visits);
    return ( 
        <Box className={classes.root} width={1} height={700}>
            {visits?.length ? 
                <>
                    <Box>
                        <Typography variant='caption'>Patient Name: {patient}</Typography>
                    </Box>
                    <LineGraph className={classes.graph} data={visits}/>
                </>:
                <Box className={classes.empty}>
                    <Typography variant='h1'>Please select a patient from the menu to view their history</Typography>
                </Box>
            }

        </Box>
    );
}
 
export default PatientDisplay;