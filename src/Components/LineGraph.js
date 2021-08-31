import { Box } from "@material-ui/core"
import { ResponsiveLine } from '@nivo/line'

const LineGraph = ({data}) => {
    const gad7Data = data.map((point) => {
        return {
            x: point["Timestamp"],
            y: point["GAD-7 Score"],
        }
    });

    const GAD7 = [{
        id: 'GAD-7',
        data: gad7Data 
    }]

    console.log('GAD-7', GAD7);
    return ( 
        <Box className='graph' height={1} width={1}>
            <ResponsiveLine data={GAD7} />
        </Box>
    );
}
 
export default LineGraph;