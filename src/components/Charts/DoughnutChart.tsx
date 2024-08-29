import { MayHaveLabel, ResponsivePie } from "@nivo/pie";

export default function DoughnutChart({data}: {data: MayHaveLabel[]}) {
  
  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain:{
            line:  {
              stroke: 'gray'
            }
          },
          legend: {
            text:{
              fill: 'gray'
            }
          },
          ticks:{
            line:{
              stroke: 'gray',
              strokeWidth: 1
            },
            text: {
              fill: 'gray'
            }
          }
        },
        tooltip:{
          container:{
            backgroundColor: 'gray'
          }
        }
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 0 }}
      innerRadius={0.5}
      startAngle={-100}
      padAngle={0}
      cornerRadius={1}
      activeOuterRadiusOffset={10}
      borderWidth={2}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',   
                  0.2
              ]
          ]
      }}
      enableArcLabels={false}
      enableArcLinkLabels={true}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor='#333333'
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  2
              ]
          ]
      }}
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'ruby'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'c'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'go'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'python'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'scala'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'lisp'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'elixir'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'javascript'
              },
              id: 'lines'
          }
      ]}
      legends={[
          {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 30,
              translateY: 10,
              itemsSpacing: 10,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#000',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 20,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
    ]}
/>
  )
}
