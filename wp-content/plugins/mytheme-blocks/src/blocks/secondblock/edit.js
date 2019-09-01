import { Component } from "@wordpress/element";
import { __ } from '@wordpress/i18n';
import { Toolbar, DropdownMenu } from "@wordpress/components";
import { RichText, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings, withColors, ContrastChecker } from "@wordpress/editor";


class Edit extends Component {
    onChangeContent = (content) => {
        this.props.setAttributes({content});
    }
    onChangeAlignment = (alignment) => {
        this.props.setAttributes({alignment});
    }
    render() {
        const {className, attributes, setTextColor, setBackgroundColor, backgroundColor, textColor } = this.props;
        const { content, alignment } = attributes;
        return (
            <>
            <InspectorControls>
                <PanelColorSettings 
                    title={ __('Panel 2', 'mytheme-blocks')}
                    colorSettings={[
                        {
                            value: backgroundColor.color,
                            onChange: setBackgroundColor,
                            label: __('Background Color', 'mytheme-blocks')
                        },
                        {
                            value: textColor.color,
                            onChange: setTextColor,
                            label: __('Text Color', 'mytheme-blocks')
                        }
                    ]}
                >
                    <ContrastChecker 
                        textColor={textColor.color}
                        backgroundColor={backgroundColor.color}
                    />
                </PanelColorSettings>

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
                style={ {textAlign: alignment, backgroundColor: backgroundColor.color, color: textColor.color} }
            />
            </>
        )
    }
}

export default withColors('backgroundColor', {'textColor': 'color'})(Edit);