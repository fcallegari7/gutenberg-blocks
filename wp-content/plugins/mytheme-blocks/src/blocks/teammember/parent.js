import { registerBlockType, createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls } from "@wordpress/editor";
import { PanelBody, RangeControl } from "@wordpress/components";

const attributes = {
    columns: {
        type: 'number',
        default: 2
    }
}

registerBlockType('mytheme-blocks/teammembers', {
    title: __('Team Members', 'mytheme-blocks'),
    description: __('Block showing Team Members', 'mytheme-blocks'),
    icon: 'grid-view',
    category: 'mytheme-category',
    supports: {
        html: false,
        align: ['wide', 'full']
    },
    transforms: {
        from: [
            {
                type: 'block',
                blocks: ['core/gallery'],
                transform: ({columns, images}) => {
                    let inner = images.map(({alt, id, url}) => createBlock('mytheme-blocks/teammember', {alt, id, url}));
                    return createBlock('mytheme-blocks/teammembers', {
                        columns: columns
                    }, inner)
                }
            },
            {
                type: 'block',
                blocks: ['core/image'],
                isMultiBlock: true,
                transform: (attributes) => {
                    let inner = attributes.map(({alt, id, url}) => createBlock('mytheme-blocks/teammember', {alt, id, url}));
                    return createBlock('mytheme-blocks/teammembers', {
                        columns: attributes.length
                    }, inner)
                }
            }
        ]
    },
    keywords: [ __('team', 'mytheme-blocks'), __('member', 'mytheme-blocks'), __('person', 'mytheme-blocks')],
    attributes,
    edit({className, attributes, setAttributes}) {
        const { columns } = attributes;
        return (
            <div className={`${className} has-${columns}-columns`}>
                <InspectorControls>
                    <PanelBody>
                        <RangeControl 
                            label={ __('Columns', 'mytheme-blocks') }
                            value={ columns }
                            onChange={(columns) => setAttributes({columns})}
                            min={1}
                            max={6}
                        />
                    </PanelBody>
                </InspectorControls>
                <InnerBlocks 
                    allowedBlocks={ ['mytheme-blocks/teammember'] }
                    template={[
                        ['mytheme-blocks/teammember'],
                        ['mytheme-blocks/teammember']
                    ]}
                />
            </div>
        )
    },
    save( {attributes }) {
        const { columns } = attributes;
        return (
            <div className={`has-${columns}-columns`}>
                <InnerBlocks.Content />
            </div>
        )
    }
})