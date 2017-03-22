/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../build/components/header/header-cell-filter.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/common/src/directives/ng_if';
export class Wrapper_DataTableHeaderCellFilterComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DataTableHeaderCellFilterComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  subscription0:any;
  subscription1:any;
  constructor() {
    this._changed = false;
    this.context = new import0.DataTableHeaderCellFilterComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
  }
  check_column(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.column = currValue;
      this._expr_0 = currValue;
    }
  }
  check_allRowsSelected(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.allRowsSelected = currValue;
      this._expr_1 = currValue;
    }
  }
  check_selectionType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.selectionType = currValue;
      this._expr_2 = currValue;
    }
  }
  check_headerHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.headerHeight = currValue;
      this._expr_3 = currValue;
    }
  }
  check_minFilterLength(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.minFilterLength = currValue;
      this._expr_4 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_5:any = this.context.headerHeight;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      view.renderer.setElementStyle(el,'height',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_5) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_5).toString() + 'px')));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.columnCssClasses;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      view.renderer.setElementProperty(el,'className',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.name;
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      view.renderer.setElementAttribute(el,'title',((currVal_7 == null)? (null as any): currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.minWidth;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      view.renderer.setElementStyle(el,'minWidth',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_8) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_8).toString() + 'px')));
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.maxWidth;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      view.renderer.setElementStyle(el,'maxWidth',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_9).toString() + 'px')));
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.context.width;
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      view.renderer.setElementStyle(el,'width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_10) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_10).toString() + 'px')));
      this._expr_10 = currVal_10;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.filter.subscribe(_eventHandler.bind(view,'filter'))); }
    if (emit1) { (this.subscription1 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
  }
}
var renderType_DataTableHeaderCellFilterComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_DataTableHeaderCellFilterComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DataTableHeaderCellFilterComponent>;
  _DataTableHeaderCellFilterComponent_0_3:Wrapper_DataTableHeaderCellFilterComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableHeaderCellFilterComponent_Host0,renderType_DataTableHeaderCellFilterComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable-header-cell-filter',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_DataTableHeaderCellFilterComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableHeaderCellFilterComponent_0_3 = new Wrapper_DataTableHeaderCellFilterComponent();
    this.compView_0.create(this._DataTableHeaderCellFilterComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._DataTableHeaderCellFilterComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableHeaderCellFilterComponent) && (0 === requestNodeIndex))) { return this._DataTableHeaderCellFilterComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DataTableHeaderCellFilterComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._DataTableHeaderCellFilterComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableHeaderCellFilterComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DataTableHeaderCellFilterComponentNgFactory:import9.ComponentFactory<import0.DataTableHeaderCellFilterComponent> = new import9.ComponentFactory<import0.DataTableHeaderCellFilterComponent>('datatable-header-cell-filter',View_DataTableHeaderCellFilterComponent_Host0,import0.DataTableHeaderCellFilterComponent);
const styles_DataTableHeaderCellFilterComponent:any[] = ['.form-control[_ngcontent-%COMP%] {\n      width: 100%\n    }'];
class View_DataTableHeaderCellFilterComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_DataTableHeaderCellFilterComponent1,renderType_DataTableHeaderCellFilterComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',new import3.InlineArray2(2,'class','datatable-header-cell-wrapper'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'span',new import3.InlineArray2(2,'class','datatable-header-cell-label'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n          ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'input',new import3.InlineArray2(2,'class','form-control'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'keyup',(null as any)),this.eventHandler(this.handleEvent_4));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7:any = import3.inlineInterpolate(1,'Filter ',this.parentView.context.name,'...');
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementProperty(this._el_4,'placeholder',currVal_7);
      this._expr_7 = currVal_7;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'keyup')) {
      const pd_sub_0:any = ((<any>this.parentView.context.inputChanged($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_DataTableHeaderCellFilterComponent:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.Emulated,styles_DataTableHeaderCellFilterComponent,{});
export class View_DataTableHeaderCellFilterComponent0 extends import2.AppView<import0.DataTableHeaderCellFilterComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import10.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import11.Wrapper_NgIf;
  _text_4:any;
  _text_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableHeaderCellFilterComponent0,renderType_DataTableHeaderCellFilterComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import10.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import12.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import11.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import13.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:boolean = !this.context.column.headerTemplate;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_DataTableHeaderCellFilterComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
}