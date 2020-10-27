<?php
/**
 * The template for displaying 404 (page not found) pages.
 *
 * For more info: https://codex.wordpress.org/Creating_an_Error_404_Page
 */

get_header(); ?>
			
	<div style="height: 100vh; padding-top: 13vh; background-image: url('<?= get_template_directory_uri() . '/public/images/photos/madeleine-orneus.png' ?>')">
		<div class="grid-x align-center">
		    <main class="main small-10 medium-7 cell text-center" role="main">
				<img src="<?= get_template_directory_uri() . '/public/images/logos/made-logo.svg' ?>" alt="Made by Maddie logo." />
				<h1 class="text-white m-t-3"><?php _e( 'Epic 404 - Page Not Found', 'jointswp' ); ?></h1>
				<p class="text-white"><?php _e( 'The page you were looking for was not found.', 'jointswp' ); ?>	
				<a class="text-center text-white" href="<?= get_site_url() ?>">Back to Home.</a>
			</p>
			
			</main> <!-- end #main -->
		</div> <!-- end #inner-content -->
	</div> <!-- end #content -->

<?php get_footer(); ?>