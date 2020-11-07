<?php

//add_filter( 'template_include', 'show_maintenance_page', 99 );
function show_maintenance_page( $template ) {
    if ( !current_user_can( 'edit_themes' ) || !is_user_logged_in() ){
        $new_template = locate_template( array( 'maintenance-template.php' ) );
        if ( !empty( $new_template ) ) {
            return $new_template;
        }
	}
	return $template;
}
	
// Adding WP Functions & Theme Support
function joints_theme_support() {

	// Add WP Thumbnail Support
	add_theme_support( 'post-thumbnails' );
	
	// Default thumbnail size
	set_post_thumbnail_size(125, 125, true);

	// Add RSS Support
	add_theme_support( 'automatic-feed-links' );
	
	// Add Support for WP Controlled Title Tag
	add_theme_support( 'title-tag' );
	
	// Add HTML5 Support
	// add_theme_support( 'html5', 
	//          array( 
	//          	'comment-list', 
	//          	'comment-form', 
	//          	'search-form', 
	//          ) 
	// );
	
	// add_theme_support( 'custom-logo', array(
	// 	'height'      => 100,
	// 	'width'       => 400,
	// 	'flex-height' => true,
	// 	'flex-width'  => true,
	// 	'header-text' => array( 'site-title', 'site-description' ),
	// ) );
	
	// Adding post format support
	//  add_theme_support( 'post-formats',
	// 	array(
	// 		'aside',             // title less blurb
	// 		'gallery',           // gallery of images
	// 		'link',              // quick link to other site
	// 		'image',             // an image
	// 		'quote',             // a quick quote
	// 		'status',            // a Facebook like status update
	// 		'video',             // video
	// 		'audio',             // audio
	// 		'chat'               // chat transcript
	// 	)
	// ); 
	
	// Set the maximum allowed width for any content in the theme, like oEmbeds and images added to posts.
	$GLOBALS['content_width'] = apply_filters( 'joints_theme_support', 1200 );	

	/* Adds full width block support */
	add_theme_support('align-wide');

	/* Enables Gutenberg Colour Pallet Support */
	
	// add_theme_support('editor-color-palette', 
	// 	array(
	// 		array(
	// 			'name' => 'Blue',
	// 			'slug' => 'blue',
	// 			'color' => '#25A5D5'
	// 		),
	// 		array(
	// 			'name' => 'Green',
	// 			'slug' => 'green',
	// 			'color' => '#82BD58'
	// 		),
	// 		array(
	// 			'name' => 'Grey',
	// 			'slug' => 'grey',
	// 			'color' => '#C7C7C7'
	// 		),
	// 	)
	// );

	/* Disable custom colours*/
	//add_theme_support('disable-custom-colors');

	
} /* end theme support */

add_action( 'after_setup_theme', 'joints_theme_support' );