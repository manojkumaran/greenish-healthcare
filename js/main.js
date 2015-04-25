//BX Slider

$(document).ready(function(){
  $('.bxslider').bxSlider();
});
$('.bxslider').bxSlider({
  auto: true
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

document.getElementById('testimonial').addEventListener ( 'click', function ( event ) {
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
	'height': 30
});

/** TESTIMONIAL **/


