import './styles.editor.scss';
import { registerBlockType } from '@wordpress/blocks'; 
import { __ } from '@wordpress/i18n';
import { RichText, getColorClassName } from "@wordpress/editor";
import Edit from './edit';
import classnames from 'classnames';

const attributes = {
    content: {
        type: 'string',
        source: 'html',
        selector: 'h4'
    },
    alignment: {
        type: 'string'
    },
    backgroundColor: {
        type: 'string'
    },
    textColor: {
        type: 'string'
    },
    customBackgroundColor: {
        type: 'string'
    },
    customTextColor: {
        type: 'string'
    },
    shadow: {
        type: 'boolean',
        default: false
    },
    shadowOpacity: {
        type: 'number',
        default: 0.3
    }
}

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
    attributes,
    deprecated: [
        {
            attributes: {
                ...attributes,
                content: {
                    type: 'string',
                    source: 'html',
                    selector: 'p'
                } 
            },
            save: ({ attributes }) => {
                const { content, alignment, backgroundColor, textColor, customBackgroundColor, customTextColor, shadow, shadowOpacity } = attributes
                const backgroundClass = getColorClassName('background-color', backgroundColor);
                const textClass = getColorClassName('color', textColor);
                const classes = classnames({
                    [backgroundClass]: backgroundClass,
                    [textClass]: textClass,
                    'has-shadow': shadow,
                    [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
                })
                return <RichText.Content
                        tagName="h4"
                        className={ classes }
                        value={ content }
                        style={ {
                            textAlign: alignment, 
                            backgroundColor: backgroundClass ? undefined : customBackgroundColor, 
                            color: textColor ? undefined : customTextColor
                        } }
                />
            }
        }
    ],
    edit: Edit,
    save: ({ attributes }) => {
        const { content, alignment, backgroundColor, textColor, customBackgroundColor, customTextColor, shadow, shadowOpacity } = attributes
        const backgroundClass = getColorClassName('background-color', backgroundColor);
        const textClass = getColorClassName('color', textColor);
        const classes = classnames({
            [backgroundClass]: backgroundClass,
            [textClass]: textClass,
            'has-shadow': shadow,
            [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
        })
        return <RichText.Content
                tagName="h4"
                className={ classes }
                value={ content }
                style={ {
                    textAlign: alignment, 
                    backgroundColor: backgroundClass ? undefined : customBackgroundColor, 
                    color: textColor ? undefined : customTextColor
                } }
        />
    }
});