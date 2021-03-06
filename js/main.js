//BX Slider

$(document).ready(function(){
  $('.bxslider').bxSlider({auto: true});
  
   $("#pdt-carousel").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
		});
  
    
       $('.tabs .tab-links a').on('click', function(e)  {
      
        var currentAttrValue = jQuery(this).attr('href');
        console.log(currentAttrValue);
        // Show/Hide Tabs
        $(currentAttrValue).fadeIn().siblings().fadeOut('fast');
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });


});




/** TESTIMONIAL **/

Element.prototype.readMore = function ( config ) {
	this.className += ' read-more-excerpt read-more';
	this.style.height = config.height + 'px';
	var readMoreText = document.createElement('span');
	readMoreText.innerHTML = 'Read More';
	readMoreText.className = 'read-more-link';
	this.parentNode.insertBefore(readMoreText, this.nextSibling);
};

Element.prototype.showMore = function () {
	var prev = this.previousSibling;
	prev.style.height = 'auto';
	this.previousSibling.classList.remove('read-more');
	this.remove();
};

document.body.addEventListener ( 'click', function ( event ) {
	var tgt = event.target;
	if ( tgt.className === 'read-more-link' ) {
		tgt.showMore();
	}
});

jQuery.fn.extend ({
	readMore: function ( config ) {
		jQuery(this).each(function () {
			jQuery(this)[0].readMore( config );
		});
	}
});
jQuery('.testimonial-content').readMore({
	'height': 55
});

/** TESTIMONIAL **/


