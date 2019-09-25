import './style.editor.scss';
import './parent';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from "./edit";
import { RichText } from "@wordpress/editor";

const attributes = {
    title: {
        type: 'string',
        source: 'html',
        selector: 'h4'
    },
    info: {
        type: 'string',
        source: 'html',
        selector: 'p'
    }
}

registerBlockType('mytheme-blocks/teammember', {
    title: __( 'Team Member', 'mytheme-blocks'),
    description: __( 'Block showing a Team Member', 'mytheme-blocks'),
    icon: 'admin-users',
    parent: ['mytheme-blocks/teammembers'],
    category: 'mytheme-category',
    keywords: [ __('team','mytheme-blocks'), __('member','mytheme-blocks'), __('person','mytheme-blocks')],
    attributes,
    save: ( {attributes} ) => {
        const { title, info } = attributes;
        return (
            <div>
                {title && 
                    <RichText.Content
                        className={'wp-block-mytheme-blocks-teammember__title'}
                        tagName="h4"
                        value={title}
                    />
                }
                {info &&
                    <RichText.Content
                        className={'wp-block-mytheme-blocks-teammember__info'}
                        tagName="p"
                        value={info}
                    />
                }
            </div>
        )
    },
    edit
});