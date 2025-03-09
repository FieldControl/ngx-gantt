import { TemplateRef, EventEmitter, OnInit, NgZone } from '@angular/core';
import { GanttGroupInternal, GanttItemInternal, GanttBarClickEvent, GanttLineClickEvent } from '../../class';
import { GanttUpper } from '../../gantt-upper';
import { NgxGanttRootComponent } from './../../root.component';
import { GanttDomService } from '../../gantt-dom.service';
import * as i0 from "@angular/core";
export declare class GanttMainComponent implements OnInit {
    ganttUpper: GanttUpper;
    dom: GanttDomService;
    protected ngZone: NgZone;
    viewportItems: (GanttGroupInternal | GanttItemInternal)[];
    flatItems: (GanttGroupInternal | GanttItemInternal)[];
    groupHeaderTemplate: TemplateRef<any>;
    itemTemplate: TemplateRef<any>;
    barTemplate: TemplateRef<any>;
    rangeTemplate: TemplateRef<any>;
    baselineTemplate: TemplateRef<any>;
    ganttRoot: NgxGanttRootComponent;
    quickTimeFocus: boolean;
    barClick: EventEmitter<GanttBarClickEvent<unknown>>;
    lineClick: EventEmitter<GanttLineClickEvent<unknown>>;
    ganttMainClass: boolean;
    private unsubscribe$;
    constructor(ganttUpper: GanttUpper, dom: GanttDomService, ngZone: NgZone);
    ngOnInit(): void;
    trackBy(index: number, item: GanttGroupInternal | GanttItemInternal): string | number;
    private setupResize;
    quickTime(item: GanttItemInternal, type: 'left' | 'right'): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GanttMainComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GanttMainComponent, "gantt-main", never, { "viewportItems": { "alias": "viewportItems"; "required": false; }; "flatItems": { "alias": "flatItems"; "required": false; }; "groupHeaderTemplate": { "alias": "groupHeaderTemplate"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "barTemplate": { "alias": "barTemplate"; "required": false; }; "rangeTemplate": { "alias": "rangeTemplate"; "required": false; }; "baselineTemplate": { "alias": "baselineTemplate"; "required": false; }; "ganttRoot": { "alias": "ganttRoot"; "required": false; }; "quickTimeFocus": { "alias": "quickTimeFocus"; "required": false; }; }, { "barClick": "barClick"; "lineClick": "lineClick"; }, never, never, true, never>;
}
