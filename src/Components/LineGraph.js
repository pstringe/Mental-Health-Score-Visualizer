import { Box } from "@material-ui/core"
import { ResponsiveLine } from '@nivo/line'

const LineGraph = ({data}) => {
    const gad7Data = data.map((point) => {
        return {
            x: point["Timestamp"],
            y: point["GAD-7 Score"],
        }
    });

    const phq9Data = data.map((point) => {
        return {
            x: point["Timestamp"],
            y: point["PHQ-9 Score"],
        }
    });

    const lines = [
        {
            id: 'GAD-7',
            data: gad7Data 
        },
        {
            id: 'PHQ-9',
            data: phq9Data
        }
    ]
    return ( 
        <Box className='graph' height={1} width={1}>
            <ResponsiveLine data={lines}
                            margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
            />
        </Box>
    );
}
 
export default LineGraph;