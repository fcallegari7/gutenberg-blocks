import './styles.editor.scss';
import { registerBlockType } from '@wordpress/blocks'; 
import { __ } from '@wordpress/i18n';

registerBlockType('mytheme-blocks/secondblock', {
    title: __('Second Block', 'mytheme-blocks'),
    description: __('Our second block', 'mytheme-blocks'),
    category: 'layout',
    icon: 'admin-network',
    keywords: [__('photo', 'mytheme-blocks'),__('image', 'mytheme-blocks')],
    edit: ({className}) => {
        return <p className={className}>Editor</p>;
    },
    save: () => {
        return <p>Saved</p>;
    }
});