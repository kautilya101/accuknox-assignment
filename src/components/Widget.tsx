import { TWidgets } from '../types/types'
import WidgetWrapper from './WidgetWrapper'

export default function WidgetContainer({widget,categoryId}: {widget:TWidgets,categoryId:string}) {

  return (
    <div className='bg-white p-2 rounded-md shadow-md relative h-72 flex flex-col'>
      <h2 className='font-semibold'>{widget.type}</h2>
      <div className="flex flex-1 w-full">
      { 
        <WidgetWrapper categoryId={categoryId} data={widget.data} />
      }
      </div>
    </div>
  )
}
