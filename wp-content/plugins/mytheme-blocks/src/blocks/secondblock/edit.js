import { Component } from "@wordpress/element";
import { __ } from '@wordpress/i18n';
import { Toolbar, DropdownMenu } from "@wordpress/components";
import { RichText, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings } from "@wordpress/editor";


class Edit extends Component {
    onChangeContent = (content) => {
        this.props.setAttributes({content});
    }
    onChangeAlignment = (alignment) => {
        this.props.setAttributes({alignment});
    }
    onChangeBackgroundColor = (backgroundColor) => {
        this.props.setAttributes({backgroundColor});
    }
    onChangeTextColor = (textColor) => {
        this.props.setAttributes({textColor});
    }
    render() {
        const {className, attributes} = this.props;
        const { content, alignment, backgroundColor, textColor } = attributes;
        return (
            <>
            <InspectorControls>
                <PanelColorSettings 
                    title={ __('Panel 2', 'mytheme-blocks')}
                    colorSettings={[
                        {
                            value: backgroundColor,
                            onChange: this.onChangeBackgroundColor,
                            label: __('Background Color', 'mytheme-blocks')
                        },
                        {
                            value: textColor,
                            onChange: this.onChangeTextColor,
                            label: __('Text Color', 'mytheme-blocks')
                        }
                    ]}
                />

            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar 
                    value={ alignment }
                    onChange={ this.onChangeAlignment }
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
                onChange={ this.onChangeContent }
                value={ content }
                formattingControls={['bold']}
                style={ {textAlign: alignment, backgroundColor: backgroundColor, color: textColor} }
            />
            </>
        )
    }
}

export default Edit;