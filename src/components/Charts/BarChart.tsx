import { BarDatum, ResponsiveBar } from '@nivo/bar'
import { MayHaveLabel } from '@nivo/pie'
import React from 'react'

export default function BarChart({data}:{data:BarDatum[]}) {



  return (
    <ResponsiveBar
    data={data}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: 'gray'
          },
        },
        legend:{
          text:{
            fill: 'gray'
          }
        },
        ticks:{
          line:{
            stroke: 'gray',
            strokeWidth: 1 
          },
          text:{
            fill: 'gray',
          }
        }
      },
      legends: {
        text: {
          fill: 'gray',
        }
      },
      tooltip:{
        container:{
          backgroundColor: 'gray'
        }
      }
    }}
    keys={[
        'critical',
        'high',
        'moderate',
        'low',
        'informational'
    ]}
    indexBy="Vulenrabilities"
    enableTotals={true}
    margin={{ top: 20, right: 80, bottom: 50, left: 50 }}
    padding={0.6}
    layout='horizontal'
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'top-right',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 150,
            itemsSpacing: 0,
            itemWidth: 80,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
/>
  )
}
