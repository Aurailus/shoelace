import {
  tab_styles_default
} from "./chunk.LE3KWASX.js";
import {
  SlIconButton
} from "./chunk.LE4AXB2K.js";
import {
  LocalizeController
} from "./chunk.WLV3FVBR.js";
import {
  watch
} from "./chunk.2FB5TK5H.js";
import {
  component_styles_default
} from "./chunk.TUVJKY7S.js";
import {
  ShoelaceElement
} from "./chunk.TUZSOS6C.js";
import {
  __decorateClass
} from "./chunk.IFDWM6P4.js";

// src/components/tab/tab.component.ts
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { property, query } from "lit/decorators.js";
var id = 0;
var SlTab = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.attrId = ++id;
    this.componentId = `sl-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
    this.tabIndex = -1;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleCloseClick(event) {
    event.stopPropagation();
    this.emit("sl-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    this.tabIndex = -1;
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return html`
      <div
        part="base"
        class=${classMap({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
      >
        <slot></slot>
        ${this.closable ? html`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = [component_styles_default, tab_styles_default];
SlTab.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  query(".tab")
], SlTab.prototype, "tab", 2);
__decorateClass([
  property({ reflect: true })
], SlTab.prototype, "panel", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlTab.prototype, "closable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
__decorateClass([
  watch("active")
], SlTab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], SlTab.prototype, "handleDisabledChange", 1);

export {
  SlTab
};
