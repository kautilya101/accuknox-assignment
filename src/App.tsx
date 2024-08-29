import DashBoard from './components/DashBoard'
import { Provider } from 'react-redux'
import { store } from './store/store'



function App() {

  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen w-full">
        <DashBoard />
      </div>
    </Provider> 
  )
}

export default App
