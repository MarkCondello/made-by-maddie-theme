<?php
/**
 * The maintenance template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 */

get_header(); 
?>
	<div style="height: 100vh; padding-top: 10vh; background-image: url('<?= get_template_directory_uri() . '/public/images/photos/madeleine-orneus.png' ?>')">
		<div class="grid-x align-center">
		    <main class="main small-10 medium-7 cell text-center" role="main">
				<img src="<?= get_template_directory_uri() . '/public/images/logos/made-logo.svg' ?>" alt="Made by Maddie logo." />
				<h1 class="text-white m-t-3">Down for scheduled maintenance. </h1>
				<p class="text-white">If you need to contact me, shoot me an email <a style="color: #fff; text-decoration: underline;" href="mailto:hi@madebymadeleine.com.au">here</a>.</p>														
		    </main>  
		</div>  
	</div> 
<?php get_footer(); ?>
<style>
	.hamburger {
		display: none;
	}
</style>