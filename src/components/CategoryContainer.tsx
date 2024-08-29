import { TCategory } from '../types/types'
import AddWidgetComponent from './AddWidgetComponent'
import WidgetContainer from './Widget'



export default function CategoryContainer({category}: {category:TCategory}) {
  const visibleWidgets = category.widgets.filter(widget => widget.visible);

  if (visibleWidgets.length === 0) return null;

  return (
    <div className='flex flex-col bg-[#f0f0f5] p-2 py-4 rounded-lg'>
      <h1 className="text-lg font-semibold mb-4">{category.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-2 overflow-x-scroll">
        {visibleWidgets.map((widget) => (
          <WidgetContainer key={widget.id} widget={widget} categoryId={category.id!} />
        ))}
        <div className="bg-white/70 p-4 rounded-md shadow relative h-72 flex justify-center items-center">
          <AddWidgetComponent/>
        </div>
      </div>
    </div>
  )
}
