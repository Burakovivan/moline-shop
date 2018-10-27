$(function () {

	$.fn.inputNumber = function () {

		this.each(function () {
			init($(this));
		});

		function init(el) {
			var els = {};

			els.dec = el.parent().find('.input-number-decrement');
			els.inc = el.parent().find('.input-number-increment');
			els.dec.on('click', decrement);
			els.inc.on('click', increment);

			function decrement() {
				var min = el.attr('min') || false;
				var value = el[0].value;
				value--;
				if (!min || value >= min) {
					el[0].value = value;
				}
			}

			function increment() {
				var max = el.attr('max') || false;
				var value = el[0].value;
				value++;
				if (!max || value <= max) {
					el[0].value = value++;
				}
			}
		}
	}

	$('.input-number').inputNumber();
	/* input counter end */

	//for replaceing path for big img
	$(".small_img").click(function () {
		var src = $(this).find('img').attr('src');
		console.log(src);
		$(".main_img").find('img').attr('src', src);
		console.log(src);
	});

	
	$('.items_img').magnificPopup({
		type:'image',
		gallery:{
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade',
		navigateByImgClick: true,

 		// arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

		
		//  closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close" id="mfp_btn_exit">×</button>'
		// closeMarkup: '<svg id="exit_popup"  width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="2.Cart---Desktop" transform="translate(-938.000000, -60.000000)" fill="#C4C0C0"><g id="Group-3-Copy" transform="translate(32.000000, 30.000000)"><path d="M938.224554,58.4462737 L934.446846,62.2203092 C933.945087,62.7221315 933.252576,63 932.555919,63 C931.863408,63 931.16675,62.7221315 930.669138,62.2203092 L922.5,54.0542918 L914.335009,62.2203092 C913.837396,62.7221315 913.140739,63 912.448228,63 C911.751571,63 911.05906,62.7221315 910.557301,62.2203092 L906.779593,58.4462737 C906.277834,57.9444514 906,57.2518537 906,56.5551087 C906,55.862511 906.277834,55.165766 906.779593,54.668091 L914.948731,46.4979264 L906.779593,38.3277617 C906.277834,37.8300867 906,37.1333417 906,36.440744 C906,35.743999 906.277834,35.0514013 906.779593,34.549579 L910.557301,30.7755435 C911.05906,30.2737213 911.751571,30 912.448228,30 C913.140739,30 913.837396,30.2737213 914.335009,30.7755435 L922.5,38.9415609 L930.669138,30.7755435 C931.16675,30.2737213 931.863408,30 932.555919,30 C933.252576,30 933.945087,30.2737213 934.446846,30.7755435 L938.224554,34.549579 C938.726313,35.0514013 939,35.743999 939,36.440744 C939,37.1333417 938.726313,37.8300867 938.224554,38.3277617 L930.055416,46.4979264 L938.224554,54.668091 C938.726313,55.165766 939,55.862511 939,56.5551087 C939,57.2518537 938.726313,57.9444514 938.224554,58.4462737" id="Fill-1"></path></g></g>	</g></svg>'
		// closeMarkup:'<div class="wrap_exit mfp-close"><img src="img/cat_icon/exit_filters.svg" alt="" class="mfp-close"></div>'
		closeMarkup:'<div class="wrap_exit mfp-close" id="mfp_btn_exit"><div class="inner_wrap_ex"><img id="mfp_exit_img" src="img/cat_icon/mfpexit.svg" alt="" class="mfp-close"></div></div>'
		
	});


	
	$(".inner_list_img_wrap").slick({
		// dots: true,
		infinite: true,
		slidesToShow: 4,
		arrows: true,
		nextArrow: '<div class="right_arrow arrow"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="left_arrow arrow"><i class="fas fa-chevron-left"></i></div>',
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					// dots: true,
					arrows: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$(".brand_list").slick({
		// dots: true,
		infinite: true,
		slidesToShow: 6,
		arrows: true,
		nextArrow: '<div class="right_arrow arrow"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="left_arrow arrow"><i class="fas fa-chevron-left"></i></div>',
		slidesToScroll: 6
	});

	/*Slide down*/
	$(".rulet").click(function () {
		$(this).find('.block_info').toggleClass('closed');
	});

	$(".more").click(function () {
		$(this).closest(".clump").find(".detail").removeClass("closed");
		$(this).closest(".clump").find(".more").addClass("hide_link");
		$(this).closest(".clump").find(".less").removeClass("hide_link");
	});
	$(".less").click(function () {
		$(this).closest(".clump").find(".detail").addClass("closed");
		$(this).closest(".clump").find(".more").removeClass("hide_link");
		$(this).closest(".clump").find(".less").addClass("hide_link");
	});

	$(".header_slide").click(function () {
		$(this).closest(".clump").find(".detail").removeClass("closed");
		$(this).closest(".clump").find(".header_slide").addClass("hide_link");
		$(this).closest(".clump").find(".header_slide_inside").removeClass("hide_link");
	});
	$(".header_slide_inside").click(function () {
		$(this).closest(".clump").find(".detail").addClass("closed");
		$(this).closest(".clump").find(".header_slide").removeClass("hide_link");
		$(this).closest(".clump").find(".header_slide_inside").addClass("hide_link");
	});

	$(".sb_header_slide").click(function () {
		$(this).closest(".clump").find(".sb_detail").removeClass("closed");
		$(this).closest(".clump").find(".sb_header_slide").addClass("hide_link");
		$(this).closest(".clump").find(".sb_header_slide_inside").removeClass("hide_link");
	});
	$(".sb_header_slide_inside").click(function () {
		$(this).closest(".clump").find(".sb_detail").addClass("closed");
		$(this).closest(".clump").find(".sb_header_slide").removeClass("hide_link");
		$(this).closest(".clump").find(".sb_header_slide_inside").addClass("hide_link");
	});

	$(".more_seo").click(function () {
		console.log('click more');
		$(this).closest(".clump").find(".detail_seo").toggleClass("closed");
		$(this).closest(".clump").find(".slider_link_seo").toggleClass("less_seo");
		$(this).closest(".clump").find(".slider_link_seo").toggleClass("more_seo");
	});

	$('#openSidebarMenu').on('click', function () {
		$('.overlay').toggleClass('show');
	});
	$('#openSidebarMenu').parent(".mnu_button_wrap").parent().on('click', function () {
		$('#openSidebarMenu').click();
	});

	$('.filter_btn').on('click', function () {
		// $('.s_cont').toggleClass('slide_mobile_filters');
		$('.slide_mobile_filters').toggleClass('f_active_pos');
		$('.overlay').toggleClass('show');
		// $('.s_cont').toggleClass('visible-md');
		// $('.s_cont').toggleClass('visible-lg');
	});
	$('.exit_filter_btn').on('click', function () {
		$('.slide_mobile_filters').toggleClass('f_active_pos');
		$('.overlay').toggleClass('show');
	});
	$('.overlay').on('click', function () {
		$('.slide_mobile_filters').toggleClass('f_active_pos');
		$('#openSidebarMenu').click();
	});

	$('.cart-wrap').on('click', function () {
		// $('.cart').toggleClass('show_cart');
		$('.cart').fadeIn("slow");
		$('.wrap_cart').fadeIn("slow");

		console.log('click +');
	});

	$('.cart').on('click', function () {
		$('.cart').fadeOut("slow");
		$('.wrap_cart').fadeOut("slow");

		console.log('click -- ');
	});
	$('#exit_cart').on('click', function () {
		$('.cart').fadeOut("slow");
		$('.wrap_cart').fadeOut("slow");
		
		console.log('click - ');
	});

	$('.lets_buy').on('click', function () {
		$('.cart').fadeOut("slow");
		$('.wrap_cart').fadeOut("slow");
		
		console.log('click - ');
	});

	var i_type_trig = 1;
	var tree_modif = 0;
	var tree_moove = 0;

	$('#type_grid').on('click', function () {

		console.log('START type grid');
		if (i_type_trig == 0) {
			$(this).toggleClass('active');
			$('#type_list').toggleClass('active');

			$('.block_products').toggleClass('cat_row');
			$('.block_products').toggleClass('grid');

			$('.item_wrap').toggleClass('col-md-4 col-xs-6 col-sm-3');
			$('.item_wrap').toggleClass('col-xs-12');
			
			$('.item_wrap > div:nth-child(2)').toggleClass('top_info');
			$('.item_wrap > div:nth-child(2)').toggleClass('ct_hide');

			$('.retail_price').toggleClass('ct_hide');

			$('.itm_img_wrap').toggleClass('col-md-12');
			$('.itm_img_wrap').toggleClass('col-xs-5 col-sm-3');

			$('.h_wrap').toggleClass('col-md-12');
			$('.p_wrap').toggleClass('col-md-12');

			$('.cw_wrp').toggleClass('col-md-6 col-sm-12  col-sm-12  pr-lg-right');
			$('.cw_wrp').toggleClass('col-xs-12 col-sm-5');


			$('.counter_wrap').toggleClass('col-xs-6 col-sm-6 pln prn');
			$('.btn_buy_wrap_link').toggleClass('col-xs-6 col-sm-6 col-md-6 col-sm-12 pln prn  ');

			
			if($('.item_wrap').find('.limit').length > 0){
				$('.limit').toggleClass('ct_hide');
				console.log('TYPE GRID limit > 0 TOGGLE');

			}
			else{
				console.log('TYPE GRID limit > 0 else');
			}
			if($('.item_wrap').find('.ost').length > 0){
				$('.ost').toggleClass('ct_hide');
				console.log('TYPE GRID ost > 0 TOGGLE');
			}
			else{
				console.log('TYPE GRID ost > 0 else');
			}
			
		}

		var total_items = $('.item_wrap').length;

		$('.item_wrap').each(function (index, value) {
			console.log('Begin of ' + index + 'item');
			console.log('index = ' + index + value);
			if (i_type_trig == 0) {

				var artcl_tmp = $(value).find('.itm_artic_wrap');
				var bage_tmp = $(value).find('.bage');

				if (tree_moove == 1) {
					$(value).find('.h_wrap').unwrap('.col-xs-7.col-sm-4');
					var p_wrap_tmp = $(value).find('.p_wrap');
					$(value).find('.p_wrap').remove()

					$(p_wrap_tmp).insertAfter($(value).find(".h_wrap"));
					var btn_tmp = $(value).find('.btn_buy_wrap');
					$(value).find('.btn_buy_wrap').remove();

					$(btn_tmp).appendTo($(value).find(">.row"));
				}
				else {
					$(value).find('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
					$(value).find('.p_wrap').remove()
					$(value).find('.btn_buy_wrap').remove();
				}
				if (tree_modif == 1) {

					$(value).find('.bage').remove();
					$(bage_tmp).appendTo($(value).find('> .top_info > div:nth-child(1)'));

					$(value).find('.itm_artic_wrap').remove();
					$(artcl_tmp).appendTo($(value).find('> .top_info > div:nth-child(2)'));
				}
				else {

				}
				if (index === total_items - 1) {
					i_type_trig = 1;
					tree_modif = 0;
					tree_moove = 0;
				} else {
					// console.log('It is not last item');
					// console.log('Current item = ' + index);
				}
			}

		});
	});

	$('#type_list').on('click', function () {

		if (i_type_trig == 1) {
			$(this).toggleClass('active');
			$('#type_grid').toggleClass('active');

			$('.block_products').toggleClass('cat_row');
			$('.block_products').toggleClass('grid');

			$('.item_wrap').toggleClass('col-md-4 col-xs-6 col-sm-3');
			$('.item_wrap').toggleClass('col-xs-12');
			
			$('.item_wrap> div:first-child').toggleClass('top_info');
			$('.item_wrap > div:nth-child(1)').toggleClass('ct_hide');


			// $('.retail_price').toggleClass('ct_hide');

			$('.itm_img_wrap').toggleClass('col-md-12');
			$('.itm_img_wrap').toggleClass('col-xs-5 col-sm-3');

			$('.h_wrap').toggleClass('col-md-12');
			$('.p_wrap').toggleClass('col-md-12');

			$('.cw_wrp').toggleClass('col-md-6 col-sm-12  col-sm-12  pr-lg-right');
			$('.cw_wrp').toggleClass('col-xs-12 col-sm-5');

			$('.counter_wrap').toggleClass('col-xs-6 col-sm-6 pln prn');
			$('.btn_buy_wrap_link').toggleClass('col-xs-6 col-sm-6 col-md-6 col-sm-12 pln prn  ');

		}

		var total_items = $('.item_wrap').length;

		$('.item_wrap').each(function (index, value) {

			console.log('index = ' + index + value);
			if (i_type_trig == 1) {

				var bage = $(value).find('.bage');
				var artcl_tmp = $(value).find('.itm_artic_wrap');
				

				if (tree_moove == 0) {
					$(value).find('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
					var p_wrap_tmp = $(value).find('.p_wrap');
					$(value).find('.p_wrap').remove()
					$(p_wrap_tmp).insertAfter($(value).find(".h_wrap"));

					if($(value).find('.inner_wrap').length > 0){
						// console.log('inner wrap EXIST++++++++++++++++++++');
					}else{
						// console.log('inner wrap NOT EXIST&&&&&&&&&&&&&&&&&&&&&&&');
						$(value).find('.counter_wrap').wrap('<div class="inner_wrap"></div>');

					}
					
					var btn_tmp = $(value).find('.btn_buy_wrap');
					$(value).find('.btn_buy_wrap').remove();
					$(btn_tmp).insertAfter($(value).find(".counter_wrap"));
				}
				else {
					$(value).find('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
					$(value).find('.p_wrap').remove()
					$(value).find('.btn_buy_wrap').remove();
				}

				if (tree_modif == 0) {
					$(value).prepend(bage);

					$(value).find('.h_wrap').prepend(artcl_tmp);
					console.log('tree modif = ' + tree_modif);

					var lim = $(value).find('.limit');
					$(value).find('.limit').remove();
					$(value).find('.inner_wrap').prepend(lim);
					
					var ost = $(value).find('.ost');
					$(value).find('.ost').remove();
					$(value).find('.inner_wrap').append(ost);

				
					if($(value).find('.limit').length > 0){
						$(value).find('.limit').toggleClass('ct_hide');
						console.log('TYPE LIST limit > 0 TOGGLE');
		
					}
					else{
						console.log('TYPE LIST limit > 0 else');
						// $(value).find('.inner_wrap').prepend(lim);
					}

					if($(value).find('.ost').length > 0){
						// $('.ost').toggleClass('ct_hide');
						$(value).find('.ost').toggleClass('ct_hide');
						console.log('TYPE LIST ost > 0 TOGGLE');
		
					}
					else{
						console.log('TYPE LIST ost > 0 else');
						// $(value).find('.inner_wrap').append(ost);
					}
	
					var retail_price = $(value).find('.retail_price');
					$(value).find('.retail_price').remove();

					$(value).find('.p_wrap').append(retail_price);

				
					if($(value).find('.retail_price').length > 0){
						$(value).find('.retail_price').toggleClass('ct_hide');
					}else{
						// $(value).find('.p_wrap').append(retail_price);
					}

				}
				else {
					// $(value).find('.ost').toggleClass('ct_hide');
					console.log('tree modif else toggle');

				}
				if (index === total_items - 1) {
					// console.log('LAST index = ' + index);
					i_type_trig = 0;
					// console.log('i_type_trig after last items =' + i_type_trig);
					tree_modif = 1;
					// console.log('tree_modif after last items =' + tree_modif);
					tree_moove = 1;
					// console.log('ТРИМУВ в конце = ' +tree_moove);


				} else {
					// console.log('It is not last item');
					// console.log('Current item = ' + index);
				}
			}

			// console.log('i_type_trig outside loop =' + i_type_trig);
		});

	});

	$('.sidebarMenuInner .main-item').on('click', function () {
		if ($(window).width() < 768) {
			$('#sidebarMenu').toggleClass('slide-mm');
			console.log('click main');
		}
	});


	$('#back_btn_mnu').on('click', function () {
		// if ( $("#sidebarMenu").hasClass("slide-mm") ) {

		// 	alert("У элемента задан класс slide-mm!");

		// }
		// $('#sidebarMenu').toggleClass('slide-mm');
		// console.log('click back');
	});

	// 	/*Inmut multirange*/

var lowerSlider = document.querySelector('#range-lower');
var upperSlider = document.querySelector('#range-upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};

	// var lowerSlider = document.querySelector('#range-lower').value;
	// var upperSlider = document.querySelector('#range-upper').value;
	// document.querySelector('#one').value= lowerSlider;
	// document.querySelector('#two').value= upperSlider;


});

document.addEventListener('DOMContentLoaded', function () {
	var container = document.querySelector('.input-range-container');
	var rangeLower = document.querySelector('input[name="range-lower"]');
	var rangeUpper = document.querySelector('input[name="range-upper"]');
	var trackerBetween = document.querySelector('.input-range-tracker-between');
	var minValue = 0;
	var maxValue = Number(rangeUpper.getAttribute('max'));

	var containerHoverOnPercent = 0;

	var updateTrackerBetween = function updateTrackerBetween() {
		var lowerValue = Number(rangeLower.value);
		var upperValue = Number(rangeUpper.value);
		trackerBetween.style.width = (upperValue - lowerValue) / maxValue * 100 + '%';
		trackerBetween.style.left = lowerValue / maxValue * 100 + '%';
	};
	updateTrackerBetween();

	var moveAppropriateThumbToUpper = function moveAppropriateThumbToUpper() {
		var lowerValue = Number(rangeLower.value);
		var upperValue = Number(rangeUpper.value);
		var closeValue = maxValue / 10;

		if (upperValue - lowerValue < closeValue && upperValue > maxValue * .9) {
			rangeLower.classList.add('display-upper');
			rangeUpper.classList.remove('display-upper');
		} else if (upperValue - lowerValue < closeValue && lowerValue < maxValue * .1) {
			rangeLower.classList.remove('display-upper');
			rangeUpper.classList.add('display-upper');
		} else {
			var middleValue = lowerValue + (upperValue - lowerValue) / 2;
			if (containerHoverOnPercent < middleValue / maxValue) {
				rangeLower.classList.add('display-upper');
				rangeUpper.classList.remove('display-upper');
			} else {
				rangeLower.classList.remove('display-upper');
				rangeUpper.classList.add('display-upper');
			}
		}
	};

	['mouseenter', 'mousemove', 'touchstart', 'touchmove'].forEach(function (eventName) {
		container.addEventListener(eventName, function (event) {
			containerHoverOnPercent = event.offsetX / event.target.clientWidth;
			moveAppropriateThumbToUpper();
		}, false);
	});

	rangeLower.addEventListener('input', function (event) {
		var lowerValue = Number(event.target.value);
		var upperValue = Number(rangeUpper.value);
		if (lowerValue < minValue) {
			event.target.value = minValue;
		} else if (lowerValue > upperValue) {
			event.target.value = upperValue;
		}

		moveAppropriateThumbToUpper();
		updateTrackerBetween();
	}, false);

	rangeUpper.addEventListener('input', function (event) {
		var lowerValue = Number(rangeLower.value);
		var upperValue = Number(event.target.value);
		if (upperValue > maxValue) {
			event.target.value = maxValue;
		} else if (upperValue < lowerValue) {
			event.target.value = lowerValue;
		}

		moveAppropriateThumbToUpper();
		updateTrackerBetween();
	}, false);
	
});