import './styles.editor.scss';
import { registerBlockType } from '@wordpress/blocks'; 
import { __ } from '@wordpress/i18n';
import { RichText } from "@wordpress/editor";

registerBlockType('mytheme-blocks/secondblock', {
    title: __('Second Block', 'mytheme-blocks'),
    description: __('Our second block', 'mytheme-blocks'),
    category: 'layout',
    icon: 'admin-network',
    keywords: [__('photo', 'mytheme-blocks'),__('image', 'mytheme-blocks')],
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },
    edit: ({className, attributes, setAttributes}) => {
        // return <p className={className}>Editor</p>;
        const { content } = attributes;
        const onChangeContent = (content) => {
            setAttributes({content});
        }
        return <RichText 
                tagName="p"
                className={className}
                onChange={ onChangeContent }
                value={ content }
                formattingControls={['bold']}
                />
    },
    save: ({ attributes }) => {
        const { content } = attributes
        return <RichText.Content
                tagName="p"
                value={ content }
        />
    }
});