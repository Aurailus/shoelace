import Component from '../../components/dropdown/dropdown.component.js';
import { type EventName } from '@lit/react';
import type { SlShowEvent } from '../../events/events.js';
import type { SlAfterShowEvent } from '../../events/events.js';
import type { SlHideEvent } from '../../events/events.js';
import type { SlAfterHideEvent } from '../../events/events.js';
export type { SlShowEvent } from '../../events/events.js';
export type { SlAfterShowEvent } from '../../events/events.js';
export type { SlHideEvent } from '../../events/events.js';
export type { SlAfterHideEvent } from '../../events/events.js';
/**
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://shoelace.style/components/dropdown
 * @status stable
 * @since 2.0
 *
 * @dependency sl-popup
 *
 * @slot - The dropdown's main content.
 * @slot trigger - The dropdown's trigger, usually a `<sl-button>` element.
 *
 * @event sl-show - Emitted when the dropdown opens.
 * @event sl-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event sl-hide - Emitted when the dropdown closes.
 * @event sl-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<sl-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onSlShow: EventName<SlShowEvent>;
    onSlAfterShow: EventName<SlAfterShowEvent>;
    onSlHide: EventName<SlHideEvent>;
    onSlAfterHide: EventName<SlAfterHideEvent>;
}>;
export default reactWrapper;
