import { Typography, Box} from "@material-ui/core"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        padding: theme.spacing(2),
        color: theme.palette.secondary.main,
    },
    divider: {
        backgroundColor: theme.palette.primary.main,
        border:'none',
        height: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.root}>
            <Typography variant='h1'>Prarie Health</Typography>
            <Typography variant='h2'>Mental Health Score Visualiser</Typography>
        </Box>
        <hr className={classes.divider}></hr>
        </>  
    );
}
 
export default Header;