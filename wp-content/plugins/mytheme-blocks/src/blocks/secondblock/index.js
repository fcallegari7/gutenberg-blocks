import './styles.editor.scss';
import { registerBlockType } from '@wordpress/blocks'; 
import { __ } from '@wordpress/i18n';
import { RichText, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings } from "@wordpress/editor";
import { Toolbar, DropdownMenu } from "@wordpress/components";

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
    edit: ({className, attributes, setAttributes}) => {
        // return <p className={className}>Editor</p>;
        const { content, alignment, backgroundColor, textColor } = attributes;
        const onChangeContent = (content) => {
            setAttributes({content});
        }
        const onChangeAlignment = (alignment) => {
            setAttributes({alignment});
        }
        const onChangeBackgroundColor = (backgroundColor) => {
            setAttributes({backgroundColor});
        }
        const onChangeTextColor = (textColor) => {
            setAttributes({textColor});
        }
        return (
            <>
            <InspectorControls>
                <PanelColorSettings 
                    title={ __('Panel 2', 'mytheme-blocks')}
                    colorSettings={[
                        {
                            value: backgroundColor,
                            onChange: onChangeBackgroundColor,
                            label: __('Background Color', 'mytheme-blocks')
                        },
                        {
                            value: textColor,
                            onChange: onChangeTextColor,
                            label: __('Text Color', 'mytheme-blocks')
                        }
                    ]}
                />

            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar 
                    value={ alignment }
                    onChange={ onChangeAlignment }
                />
                <Toolbar
                    controls={[
                            [{
                                icon: 'wordpress',
                                title: __('test', 'mytheme-blocks'),
                                onClick: () => {alert('hello')},
                                isActive: false
                            }],
                            [{
                                icon: 'wordpress',
                                title: __('test', 'mytheme-blocks'),
                                onClick: () => {alert('hello')},
                                isActive: false
                            }]
                        ]}
                ></Toolbar>
                {(content && content.length > 0) && 
                <Toolbar>
                    <DropdownMenu 
                        icon= 'editor-table'
                        label= { __('test', 'mytheme-blocks')}
                        controls={[
                            [{
                                icon: 'wordpress',
                                title: __('test', 'mytheme-blocks'),
                                onClick: () => {alert('hello')},
                                isActive: false
                            }],
                            [{
                                icon: 'wordpress',
                                title: __('test', 'mytheme-blocks'),
                                onClick: () => {alert('hello')},
                                isActive: false
                            }]
                        ]}
                    />
                </Toolbar>
                }
            </BlockControls>
            <RichText 
                tagName="p"
                className={className}
                onChange={ onChangeContent }
                value={ content }
                formattingControls={['bold']}
                style={ {textAlign: alignment, backgroundColor: backgroundColor, color: textColor} }
            />
            </>
        )
    },
    save: ({ attributes, alignment, backgroundColor, textColor }) => {
        const { content } = attributes
        return <RichText.Content
                tagName="p"
                value={ content }
                style={ {textAlign: alignment, backgroundColor: backgroundColor, color: textColor} }
        />
    }
});