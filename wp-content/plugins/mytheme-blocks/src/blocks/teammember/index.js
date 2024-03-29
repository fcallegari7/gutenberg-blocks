import './style.editor.scss';
import './parent';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from "./edit";
import { RichText } from "@wordpress/editor";
import { Dashicon } from '@wordpress/components';

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
    },
    id: {
        type: 'number'
    },
    alt: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'alt',
        default: ''
    },
    url: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'src',
    },
    social: {
        type: 'array',
        default: [],
        source: 'query',
        selector: '.wp-block-mytheme-blocks-teammember__social ul li',
        query: {
            icon: {
                source: 'attribute',
                attribute: 'data-icon'
            },
            link: {
                source: 'attribute',
                selector: 'a',
                attribute: 'href'
            }
        }
    }
}

registerBlockType('mytheme-blocks/teammember', {
    title: __( 'Team Member', 'mytheme-blocks'),
    description: __( 'Block showing a Team Member', 'mytheme-blocks'),
    icon: 'admin-users',
    parent: ['mytheme-blocks/teammembers'],
    supports: {
        reusable: false,
        html: false
    },
    category: 'mytheme-category',
    keywords: [ __('team','mytheme-blocks'), __('member','mytheme-blocks'), __('person','mytheme-blocks')],
    attributes,
    save: ( {attributes} ) => {
        const { title, info, url, alt, id, social } = attributes;
        return (
            <div>
                {url && 
                    <img src={url} alt={alt} className={id ? `wp-image-${id}`: null}/>
                }
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
                {social.length > 0 && 
                    <div className={'wp-block-mytheme-blocks-teammember__social'}>
                        <ul>
                            {social.map((item, index) => {
                                return (
                                    <li key={index} data-icon={item.icon}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <Dashicon icon={item.icon} size={16}/>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        )
    },
    edit
});