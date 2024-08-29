import { useSelector } from 'react-redux'
import Header from './Header'
import { RootState } from '../store/store'
import CategoryContainer from './CategoryContainer';
import Sidebar from './Sidebar';

export default function DashBoard() {

  const categories = useSelector((state: RootState) => state.dashboard.category);

  return (
    <div className='xl:max-w-full min-h-screen container  mx-auto p-4 bg-slate-300'>
      <Header />
      <div className="mx-6 flex flex-col gap-4">
        {categories.map((category) => (
          <CategoryContainer key={category.id} category={category} />
        ))}
      </div>
        <Sidebar/>
    </div>
  )
}
