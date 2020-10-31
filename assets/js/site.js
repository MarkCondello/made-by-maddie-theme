import './wp-foundation';
const gsap = require('gsap');

$(() => {
    //only need foundation for offcanvas
    const offCanvas = $("#made-off-canvas").foundation();
    let tl = new gsap.TimelineLite({defaults: { duration: .75 }});

    let isHomePage = $('body').hasClass('home'),
    content = $(".section h1, .section h2, .section h3, .section p, .section .logo"),
    hamburger = $('.hamburger');
 
    if (hamburger) {
        $(hamburger).on('click', function (ev) {
            ev.preventDefault();
            let offCanvasIsOpen = $(offCanvas).hasClass('is-open')
 
            if(offCanvasIsOpen){
                $(this).removeClass('open');

            } else {
                $(this).addClass('open');
            }

            if(offCanvasIsOpen && isHomePage){
                $(content).show()
            } else {
                $(content).hide();
            }
        });
    }


    let anchorLinks = [];
        //change hrefs for category items in menu
        let $navMenuListItems = $("#made-off-canvas-nav .menu-item");
        Array.from($navMenuListItems).forEach(item=>{
            
            let link = $(item).children('a'),
            linkTitle = link[0].innerHTML.replace(/\s+/g, '-').toLowerCase();
 
            //attrs for full page menu
            anchorLinks.push(linkTitle);
            link.attr('data-menuanchor', linkTitle);

            if(isHomePage){
                link.attr('href', `#${linkTitle}`);
            } else {
                let currPageCat = $("#cat-link").data('menuanchor');

                if($(link).data('menuanchor') === currPageCat){
                    $(link).addClass('active');
                }
                link.attr('href', `/#${linkTitle}`);
            }

            $(link).on('click', function(){
                $(hamburger).removeClass('open');
                $(content).show();
                $('#made-off-canvas').foundation('close');
            });
       });

 
    const fp = new fullpage('#fullpage', {
        anchors: anchorLinks,
        menu: '#made-off-canvas-nav',
        scrollHorizontally: false,
        licenseKey: 'B6DBBF96-8DB64AED-B21E8887-9AA67AB6',
        navigation: true,
        css3: true,
        keyboardScrolling: true,

        //remove full page at breakpoint
        //responsiveWidth: 768,

        onLeave(){
            checkActive();
        },
        // //onload
        // afterRender: function(){
        //     var pluginContainer = this;
        //     //alert("The resulting DOM structure is ready");
        // }
    });
    
    function checkActive(){
        if(isHomePage){
            let panels = $("#fullpage .section"),
            hamburger = $('.hamburger');
            function isCategoryPanel(anchor){
                return anchor !== 'home' && anchor !== 'about-me';
            }
            function panelIsActive(panel){
                return $(panel).hasClass('active');
            }

            setTimeout(function(){ 
                $(panels).each((index, panel)=>{
                    let anchor = $(panel).data('anchor');
                    if (panelIsActive(panel)){
                        if(isCategoryPanel(anchor)){
                            $(hamburger).addClass('dark');
                        } else {
                            $(hamburger).removeClass('dark');  
                        }
                    }
                });
            }, 500);

            // $(panels).each((index, panel)=>{
            //     let anchor = $(panel).data('anchor');
            //     if(isCategoryPanel(anchor)){
            //         let primaryImage = $(panel).find('.primary-image'),
            //         secondaryImage = $(panel).find('.secondary-image');

            //         //  if(panelIsActive(panel)){
            //         //     tl.from(primaryImage, { x: '0%', ease: 'bounce' });
            //         //     tl.from(secondaryImage, { x: '0%', ease: 'bounce' }).delay(0);
            //         // } else {
            //         //     tl.from(primaryImage, { x: '-100%', ease: 'bounce' });
            //         //     tl.from(secondaryImage, { x: '100%', ease: 'bounce' }).delay(0);
            //         // }
            //     }
            // });
        } 
    }
    //onload
    checkActive();
 
    if(!isHomePage){
        //not sure if this is working properly
        function mobileFullWidthImageHeights(){
            let windowWidth = $(window).width();

            if(windowWidth <= 1185){
                console.log("windowWidth", windowWidth);

                let fullWidthImages = $(".full-width-image");
                if(fullWidthImages.length){
                    $(fullWidthImages).each(function(i, el){
                        $(el).css('minHeight', $(el).data('mobile-height'));
                    });
                }
            }
        }
        //onload
        mobileFullWidthImageHeights();
        //onresize
        $(window).resize(mobileFullWidthImageHeights);

        $(document).on('scroll', function(){
           let scrollTop = $(document).scrollTop();
            if(scrollTop >= 540){
                $(hamburger).addClass('dark');            
            } else {
                $(hamburger).removeClass('dark');  
            }
        });
    }
});