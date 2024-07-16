/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {

	const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph', 'core/image' ];
    const TEMPLATE_PARAGRAPHS = [ 'Texting','Texting2'  ];
    const MC_TEMPLATE = [
        [ 'core/heading', { level: 2, placeholder: 'Heading...' } ],
        [ 'core/paragraph', { placeholder: TEMPLATE_PARAGRAPHS[0] } ],
        [ 'core/heading', { level: 4, placeholder: 'Sub-heading...' } ],
        [ 'core/paragraph', { placeholder: TEMPLATE_PARAGRAPHS[1] } ],
    ];

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowdBlocks={ALLOWED_BLOCKS}
				template={MC_TEMPLATE}
			/>
		</div>
	);
}
