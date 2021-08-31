import { 
    Box,
    Typography
} from "@material-ui/core";
import { MultilineChartRounded } from "@material-ui/icons";
import LineGraph from "./LineGraph";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        border: '1px solid black'
    },
    graph: {
        width: '100%',
        height: '100%'
    }
})

const PatientDisplay = ({patient, visits}) => {
    const classes = useStyles();
    console.log('visits', visits);
    return ( 
        <Box className={classes.root} width={1} height={600}>
            <Typography variant='caption'>{patient}</Typography>
            {visits?.length && <LineGraph className={classes.graph} data={visits}/>}
        </Box>
    );
}
 
export default PatientDisplay;