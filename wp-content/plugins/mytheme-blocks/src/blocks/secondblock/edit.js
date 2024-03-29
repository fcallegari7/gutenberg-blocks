import { Component } from "@wordpress/element";
import { __ } from '@wordpress/i18n';
import { Toolbar, DropdownMenu, RangeControl, PanelBody } from "@wordpress/components";
import { RichText, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings, withColors, ContrastChecker } from "@wordpress/editor";
import classnames from 'classnames';

class Edit extends Component {
    onChangeContent = (content) => {
        this.props.setAttributes({content});
    }
    onChangeAlignment = (alignment) => {
        this.props.setAttributes({alignment});
    }
    toggleShadow = () => {
        this.props.setAttributes({shadow: !this.props.attributes.shadow});
    }
    onChangeShadowOpacity = (shadowOpacity) => {
        this.props.setAttributes({shadowOpacity});
    }
    render() {
        const {className, attributes, setTextColor, setBackgroundColor, backgroundColor, textColor } = this.props;
        const { content, alignment, shadow, shadowOpacity } = attributes;
        const classes = classnames(className, {
            'has-shadow': shadow,
            [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
        })
        return (
            <>
            <InspectorControls>
                <PanelBody title={ __('Settings', 'mytheme-blocks')}>
                    { shadow && 
                        <RangeControl 
                            label={ __( 'Shadow Opacity', 'mytheme-blocks' )}
                            value={ shadowOpacity }
                            onChange={ this.onChangeShadowOpacity }
                            min={0.1}
                            max={0.4}
                            step={0.1}
                        />
                    }
                </PanelBody>
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
            <BlockControls
                controls={[
                    {
                        icon: 'wordpress',
                        title: __('Shadow', 'mytheme-blocks'),
                        onClick: this.toggleShadow,
                        isActive: shadow
                    }
                ]}>
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
                tagName="h4"
                className={classes}
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