import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/dashboardSlice";

export default function AddWidgetComponent() {

  const dispatch = useDispatch();
  const handleAddWidget = () => {
    dispatch(toggleSidebar());
  }
  return (
    <div className="border-2 border-gray-400 rounded-md p-2
     text-gray-500 font-semibold cursor-pointer
      hover:text-gray-700 hover:border-gray-500"
      onClick={handleAddWidget}
      >
      + Add Widget
    </div>
  );
}
