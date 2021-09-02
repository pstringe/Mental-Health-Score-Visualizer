import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline'
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant='h1'>Prarie Health</Typography>
            <Typography variant='h3'>Mental Health Score Visualiser</Typography>
        </Box>  
    );
}
 
export default Header;