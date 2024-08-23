/**DOCU:
 * - source: https://learn.svelte.dev/tutorial/key-blocks
 */
export const typewriter = (node: HTMLParagraphElement, { speed = 1 }: { speed: number }) => {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const duration = text!.length / (speed * 0.001);

	return {
		duration,
		tick: (t: number) => {
			const i = Math.trunc(text!.length * t);
			node.textContent = text!.slice(0, i);
		}
	};
};
