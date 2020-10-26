<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section
 *
 */

?>

<!doctype html>

  <html class="no-js"  <?php language_attributes(); ?>>

	<head>
		<meta charset="utf-8">
		
		<!-- Force IE to use the latest rendering engine available -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<!-- Mobile Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta class="foundation-mq">
		
		<!-- If Site Icon isn't set in customizer -->
		<?php if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ) { ?>
			<!-- Icons & Favicons -->
			<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
			<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon.png">
			<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicon-16x16.png">
	    <?php } ?>

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
		<!-- Adobe fonts -->
		<link rel="stylesheet" href="https://use.typekit.net/khv1vyi.css">
		<?php wp_head(); ?>
	</head>
<?php 

$menu_bg_img = null;	
if($post) {
	$terms = get_the_terms( $post->ID , 'category');
 	if( $terms ) {
		$menu_bg_img = get_field('featured_image', $terms[0]) ? get_field('featured_image', $terms[0])['url'] : get_template_directory_uri() . '/public/images/photos/madeleine-orneus.png'; 
	}  
} 
?>
	<body <?php body_class(); ?>>
		<div  class="off-canvas-wrapper">
			<!-- Load off-canvas container. Feel free to remove if not using. -->
			<div style="background-image:url('<?= $menu_bg_img ?>');" class="off-canvas position-top" id="made-off-canvas" data-off-canvas data-transition="overlap" >
				<?php joints_off_canvas_nav(); ?>
 			</div>
			<div  class="off-canvas-content" data-off-canvas-content>
				<header class="site-header" >		
					 <!-- This navs will be applied to the topbar, above all content 
						  To see additional nav styles, visit the /parts directory -->
 					<a data-toggle="made-off-canvas"  class="hamburger"> 
					 	<span></span>
						<span></span>
						<span></span>
						<span></span>
					 </a> 
				</header> <!-- end .header -->