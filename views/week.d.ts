import { GanttViewType } from '../class';
import { GanttDatePoint } from '../class/date-point';
import { GanttDate } from '../utils/date';
import { GanttView, GanttViewDate, GanttViewOptions } from './view';
export declare class GanttViewWeek extends GanttView {
    viewType: GanttViewType;
    constructor(start: GanttViewDate, end: GanttViewDate, options?: GanttViewOptions);
    viewStartOf(date: GanttDate): GanttDate;
    viewEndOf(date: GanttDate): GanttDate;
    getPrimaryWidth(): number;
    getDayOccupancyWidth(): number;
    getPrimaryDatePoints(): GanttDatePoint[];
    getSecondaryDatePoints(): GanttDatePoint[];
}
