import { BarDatum } from "@nivo/bar";
import { MayHaveLabel } from "@nivo/pie";

export type TWidgets = {
  id: string,
  name: string,
  type: string,
  data: MayHaveLabel[] | BarDatum[];
  visible: boolean;
}

export type TCategory = {
  id?: string,
  name: string,
  widgets: TWidgets[],
}

export const chartTypeMapping:Record<string,string | undefined> = {
  'cpsmExecutiveDashboard': 'doughnut',
  'cwppdashboard': undefined,
  'registryScan': 'bar',
};