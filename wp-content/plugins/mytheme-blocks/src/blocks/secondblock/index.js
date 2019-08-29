const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('mytheme-blocks/secondblock', {
    title: __('Second Block', 'mytheme-blocks'),
    description: __('Our second block', 'mytheme-blocks'),
    category: 'layout',
    icon: 'admin-network',
    keywords: [__('photo', 'mytheme-blocks'),__('image', 'mytheme-blocks')],
    edit: function() {
        return <p>Editor</p>;
    },
    save: function() {
        return <p>Saved</p>;
    }
});