
import DoughnutChart from './Charts/DoughnutChart';
import { chartTypeMapping } from '../types/types';
import BarChart from './Charts/BarChart';
import { MayHaveLabel } from '@nivo/pie';
import { BarDatum } from '@nivo/bar';

export default function WidgetWrapper({categoryId,data}:{categoryId:string,data:MayHaveLabel[] | BarDatum[]}) {

  const renderChart = (categoryId:string, data: BarDatum[] | MayHaveLabel[]  ) => {
    const chartType = chartTypeMapping[categoryId] && data.length > 0 ? chartTypeMapping[categoryId] :'defaultChartType'; 

    console.log(chartType,categoryId);
    switch (chartType) {
      case 'doughnut':
        return <DoughnutChart data={data} />;
      case 'bar':
        return <BarChart data={data} />
      default:
        return <div className='flex items-center justify-center flex-1 text-gray-600'>
            No Graph data available!
            </div>;
    }
  };

  return (
      renderChart(categoryId,data)
  )
}
