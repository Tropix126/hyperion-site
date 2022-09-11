import { MDCRipple } from "@material/ripple";
import "@material/ripple/styles.scss";

export interface RippleOptions {
	unbounded: boolean;
}

export default function ripple(node: HTMLElement, options: RippleOptions = { unbounded: false }) {
	const instance = new MDCRipple(node);
	node.classList.add("mdc-ripple-surface");
	instance.unbounded = options.unbounded;

	return {
		update(options: any) {
			instance.unbounded = options.unbounded;
		},
		destroy() {
			instance.destroy();
			node.classList.remove("mdc-ripple-surface");
		}
	};
}
