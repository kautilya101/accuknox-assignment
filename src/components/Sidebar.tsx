import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { addWidget, toggleSidebar, toggleWidgetVisibility,removeWidget } from "../store/dashboardSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { category, sidebarOpen } = useSelector(
    (state: RootState) => state.dashboard
  );
  const [selectedCategory, setSelectedCategory] = useState("");
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleToggleWidget = (categoryId: string, widgetId: string) => {
    dispatch(toggleWidgetVisibility({ categoryId, widgetId }));
  };

  const handleAddWidget = () => {
    if (widgetName && selectedCategory) {
      dispatch(
        addWidget({
          categoryId: selectedCategory,
          widget: {
            id: widgetText.toLowerCase(),
            type: widgetName,
            visible: true,
            data: [],
          },
        })
      );
      setSelectedCategory("");
    }
  };

  const handleRemoveWidget = (categoryId:string,widgetId:string) => {
    dispatch(
      removeWidget(
        {
          categoryId: categoryId,
          widgetId: widgetId,
        })
      )
  }

  if (!sidebarOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-1/2 bg-slate-300 shadow-lg p-4 overflow-y-auto">
      <button
        className="absolute top-2 text-lg right-2 text-gray-500 hover:text-red-500"
        onClick={() => dispatch(toggleSidebar())}
      >
        ×
      </button>
      <h2 className="text-xl font-bold mb-4 text-gray-700">Widgets</h2>
      {category.map((category) => (
        <div key={category.id!} className="mb-4 ml-4 text-gray-700">
          <h3 className="font-semibold">{category.name}</h3>
          {category.widgets.map((widget) => (
            <div key={widget.id} className="flex items-center  mx-2">
                <input
                  type="checkbox"
                  checked={widget.visible}
                  onChange={() => handleToggleWidget(category.id!, widget.id)}
                  className="mr-2"
                  />
              <div className="flex items-center justify-between w-full">
                <span>{widget.type}</span>
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={() => handleRemoveWidget(category.id!,widget.id)}
                  >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="ml-4 space-y-2">
        <h3 className="font-semibold">Add New Widget</h3>
        <input
          type="text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          placeholder="Widget Text"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          placeholder="Widget Name"
          className="w-full p-2 border rounded mb-2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="">Select Category</option>
          {category.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddWidget}
          className="w-full bg-slate-600 text-white p-2 rounded"
        >
          Add Widget
        </button>
      </div>
    </div>
  );
}
