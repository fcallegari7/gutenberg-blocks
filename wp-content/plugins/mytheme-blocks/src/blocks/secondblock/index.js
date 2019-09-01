import './styles.editor.scss';
import { registerBlockType } from '@wordpress/blocks'; 
import { __ } from '@wordpress/i18n';
import { RichText } from "@wordpress/editor";
import Edit from './edit';

registerBlockType('mytheme-blocks/secondblock', {
    title: __('Second Block', 'mytheme-blocks'),
    description: __('Our second block', 'mytheme-blocks'),
    category: 'mytheme-category',
    icon: 'admin-network',
    keywords: [__('photo', 'mytheme-blocks'),__('image', 'mytheme-blocks')],
    styles: [
        {
            name: 'rounded',
            label: __('Rounded', 'mytheme-blocks'),
            isDefault: true
        },
        {
            name: 'outlined',
            label: __('Outlined', 'mytheme-blocks')
        },
        {
            name: 'squared',
            label: __('Squared', 'mytheme-blocks')
        }
    ],
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        alignment: {
            type: 'string'
        },
        backgroundColor: {
            type: 'string'
        },
        textColor: {
            type: 'string'
        }
    },
    edit: Edit,
    save: ({ attributes }) => {
        const { content, alignment, backgroundColor, textColor } = attributes
        return <RichText.Content
                tagName="p"
                value={ content }
                style={ {textAlign: alignment, backgroundColor: backgroundColor, color: textColor} }
        />
    }
});