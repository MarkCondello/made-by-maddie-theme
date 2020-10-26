<?php 
/**
 * The template for displaying all single posts 
*/
get_header(); 

$terms = get_the_terms( $post->ID , 'category');
$cat_slug = '';
$cat_name = 'N/A';

if( $terms[0] ) {
	$cat_obj = get_term($terms[0]->term_id, 'category');
	$cat_link = get_category_link($cat_obj->term_id);
	$cat_slug = $cat_obj->slug;
	$cat_name = $cat_obj->name;
}?>			
<div class="content">
	<div class="inner-content">
		<main class="main relative" role="main">
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			<div class="category-container">
				<div class="-inner"> 
					<span class="line"></span>
					<a id="cat-link" class="text-center" href="<?= "/#" . $cat_slug ?>" data-menuanchor="<?= $cat_slug ?>"><?= $cat_name ?></a>
					<span class="line"></span>
				</div>
			</div>
			<div class="spotlight-group" data-theme="white" data-progress="true" data-preloader="true" data-prefetch="true" data-autoplay="true">
			<?php get_template_part( 'parts/loop', 'single' ); ?>
			</div>
		    <?php endwhile; else : ?>
		   		<?php get_template_part( 'parts/content', 'missing' ); ?>
			<?php endif; ?>
			<div class="category-container-bottom">
				<div class="-inner"> 
					<span class="line"></span>
					<a class="text-center" href="<?= get_site_url() ?>">
						<span>Back to projects</span>
					</a>
					<span class="line"></span>
				</div>
			</div>
		</main> <!-- end #main -->
	</div> <!-- end #inner-content -->
</div> <!-- end #content -->
<?php get_footer(); ?>