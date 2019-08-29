<?php
/**
 * Plugin Name: mytheme-blocks
 * Plubin URI: http://fabiocallegari.com
 * Description: Blocks for my theme
 * Author: Fabio
 * Author URI: http://fabiocallegari.com
*/

if( !defined('ABSPATH') ) {
    exit;
}

function my_theme_blocks_register_block_type($block, $options = array()) {
    register_block_type('mytheme-blocks/' . $block,
        array_merge( array(
            'editor_script' => 'mytheme-blocks-editor-script',
            'editor_style' => 'mytheme-blocks-editor-style',
            'script' => '',
            'style' => ''
        ), $options)
    );
}

function mytheme_blocks_register() {

    wp_register_script(
        'mytheme-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element')
    );

    wp_register_style(
        'mytheme-blocks-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')
    );

    my_theme_blocks_register_block_type('firstblock');
    my_theme_blocks_register_block_type('secondblock');
}

add_action('init', 'mytheme_blocks_register');