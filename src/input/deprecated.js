import { useBlockProps } from "@wordpress/block-editor";

const v1 = {
	save() {
		return (
			<p {...useBlockProps.save()}>Input – hello from the saved content!</p>
		);
	},
};

export default [v1];
