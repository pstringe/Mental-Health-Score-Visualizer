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
                margin={{ top: 50, right: 90, bottom: 70, left: 50 }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 20,
                    legend: 'Timestamp',
                    legendOffset: 60,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Score',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'row',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }]
                }
                />
        </Box>
    );
}
 
export default LineGraph;