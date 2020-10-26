<?php
function site_scripts() {
  global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way
        
    // Adding scripts file in the footer
    wp_enqueue_script( 'site-vendor-js', get_template_directory_uri() . '/public/js/vendor.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/js'), true );
    wp_enqueue_script( 'site-js', get_template_directory_uri() . '/public/js/site.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/js'), true );
   
    // Register main stylesheet
    //only load for home page
    wp_enqueue_style( 'fullpage-css', get_template_directory_uri() . '/public/css/fullpage.css', array(), null, 'all' );

    wp_enqueue_style( 'spotlight-css', get_template_directory_uri() . '/public/css/spotlight.css', array(), null, 'all' );

    wp_enqueue_style( 'site-css', get_template_directory_uri() . '/public/css/site.css', array(), filemtime(get_template_directory() . '/assets/scss'), 'all' );

    // Comment reply script for threaded comments
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
      wp_enqueue_script( 'comment-reply' );
    }

    //Global variables to expose rest uri's
    //Creating an error with VUE
    wp_localize_script( 'site-js', 'made_opts', 
      array(
        'rest_url' => rest_url(),
        'rest_nonce' => wp_create_nonce('wp_rest'),
      )
    );
}
add_action('wp_enqueue_scripts', 'site_scripts', 999);