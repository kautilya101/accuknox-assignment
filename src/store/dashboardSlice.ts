import { createSlice } from '@reduxjs/toolkit';
import { data } from '../data/data';
import { TCategory } from '../types/types';


const initialState = {
  category: <TCategory[]>data,
  sidebarOpen: false
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleWidgetVisibility: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.category.find(c => c.id === categoryId);
      if (category) {
        const widget = category.widgets.find(w => w.id === widgetId);
        if (widget) {
          widget.visible = !widget.visible;
        }
      }
    },
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.category.find(c => c.id === categoryId);
      if (category) {
        category.widgets.push({ ...widget, visible: true });
      }
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    removeWidget: (state,action) => {
      const { categoryId, widgetId } = action.payload;
      console.log(categoryId,widgetId)
      const category = state.category.find(category => category.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
  },
});

export const { toggleWidgetVisibility,toggleSidebar,addWidget,removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;