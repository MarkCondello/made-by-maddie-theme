<?php
/**
 * The front page template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 */
 

get_header(); ?>
 
<div id="fullpage" class="content">
	<?php if (have_posts()) :  ?>
	
	<?php while (have_posts()) : the_post(); ?>
			<?php the_content(); ?>
			 <!-- To see additional archive styles, visit the /parts directory -->			 
		 <?php endwhile; ?>	
	<?php 	else :  	
		get_template_part( 'parts/content', 'missing' ); 		
	endif; ?>																
</div> <!-- end #content -->
<?php get_footer(); ?>