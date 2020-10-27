<?php








// Register menus
register_nav_menus(
	array(
		//'main-nav'		=> __( 'The Main Menu', 'jointswp' ),		// Main nav in header
		'offcanvas-nav'	=> __( 'The Off-Canvas Menu', 'jointswp' ),	// Off-Canvas nav
		//'footer-links'	=> __( 'Footer Links', 'jointswp' )			// Secondary nav in footer
	)
);

// The Top Menu
// function joints_top_nav() {
// 	wp_nav_menu(array(
// 		'container'			=> false,						// Remove nav container
// 		'menu_id'			=> 'main-nav',					// Adding custom nav id
// 		'menu_class'		=> 'medium-horizontal menu',	// Adding custom nav class
// 		'items_wrap'		=> '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown">%3$s</ul>',
// 		'theme_location'	=> 'main-nav',					// Where it's located in the theme
// 		'depth'				=> 5,							// Limit the depth of the nav
// 		'fallback_cb'		=> false,						// Fallback function (see below)
// 		'walker'			=> new Topbar_Menu_Walker()
// 	));
// }

// Big thanks to Brett Mason (https://github.com/brettsmason) for the awesome walker
class Topbar_Menu_Walker extends Walker_Nav_Menu {
	function start_lvl(&$output, $depth = 0, $args = Array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"menu\">\n";
	}
}

// The Off Canvas Menu
function joints_off_canvas_nav() {
	wp_nav_menu(array(
		'container'			=> false,							// Remove nav container
		'menu_id'			=> 'made-off-canvas-nav',					// Adding custom nav id
		'menu_class'		=> 'vertical menu accordion-menu',	// Adding custom nav class
		'items_wrap'		=> '<ul id="%1$s" class="%2$s" data-accordion-menu>%3$s</ul>',
		'theme_location'	=> 'offcanvas-nav',					// Where it's located in the theme
		'depth'				=> 1,								// Limit the depth of the nav
		'fallback_cb'		=> false,							// Fallback function (see below)
		'walker'			=> new Off_Canvas_Menu_Walker()
	));
}

class Off_Canvas_Menu_Walker extends Walker_Nav_Menu {
	function start_lvl(&$output, $depth = 0, $args = Array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"vertical menu\">\n";
	}
}

// The Footer Menu
// function joints_footer_links() {
// 	wp_nav_menu(array(
// 		'container'			=> 'false',				// Remove nav container
// 		'menu_id'			=> 'footer-links',		// Adding custom nav id
// 		'menu_class'		=> 'menu',				// Adding custom nav class
// 		'theme_location'	=> 'footer-links',		// Where it's located in the theme
// 		'depth'				=> 0,					// Limit the depth of the nav
// 		'fallback_cb'		=> ''					// Fallback function
// 	));
// } /* End Footer Menu */

// Header Fallback Menu
function joints_main_nav_fallback() {
	wp_page_menu( array(
		'show_home'		=> true,
		'menu_class'	=> '',		// Adding custom nav class
		'include'		=> '',
		'exclude'		=> '',
		'echo'			=> true,
		'link_before'	=> '',		// Before each link
		'link_after'	=> ''		// After each link
	));
}

// Footer Fallback Menu
function joints_footer_links_fallback() {
	/* You can put a default here if you like */
}

// Add Foundation active class to menu
function required_active_nav_class( $classes, $item ) {
	if ( $item->current == 1 || $item->current_item_ancestor == true ) {
		$classes[] = 'active';
	}
	return $classes;
}
add_filter( 'nav_menu_css_class', 'required_active_nav_class', 10, 2 );


//About & Socials added to menu
function new_nav_menu_items($items) {
	
	$aboutLink = '<li id="made-about-link" class="menu-item made-about-link m-b-3" role="treeitem">
		<a href="' . get_site_url() . '#about-me" data-menuanchor="about-me" role="menuitem">About Me</a>
		</li>';
		// ToDo: Add icons here
	$socialLinks = '<li class="socials">
		<a href="https://www.linkedin.com/in/madeleine-%C3%B6rn%C3%A9us-269bb599/" target="_blank" nofollow noreferrer>
			<img src="' . get_template_directory_uri() . '/public/images/icons/linked-in.svg" alt="Linked In icon."/>
		</a>
		<a href="#" target="_blank" nofollow noreferrer>
			<img src="' . get_template_directory_uri() . '/public/images/icons/email.svg" alt="Email icon."/>
		</a>
	</li>';

	$items = $items . $aboutLink . $socialLinks;
    return $items;
}
add_filter( 'wp_nav_menu_items', 'new_nav_menu_items' );