import {inject, Container} from 'aurelia-dependency-injection';
import {customElement, bindable} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}drop-down-tree`)
@generateBindables('kendoDropDownTree')
@inject(Element, WidgetBase, Container)
export class DropDownTree {
  @bindable kNoValueBinding = false;
  @bindable kEnabled;
  @bindable kReadOnly;

  constructor(element, widgetBase, container) {
    this.element = element;
    this.widgetBase = widgetBase
      .control('kendoDropDownTree')
      .useRootElement(this.element)
      .linkViewModel(this)
      .useContainer(container)
      .bindToKendo('kEnabled', 'enable')
      .bindToKendo('kReadOnly', 'readonly');
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoValueBinding) {
      this.widgetBase.useValueBinding();
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    let selectNodes = getSelectNode(this.element);
    this.widgetBase.useElement(selectNodes.length > 0 ? selectNodes[0] : this.element);

    let templates = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}template`);
    this.widgetBase.useTemplates(this, 'kendoDropDownTree', templates);

    this.kWidget = this.widgetBase.recreate();
  }

  propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}

function getSelectNode(element) {
  return element.querySelectorAll('select');
}
