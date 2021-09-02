import { useState } from 'react'
import { 
    Box,
    Button,
    Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import LineGraph from "./LineGraph";
import DataTable from "./DataTable";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    graph: {
        width: '100%',
        height: '100%'
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
** a graph of their data that can be toggled to show as a table
*/

const PatientDisplay = ({patient, visits}) => {
    const classes = useStyles();
    const [view, setView] = useState(true); //true -> graph, false -> table

    return ( 
        <Box className={classes.root}>
            {visits?.length ? 
                <Box width={1} height={800}>
                    <Box className={classes.toolbar}>
                        <Typography variant='caption'>Patient Name: {patient}</Typography>
                        <Button variant='outlined'
                                color='primary'
                                onClick={() => setView(cur => !cur)}>
                                    {`Show ${view ? 'Table' : 'Graph'}`}
                        </Button>
                    </Box>
                    {view && <LineGraph className={classes.graph} data={visits}/>}
                    {!view && <DataTable className={classes.graph} data={visits}/>}
                </Box>:
                <Box className={classes.empty}>
                    <Typography variant='h1'>Please select a patient from the menu to view their history</Typography>
                </Box>
            }

        </Box>
    );
}
 
export default PatientDisplay;