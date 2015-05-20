
var $msie = (navigator.appVersion.indexOf('Win') != -1)?(true):(false);

jQuery(document).ready(function() {
	var $nh = 0;
	var $nav_closed = true;
	jQuery('.h-d-ul li a').mouseover(function() {
		if($nav_closed) {
			jQuery('#h-d').addClass('h-d-open');
			jQuery('#h-d-n-s-1').animate({'height':$nh + 'px'},300);
			$nav_closed = false;
		}	
	})
	jQuery('#hwn').mouseleave(function() {
		if(!$nav_closed) {
			jQuery('#h-d').removeClass('h-d-open');
			jQuery('#h-d-n-s-1').animate({'height':'0'},300,function() {
				$nav_closed = true;
			});
		}	
	});

	if(jQuery('.h-d-ul-sub').length) {
		var total_space = 0; 
		jQuery('.h-d-ul-sub').each(function(i) {
			var child = jQuery('#h-d-n ul li:eq('+ i +')');
			if(typeof child != 'undefined') {
				var ow = child.innerWidth();
				if(typeof ow != 'undefined') {
					var p = parseInt(jQuery(this).css('padding-left')) + parseInt(jQuery(this).css('padding-right'));
					// var p = (parseInt(jQuery(this).css('padding-right')) || 0) + (parseInt(jQuery(this).css('padding-left')) || 0);
					jQuery(this).width(ow - p);
				}	
			}
		});

		$nh = jQuery('#h-d-n-s-1').css('height','auto').outerHeight();
		jQuery('#h-d-n-s-1').css('height','0px');
	};	

	jQuery('#s').bind('click blur focus',function(e) {
		var v = jQuery(this).val();
		var dv = jQuery(this)[0].defaultValue;
		if(e.type == 'blur') {
			if(v == '')
				jQuery(this).val(dv);
		}
		else {
			if(v == dv)
				jQuery(this).val('');
		}
	});
	jQuery('#searchform').submit(function() {
		if(jQuery('#s',this).length) {
			var v = jQuery('#s',this).val();
			if(v.toLowerCase() == 'search' || v == '')
				return false;
		}
	});

	var bind_banner = function() {
		if(jQuery('#cw-b-1').length) {
			jQuery('#cw-b-1').cycle({ 
				fx:     'fade', 
				speed:  800, 
				pager:  '#cw-b-ul-list',
				pagerAnchorBuilder: function(idx, slide) { 
					return '<li><a href="javascript:;"></a></li>';
				},
				timeout: 4000 
			});
		};
	};

	if(jQuery('#cw-b h4').length) {
		var cw_chld = jQuery('#cw-b h4, #cw-b h5').length;
		jQuery('#cw-b h4, #cw-b h5').each(function(i) {
			var w = jQuery('span.text',this).width() + 10;
			jQuery(this).width(w);
			if(i == cw_chld - 1)
				bind_banner();
		});
	};	


	/*
	if(!$msie) {
		if(jQuery('.fw-form #sendbutton2').length) {
			jQuery('.fw-form #sendbutton2')[0].type = 'image';
			jQuery('.fw-form #sendbutton2')[0].src = '/wp-content/themes/intelsius/images/violet_submit_btn.gif';
		};	
	};	
	*/


	var bind_ss_showhide = function() {
		if(jQuery('#ss').length) {
			if(jQuery('#ss').css('display') == 'none') {
				bind_ss_keyup();
				if(!$msie) 
					jQuery('#ss').fadeIn(600);
				else	
					jQuery('#ss').show();

				var h = jQuery('#ss-c').height();
				var wh = jQuery(window).height();
				if(h > wh) 
					jQuery('#ss-c').css({'top':'50px','margin-top':'0'});
			}	
			else {	
				jQuery(document).unbind('keyup.ss');
				if(!$msie)
					jQuery('#ss').fadeOut(600);
				else	
					jQuery('#ss').hide();
				jQuery('#ss-c').css({'top':'50%','margin-top':'-300px'});
			}	
		}
	};	

	jQuery('#ss-a,.ss-link').click(function() {
		bind_ss_showhide();
	});

	var bind_ss_keyup = function() {
		jQuery(document).bind('keyup.ss',function(e) { 
			if(e.which == 27) 
				bind_ss_showhide();
		});
	};	

	if(jQuery('.cw-p-b-c-r-wrap').length) {
		jQuery('.cw-p-b-c-r-wrap').cycle({ 
			fx:     'fade', 
			pager:  '#cw-p-b-c-r-ul',
			pagerAnchorBuilder: function(idx, slide) { 
				return '<li><a href="javascript:;"></a></li>';
			},
			speed:  'slow',
			timeout: 5000 
		});
	};

	if(jQuery('.schedule-a-time-to-meet-with-us-at-an-event').length) {
		if(jQuery('.schedule-a-time-to-meet-with-us-at-an-event #li-4-1').hasClass('textonly')) {
			if(jQuery('#content h1.entry-title').length) {
				var html = jQuery('#content h1.entry-title').html();
				jQuery('.schedule-a-time-to-meet-with-us-at-an-event #li-4-1').html(html);
			}	
		}
	};


	if(jQuery('#cforms3form p.cf-sb input').length) {
		jQuery('#cforms3form p.cf-sb input').attr('onclick','formalyzer_call_onclick(17542); return cforms_validate(\'3\', false);');
	}

	if(jQuery('.map-item .map-item-popup').length) {
		jQuery('.map-item .map-item-popup').each(function() {
			var l = jQuery(this).closest('.map-item').find('.map-item-marker');
			if(typeof l != 'undefined') {
				var ot = l.position().top;
				var ol = l.position().left;
				var ow = l.outerWidth(true);
				if(typeof ot != 'undefined' && typeof ol != 'undefined' && ow != 'undefined') {
					jQuery(this).css({
						"top" : ot + "px",
						"left" : (ol + (ow * 2)) + "px"
					},200).hide();
				}
			}
		});
	}

	jQuery('.map-item-marker').hover(function() {
		var p = jQuery(this).closest('.map-item');
		if(typeof p != 'undefined') {
			bind_close_all_markers(p);
		}
	});

	var bind_open_marker = function(p) {
		var c = jQuery('.map-item-country', p);
		var b = jQuery('.map-item-popup', p);
		if(!jQuery('.map-item-marker',p).hasClass('map-item-marker-open')) {
			jQuery('.map-item-marker',p).addClass('map-item-marker-open');
			c.fadeIn(300);
			b.fadeIn(300);
		}	
	};


	var bind_close_all_markers = function(parent_obj) {
		var len = jQuery('.map-item .map-item-popup').length;
		jQuery('.map-item .map-item-popup').each(function(i) {
			var p = jQuery(this).closest('.map-item');
			if(typeof p != 'undefined') {
				if(jQuery('.map-item-marker',p).hasClass('map-item-marker-open')) {
					var c = jQuery('.map-item-country', p);
					var b = jQuery('.map-item-popup', p);
					c.fadeOut(300);
					b.fadeOut(300,function() {
						jQuery('.map-item-marker',p).removeClass('map-item-marker-open');
					});
				}	
			}	
			if(i == (len - 1))
				bind_open_marker(parent_obj);
		});
	};

	jQuery('html').click(function(e) {
		/*
		if(jQuery(e.target).parents().index(jQuery('.map-item-popup')) == -1) 
			bind_close_all_markers();
		*/	
	});
});

function launch_ss() {
	if(jQuery('#ss').length) {
		if(jQuery('#ss').css('display') == 'none') {
			jQuery(document).bind('keyup.ss',function(e) { 
				if(e.which == 27) { 
					jQuery(document).unbind('keyup.ss');
					if(!$msie)
						jQuery('#ss').fadeOut(600);
					else	
						jQuery('#ss').hide();
					jQuery('#ss-c').css({'top':'50%','margin-top':'-300px'});
				}
			});
			if(!$msie)
				jQuery('#ss').fadeIn(600);
			else	
				jQuery('#ss').show();
			var h = jQuery('#ss-c').height();
			var wh = jQuery(window).height();
			if(h > wh) 
				jQuery('#ss-c').css({'top':'50px','margin-top':'0'});
		}	
		else {	
			jQuery(document).unbind('keyup.ss');
			if(!$msie)
				jQuery('#ss').fadeOut(600);
			else		
				jQuery('#ss').hide();
			jQuery('#ss-c').css({'top':'50%','margin-top':'-300px'});
		}	
	}
}
