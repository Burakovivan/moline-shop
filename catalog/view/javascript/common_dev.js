function ChekcProductQuantity(el,isCart){
	var value = parseInt(el[0].value) || 0;
	var min = el.attr('min') || false;
	var max = el.attr('max') || false;
	if (value < min && min) {
		el[0].value = min;
		if(isCart){
			alert(min + "шт. это минимальное количество для заказа!");
		}
	}
	if (value > max && max) {
		el[0].value = max;
		alert(max + "шт. это максимальное количество для заказа!");
	}
	return el[0].value;
}
$(function () {

	$.fn.inputNumber = function (isCart) {

		this.each(function () {
			init($(this));
		});

		function init(el) {
			el.blur(function () {
				ChekcProductQuantity(el,isCart);
			});
			if (isCart) {
				return;
			}
			var els = {};
			els.dec = el.parent().find('.input-number-decrement');
			els.inc = el.parent().find('.input-number-increment');
			els.dec.on('click', decrement);
			els.inc.on('click', increment);


			function decrement() {
				var min = el.attr('min') || false;
				var value = parseInt(el[0].value) || 0;
				var quantityInPack = parseInt(el.parents('.item_wrap').find('.quantitiy_in_pack').val()) || parseInt($('.input_number_wrap').find('.quantitiy_in_pack').val()) || 1;
				value -= quantityInPack;
				if (!min || value >= min) {
					el[0].value = value;
				}
			}

			function increment() {
				var max = el.attr('max') || false;
				var value = parseInt(el[0].value) || 0;
				var quantityInPack = parseInt(el.parents('.item_wrap').find('.quantitiy_in_pack').val()) || parseInt($('.input_number_wrap').find('.quantitiy_in_pack').val()) || 1;
				value += quantityInPack;
				if (!max || value <= max) {
					el[0].value = value;
				}
			}
		}
	}

	$('.item_wrap .input-number').inputNumber();
	/* input counter end */

	//for replaceing path for big img

	$(".small_img").click(function (e) {
		e.preventDefault();
		var src = $(this).find('img').attr('src');
		console.log(src);
		$(".main_img").find('img').attr('src', src);
		console.log(src);
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

	// product tabs

	$(".tab-content").hide();
	$(".tab-content:first").show();


	$(".tab").click(function () {

		$(".tab-content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();

		$(".tab").removeClass("active");
		$(this).addClass("active");

	});
	//end of tabs

	$('.select > select').addClass('checkOutSelector');
	$('.checkOutSelector').css('outline', '1px solid black');
	$('.select').toggleClass('select_ch');

//--btn-buy-absent--//

function show_modal(){
	var tmp_popup = '<div class="popup-window"></div>';
	// $(tmp_popup).insertAfter($('.overlay'));
	$(tmp_popup).insertBefore($('.s_product'));

	setTimeout(function(){
		$('.popup-window').toggleClass('active');
		$('.popup-window').toggleClass('show_pop');
	},200);
	setTimeout(function(){
		$( ".popup-window" ).append("<div class='window-container'></div>");
		$( ".window-container" ).append('<svg id="modal_exit" width="21px" height="21px" viewBox="0 0 21 21" version="1.1"><title>EBA93EB7-E714-432B-AF2F-5DA3BB321A8D</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="1.1.Produkt-ended---Large-desktop" transform="translate(-875.000000, -499.000000)" fill="#9E9E9E"><path d="M895.506534,517.102174 L893.102538,519.503833 C892.783237,519.823175 892.342548,520 891.899221,520 C891.458532,520 891.015205,519.823175 890.698542,519.503833 L885.5,514.307277 L880.304097,519.503833 C879.987434,519.823175 879.544107,520 879.103418,520 C878.66009,520 878.219402,519.823175 877.900101,519.503833 L875.496105,517.102174 C875.176803,516.782833 875,516.342089 875,515.898706 C875,515.457962 875.176803,515.014578 875.496105,514.697876 L880.694647,509.49868 L875.496105,504.299485 C875.176803,503.982782 875,503.539399 875,503.098655 C875,502.655272 875.176803,502.214528 875.496105,501.895187 L877.900101,499.493528 C878.219402,499.174186 878.66009,499 879.103418,499 C879.544107,499 879.987434,499.174186 880.304097,499.493528 L885.5,504.690084 L890.698542,499.493528 C891.015205,499.174186 891.458532,499 891.899221,499 C892.342548,499 892.783237,499.174186 893.102538,499.493528 L895.506534,501.895187 C895.825836,502.214528 896,502.655272 896,503.098655 C896,503.539399 895.825836,503.982782 895.506534,504.299485 L890.307992,509.49868 L895.506534,514.697876 C895.825836,515.014578 896,515.457962 896,515.898706 C896,516.342089 895.825836,516.782833 895.506534,517.102174" id="Fill-1"></path></g></g></svg>');
		$( ".window-container" ).append('<div class="top_line">	<div class="modal_name ">Введите телефон</div><div class="modal_message hidden">Ваша заявка принята. Мы свяжемся с Вами как только этот товар появится на складе.</div></div>');
		$( ".window-container" ).append('	<input type="text" name="phone" placeholder="Телефон" class="" id="mod_phone"><button class="primary_btn" id="m_ord_btn">Оформить</button><button class="primary_btn hidden" id="m_ok_btn">Ок</button>');
	}, 300);
	setTimeout(function(){
		$( ".window-container" ).toggleClass('active');
	},400);
}
$('.link_f_popup').click(function(){
	show_modal();
});
$('.btn_absent').click(function(){
	show_modal();
});

function exit_popup(){
	$( ".popup-window" ).toggleClass('show_pop');
	setTimeout(function(){
		$( ".popup-window" ).remove();
	},400);
}
$(document).on('click', '#modal_exit', function () {
	$(this).parent().toggleClass('active');
	setTimeout(function(){
		exit_popup();
	}, 300);
});

$(document).on('click', '#m_ok_btn', function () {
	exit_popup();
});

$(document).on('click', '#m_ord_btn', function () {
	if( $('#mod_phone').val().length === 0 ){
		console.log('empty input');
	}else{
		$('#mod_phone').toggleClass("hidden");
		$('.modal_name').toggleClass("hidden");
		$('.modal_message').toggleClass("hidden");
		$('#m_ok_btn').toggleClass("hidden");
		$(this).toggleClass("hidden");
	}
});
//--btn-buy-absent-end-//

	/*FAQ*/
	$('dd').hide();

	$('dl').on("click", 'dt', function () {
		if ($(this).next().css("display") != "none") {
			$(this).next().slideUp(300);
		} else {
			$('dd')
				.slideUp(300);

			$(this)
				.next()
				.slideDown(300);

		}
	});
	$('.close_faq_btn_wrap').on("click", function () {
		$(this).parent().slideUp(300);
	});
	/*end FAQ */

	/*Cart*/
	$('.cart-wrap').on('click', function () {
		// $('.cart').toggleClass('show_cart');
		$("#cart_container").load("index.php?route=checkout/cart/index_partial", function () {
			$('.cart').fadeIn("slow");
			initCommonCart();
			$('.wrap_cart').fadeIn("slow");
		})

		console.log('click +');
	});
	/*end Cart*/

	/*Slide down*/
	$(".sb_block_name").click(function () {
		$(this).parent().find('.block_info').toggleClass('closed');
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

		//Seo block
	$(".more_seo").click(function () {
		console.log('click more');
		$(this).closest(".clump").find(".detail_seo").toggleClass("closed");
		$(this).closest(".clump").find(".slider_link_seo:first-child").toggleClass("hide_seo_link");
		if ($(window).width() > 768) {
			$(this).closest(".clump").find(".slider_link_seo").toggleClass("less_seo");
			$(this).closest(".clump").find(".slider_link_seo").toggleClass("more_seo");
		}
	});
	$(".less_seo").click(function () {
		console.log('click more');
		$(this).closest(".clump").find(".detail_seo").toggleClass("closed");
		$(this).closest(".clump").find(".slider_link_seo:first-child").toggleClass("hide_seo_link");
		// $(this).closest(".clump").find(".slider_link_seo").toggleClass("less_seo");
		// $(this).closest(".clump").find(".slider_link_seo").toggleClass("more_seo");
	});
	
	$('.show_cat').on('click', function () {
		filter = [];
		$('input[name^=\'filter\']').each(function (idx, element) {
			if ($(element).prop('checked')) {
				filter.push(this.value);
			}
		});
		var action = $('#filter_action').data('action');
		var price_range = {
			price_from: $('input[name=price_from]').val(),
			price_to: $('input[name=price_to]').val(),
		};
		var url = action;
		url += (filter.length ? ('&filter=' + filter.join(',')) : '');
		if (!(parseFloat(price_range.price_from) == parseFloat($('input[name=range-lower]').attr('min')) && parseFloat(price_range.price_to) == parseFloat($('input[name=range-upper]').attr('max')))) {
			url += "&price_from=" + price_range.price_from + "&price_to=" + price_range.price_to;
		}
		location = url;
	});
	$('.filter_show_btn_exit').click(function () {
		console.log('exit');
	});
	$('.styled-checkbox').click(function () {
		if(!$(this).prop('checked')){
			console.log('Checked!!');
			$('.show_cat').addClass('checked!');
			$('.show_cat').hide();
			
		}else{
			console.log('Unchecked!!');
			$(this).parent().find('.show_cat').show().css('right', '-184px');
			$(this).parent().find('.show_cat').find('svg').show();
		}
		// $('.show_cat').hide();
		// $(this).parent().find('.show_cat').show().css('right', '-184px');
		// $(this).parent().find('.show_cat').find('svg').show().hide();
		// $(this).parent().find('.show_cat').find('svg').show();
		
		// setTimeout(function () {
		// 	$(this).parent().find('.show_cat').find('svg').hide();
		// }, 3000);
		// Instead of .addClass("newclass")
		// $("#item").attr("class", "oldclass newclass");
		// Instead of .removeClass("newclass")
		// $("#item").attr("class", "oldclass");
		// }

	});

	$('.category-more-btn').click(function () {
		const urlParams = new URLSearchParams(window.location.search);
		var button = $(this);
		var page = button.data('page');
		urlParams.set('page', (parseInt(page) || 0) + 1);
		urlParams.set('partial', 'Y');
		var url = "";
		if (window.location.href.match(/.*(\?.*)/)) {
			url = window.location.href.replace(/.*(\?.*)/, "?" + urlParams.toString());
		} else {
			url = window.location.href + "?" + urlParams.toString();
		}
		$.get(url, function (data) {
			data = JSON.parse(data);
			button.data('page', data.current_page);
			if (data.least > 0) {
				$("#least").html(data.least)
			} else {
				$(".category-more-btn").remove();
			}
			var nextPageNavElement = $('.c_pagination ul li[data-page=' + data.current_page + ']');
			nextPageNavElement.addClass('active');
			// var content = nextPageNavElement.find('a').text();
			// nextPageNavElement.find('a').remove();
			// nextPageNavElement.html('<span>' +content +'</span>');
			$(".block_products").append(data.html);
		});
	});

	// //sMenu


	$('.sidebarMenuInner .main-item').click(function (e) {
		// e.preventDefault();
		// $(this).find('.inner-list').addClass('display-on');
		// $('.sidebarMenuInner .main-item').removeClass('active');
		// $(this).addClass('active');
		console.log('li ------ click');
	});


	$('#openSidebarMenu').on('click', function () {
		$('.overlay').toggleClass('show');
	});
	//checkout
	$("button.submit_ord").click(function(e){
e.preventDefault();
	});
	//DropDownMenu
	if ($(window).width() < 992) {
		$('#white_menu li:nth-child(n+6)').toggleClass('hidden-li');
	}
	if ($(window).width() < 1200) {
		$('#white_menu li:nth-child(n+8)').toggleClass('hidden-li');
	}
	if ($(window).width() < 768) {
		$('#white_menu li').toggleClass('hidden-li');
	}

	$('.drop_down_button').on('click', function () {

		if ($('.drop-down-list-wrap .drop-down-list-c li').length > 0) {

			$('.drop-down-list-wrap').removeClass('active');
			lis = $('.drop-down-list-wrap .drop-down-list-c li');
			// $(lis).appendTo('#white_menu');
			console.log(lis);
			$(lis).appendTo('#white_menu');
		} else {
			if ($('#white_menu li.hidden-li').length > 0) {
				var lis = $('#white_menu li.hidden-li');
				console.log(lis);
				$('.drop-down-list-wrap').addClass('active');

				$(lis).appendTo('.drop-down-list-wrap .drop-down-list-c');

				// $('.drop-down-list-wrap .drop-down-list-c li').attr('class', '');
				// $('.drop-down-list-wrap .drop-down-list-c li a').attr('class', '');
			}
		}
	});



	$('#openSidebarMenu').parent().on('click', function () {
		// $('#openSidebarMenu').parent(".mnu_button_wrap").parent().on('click', function () {
		// 	$('#openSidebarMenu')[0].checked =  !$('#openSidebarMenu')[0].checked ;
		// $('.overlay').toggleClass('show');
		console.log('this click !!!!');
	});

	var list_height = $('.sidebarMenuInner').height();
	$('.sidebarMenuInner .main-item').find('.inner-list-wrap').css('min-height', list_height);
	console.log(list_height);
	var list_height_main = $('#sidebarMenu_dock .sidebarMenuInner').height();
	$('#sidebarMenu_dock .sidebarMenuInner .main-item').find('.inner-list-wrap').css('min-height', list_height);
	console.log(list_height_main);

	$('.sidebarIconToggle').on('click', function () {
		if (!$('#openSidebarMenu')[0].checked) {
			$('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'inline-block');
		} else {
			console.log('unchecked');
			$('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'none');
		}
	});

	$('.overlay').on('click', function () {
		$('.slide_mobile_filters').toggleClass('f_active_pos');

		// $('.sidebarMenuInner .main-item').removeClass('active');
		$('#openSidebarMenu').click();
	});

	// $('.sidebarMenuInner .main-item').on('click', function () {
	// 	if ($(window).width() < 768) {
	// 		$('#sidebarMenu').toggleClass('slide-mm');
	// 		console.log('click main');
	// 	}
	// });

//For mobile menu
if ($(window).width() < 769 ) {
	$('.sidebarIconToggle').on('click', function () {
		if(!$('#openSidebarMenu')[0].checked){
			// $('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'inline-block');
		}else{
			console.log('unchecked');
			// $('.sidebarMenuInner .main-item .inner-list-wrap').css('display', 'none');
			$('#sidebarMenu').removeClass('slide-mm');
			$('.sidebarMenuInner .main-item').removeClass('mobile-active-item');
		}
	});

	$('.sidebarMenuInner .main-item > a').on('click', function(e){
		e.preventDefault();
		$('#sidebarMenu').addClass('slide-mm');
		console.log('SLIDE!!');
	});

	$('.sidebarMenuInner .main-item a').on('click', function(e){
		// e.preventDefault();
		console.log('mobile click');
		$(this).parent().addClass('mobile-active-item');
		$('.mobile-active-item').find('.inner-list-wrap').addClass('mobile-show');
		
		
	});
	$('.back_b').on('click', function(){
		$('#sidebarMenu').removeClass('slide-mm');
		$(this).parent().removeClass('mobile-active-item');
		$(this).closest('.inner-list-wrap').toggleClass('this');
		$(this).closest('.inner-list-wrap').removeClass('mobile-show');
		$(this).closest('.inner-list-wrap').parent().removeClass('mobile-active-item');
	});
	console.log('click main');
}
//end of mobile menu

	//second level menu	
	// $(".sidebarMenuInner .main-item").hover(function() {
	// // 
	// 	// $(this).find('.inner-list').addClass('display-on');
	// 	console.log('hover turn on');
	// });
	// $(".sidebarMenuInner .main-item").mouseleave(function() {
	// 	// $(this).find('.inner-list').removeClass('display-on');
	// 	console.log('hover turn out');
	// });			
	//end of second level menu

	//end sMenu

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




	var i_type_trig = 1;
	var tree_modif = 0;
	var tree_moove = 0;

	$('#type_grid').on('click', function () {

		console.log('START type grid');
		if (i_type_trig == 0) {
			// $(this).toggleClass('active');
			// $('#type_list').toggleClass('active');
			$(this).attr("class", "active");
			$("#type_list").attr("class", "");

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


			if ($('.item_wrap').find('.limit').length > 0) {
				$('.limit').toggleClass('ct_hide');
				console.log('TYPE GRID limit > 0 TOGGLE');

			}
			else {
				console.log('TYPE GRID limit > 0 else');
			}
			if ($('.item_wrap').find('.ost').length > 0) {
				$('.ost').toggleClass('ct_hide');
				console.log('TYPE GRID ost > 0 TOGGLE');
			}
			else {
				console.log('TYPE GRID ost > 0 else');
			}

		}

		var total_items = $('.item_wrap').length;

		$('.item_wrap').each(function (index, value) {
			console.log('Begin of ' + index + 'item');
			console.log('index = ' + index + value);

			//for other item status
			$(value).find('.message_wrap').toggleClass('col-xs-12 col-sm-5');
			//end of changing other item status

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

			//for other item status
			if ($(value).hasClass('absent')) {
				// $(value).find('.message_wrap').toggleClass('col-xs-12 col-sm-5');
			}
			if ($(value).hasClass('coming_soon')) {
				// $(value).toggleClass('border-test');		
				$(value).find('.message_wrap').attr("class", "message_wrap");

			}
			if ($(value).hasClass('under_the_order')) {

				$(value).find('.message_wrap').attr("class", "message_wrap");
				// $(value).find('.btn_order_wrap').parent().toggleClass('border-test');
				var btn_ord_tmp = $(value).find('.btn_order_wrap');
				$(value).find('.btn_order_wrap').parent().toggleClass('col-xs-12 col-sm-4 col-md-3 col-sm-offset-1 col-md-offset-1 pln-md prn-md');

				// $(btn_tmp).insertAfter($(value).find(".counter_wrap"));					
			}
			//end of changing other item status
		});
	});

	$('#type_list').on('click', function () {

		if (i_type_trig == 1) {

			// $(this).toggleClass('active');
			// $('#type_grid').toggleClass('active');
			$(this).attr("class", "active");
			$("#type_grid").attr("class", "");

			// Instead of .addClass("newclass")
			// $("#item").attr("class", "oldclass newclass");
			// Instead of .removeClass("newclass")
			// $("#item").attr("class", "oldclass");

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

					if ($(value).find('.inner_wrap').length > 0) {
						// console.log('inner wrap EXIST++++++++++++++++++++');
					} else {
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


					if ($(value).find('.limit').length > 0) {
						$(value).find('.limit').toggleClass('ct_hide');
						console.log('TYPE LIST limit > 0 TOGGLE');

					}
					else {
						console.log('TYPE LIST limit > 0 else');
						// $(value).find('.inner_wrap').prepend(lim);
					}

					if ($(value).find('.ost').length > 0) {
						// $('.ost').toggleClass('ct_hide');
						$(value).find('.ost').toggleClass('ct_hide');
						console.log('TYPE LIST ost > 0 TOGGLE');

					}
					else {
						console.log('TYPE LIST ost > 0 else');
						// $(value).find('.inner_wrap').append(ost);
					}

					var retail_price = $(value).find('.retail_price');
					$(value).find('.retail_price').remove();

					$(value).find('.p_wrap').append(retail_price);


					if ($(value).find('.retail_price').length > 0) {
						$(value).find('.retail_price').toggleClass('ct_hide');
					} else {
						// $(value).find('.p_wrap').append(retail_price);
					}

				}
				else {
					// $(value).find('.ost').toggleClass('ct_hide');
					console.log('tree modif else toggle 22');

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

				//for other item status
				if ($(value).hasClass('absent')) {
					$(value).find('.message_wrap').toggleClass('col-xs-12 col-sm-5');
				}
				if ($(value).hasClass('coming_soon')) {
					// $(value).toggleClass('border-test');		
					$(value).find('.message_wrap').attr("class", "message_wrap col-sm-5");
				}
				if ($(value).hasClass('under_the_order')) {

					// $(value).toggleClass('border-test');

					// $(value).find('.message_wrap').toggleClass('');
					$(value).find('.message_wrap').attr("class", "message_wrap");

					var tmp_massege = $(value).find('.message_wrap');
					$(value).find('.message_wrap').remove();
					$(tmp_massege).appendTo($(value).find('.col-xs-7.col-sm-4'));
					// $(value).find('.message_wrap').remove();


					// $(value).find('.btn_order_wrap').parent().toggleClass('border-test');
					var btn_ord_tmp = $(value).find('.btn_order_wrap');
					$(value).find('.btn_order_wrap').parent().toggleClass('col-xs-12 col-sm-4 col-md-3 col-sm-offset-1 col-md-offset-1 pln-md prn-md');

					// $(btn_tmp).insertAfter($(value).find(".counter_wrap"));					
				}
				//end of changing other item status
			}

			// console.log('i_type_trig outside loop =' + i_type_trig);
		});

	});

	$(".comment_ord").click(function () {
		if ($("#comment-order:visible").length) {
			$("#comment-order").hide();
		}
		else {
			$("#comment-order").show();
		}
	});

	// $('#back_btn_mnu').on('click', function () {
	// 	// if ( $("#sidebarMenu").hasClass("slide-mm") ) {

	// 	// 	alert("У элемента задан класс slide-mm!");

	// 	// }
	// 	// $('#sidebarMenu').toggleClass('slide-mm');
	// 	// console.log('click back');
	// });

	// 	/*Inmut multirange*/

	//delivery start
	$(".new_post_details #delivery_city").change(function () {

		if ($('.sel_2 .selectize-control').length > 0) {

			console.log('selectize exist');
			$(".sel_2 > .selectize-control").remove();
			$(".sel_2 > select").remove();
			var select = '<select name="delivery_dept" id="delivery_dept" class="checkOutSelector new_post_delivery_dept"></select>';
			$(".new_post_details .sel_2 ").append(select);
			$(".sel_2").addClass('remake');
		}
		getNPDeptList();

		setTimeout(function () {
			$('.new_post_delivery_dept').selectize();
			// $('.delivAuto_delivery_city').selectize();										
		}, 300);
	});
	$(".delivAuto_details #delivery_city").change(function () {

		// $('.delivAuto_details #delivery_dept').addClass('delivAuto_delivery_dept');
		// $('.delivAuto_delivery_dept').selectize();
		if ($('.sel_1 .selectize-control').length > 0) {

			console.log('selectize exist1');
			$(".sel_1 > .selectize-control").remove();
			$(".sel_1 > select").remove();
			var select1 = '<select name="delivery_dept" id="delivery_dept" class="checkOutSelector delivAuto_delivery_dept"></select>';
			$(".delivAuto_details .sel_1 ").append(select1);
			$(".sel_1").addClass('remake1');
		}
		getDADeptList();

		setTimeout(function () {
			$('.delivAuto_delivery_dept').selectize();
			// $('.delivAuto_delivery_city').selectize();										
		}, 300);


	});
	//


	$('input[type=radio][name=delivery]').change(function () {
		$("[class$=_details]").hide();
		var deliveryType = $('input[type=radio][name=delivery]:checked').val();
		$("." + deliveryType + "_details").show();
		if (deliveryType == "new_post") {
			if ($(".new_post_details #delivery_city").length ? !$(".new_post_details #delivery_city")[0].options.length : false) {
				getNPCityList();
				$('.new_post_details > div:nth-child(2) .select').addClass('sel_2');
				$('.new_post_details #delivery_city').addClass('new_post_delivery_city');
				$('.new_post_details #delivery_dept').addClass('new_post_delivery_dept');

				setTimeout(function () {
					$('.new_post_delivery_city').selectize();
				}, 1000);
			}
		}
		if (deliveryType == "delivAuto") {
			if ($(".delivAuto_details #delivery_city").length ? !$(".delivAuto_details #delivery_city")[0].options.length : false) {
				getDACityList();

				console.log('tttt');
				$('.delivAuto_details > div:nth-child(2) .select').addClass('sel_1');
				$('.delivAuto_details #delivery_city').addClass('delivAuto_delivery_city');
				$('.delivAuto_details #delivery_dept').addClass('delivAuto_delivery_dept');

				setTimeout(function () {
					$('.delivAuto_delivery_city').selectize();
				}, 5000);
			}
		}
	});
	//delivery end


	var lowerSlider = document.querySelector('#range-lower');
	var upperSlider = document.querySelector('#range-upper');
	if (!lowerSlider || !upperSlider) {
		return;
	}
	document.querySelector('#two').value = upperSlider.value;
	document.querySelector('#one').value = lowerSlider.value;

	var lowerVal = parseInt(lowerSlider.value);
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
		document.querySelector('#two').value = this.value
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
		document.querySelector('#one').value = this.value
	};

});

function updateCommonCart(idList, callback = null) {
	idList.forEach(function (id, idx, array) {
		var product_wrapper = $("[data-cart-id=" + id + "]");
		if (product_wrapper.length) {
			var quantity = product_wrapper.find("input[name=quantity]").val();
			cart.update(id, quantity, "get", idx == array.length - 1 ? callback : null);
		}
	});
}
function updateCheckoutCart(e, type) {
	e.preventDefault();
	
	var quantity = $(e.currentTarget).parents(".item-test").find(".input-number").val();
	if (type == "inc") {
		quantity++;
	}
	if (type == "dec") {
		quantity--;
	}
	$(e.currentTarget).parents(".item-test").find(".input-number").val(quantity);
	var element = $(e.currentTarget).parent().find('.input-number');
	var newQuantity = ChekcProductQuantity(element, true);
	if(newQuantity != quantity)
	{
		return;
	}
	$(".wrap_cart_wrapper").show();
	$(".wrap_cart_wrapper").css("background", "rgba(50, 50, 50, 0.3) url(img/loader.svg) no-repeat center");
	$(".wrap_cart_wrapper").css("position", "absolute");
	quantity = newQuantity;
	var id = $(e.currentTarget).parents(".item-test").data("cart-id");
	cart.update(id, quantity, "get", function (json) {
		json.products.forEach(function (el) {
			$(".item-test[data-cart-id=" + el.cart_id + "]").find(".input-number").val(el.quantity);
			$(".item-test[data-cart-id=" + el.cart_id + "]").find(".total_by_item").html(el.total_formated);
		});
		$(".cost").html(json.cost_formated);
		setTimeout(function () {
			$(".wrap_cart_wrapper").hide();
			$(".wrap_cart_wrapper").css("background", "none");
			$(".wrap_cart_wrapper").css("position", "unset");
		}, 500);
	});
}
function RemoveCommonCart(key) {
	$(".wrap_cart_wrapper").show();
	$(".wrap_cart_wrapper").css("background", "rgba(50, 50, 50, 0.3) url(img/loader.svg) no-repeat center");
	$(".wrap_cart_wrapper").css("position", "absolute");
	cart.remove(key, function (json) {
		// json.products.forEach(function (el) {
		// 	$(".item-test[data-cart-id=" + el.cart_id + "]").find(".input-number").val(el.quantity);
		// 	$(".item-test[data-cart-id=" + el.cart_id + "]").find(".total_by_item").html(el.total_formated);
		// });
		$(".item-test[data-cart-id=" + json.removed_key + "]").remove();
		if ($(".item-test").length == 0) {
			$('#exit_cart').click();
		}
		$(".cost").html(json.cost_formated);
		setTimeout(function () {
			$(".wrap_cart_wrapper").hide();
			$(".wrap_cart_wrapper").css("background", "none");
			$(".wrap_cart_wrapper").css("position", "unset");
		}, 500);
	});

}
function initCommonCart() {
	$('.input-number').inputNumber(true);
	$('.cart').on('click', function () {
		// $('.cart').fadeOut("slow");
		// $('.wrap_cart').fadeOut("slow");

		// console.log('click -- ');
	});
	$(".make_order").click(function (e) {
		e.preventDefault();
		var link = $(this).find('a').attr("href");
		window.location = link;;
	});
	$('#exit_cart').on('click', function () {
		$('.cart').fadeOut("slow");
		$('.wrap_cart.partial').fadeOut("slow");
		console.log('click - ');
	});
	$(".wrap_cart").find(".input-number-increment, .input-number-decrement").unbind('click')
	$(".wrap_cart").find(".input-number-increment").on("click", function (e) {
		
		updateCheckoutCart(e, "inc");
	});

	$(".wrap_cart").find(".input-number-decrement").on("click", function (e) {
	
		updateCheckoutCart(e, "dec");
	});

	$(".wrap_cart").find(".input-number").on("blur", function (e) {
		updateCheckoutCart(e);
	});
	$(".wrap_cart").find(".input-number").on("keydown", function (e) {
		if (e.keyCode == 13) {
			$(e.currentTarget).blur();
			// updateCheckoutCart(e)
		}
	});

	$('.lets_buy').on('click', function () {
		$('.cart').fadeOut("slow");
		$('.wrap_cart').fadeOut("slow");

		updateCommonCart(cart_idList);
		console.log('click - ');
	});

}


function getButtonById(product_id) {
	return $('.item_wrap.product[data-product-id=' + product_id + '] .btn_buy');
}
function getNPCityList(city) {
	var request = {
		apiKey: '4ce2347821d2e9e93c08b5683631764e',
		modelName: "Address",
		calledMethod: "getCities",
	}
	$.ajax({
		url: 'https://api.novaposhta.ua/v2.0/json/',
		data: JSON.stringify(request),
		method: "POST",
		success: function (response) {
			if ($(".new_post_details #delivery_city").length) {
				$(".new_post_details #delivery_city").empty();
				response.data.forEach(function (city) {
					$(".new_post_details #delivery_city").append(new Option(city.DescriptionRu, city.Ref, false, false));
				});
				$(".new_post_details #delivery_city").change();
			}
		}
	})
}
function getNPDeptList(city) {
	var request = {
		apiKey: '4ce2347821d2e9e93c08b5683631764e',
		modelName: "Address",
		calledMethod: "getWarehouses",
		methodProperties: {
			Language: "ru",
			CityRef: $(".new_post_details #delivery_city").val()
		},
	}
	$.ajax({
		url: 'https://api.novaposhta.ua/v2.0/json/',
		data: JSON.stringify(request),
		method: "POST",
		success: function (response) {
			if ($(".new_post_details #delivery_dept").length) {
				$(".new_post_details #delivery_dept").empty();
				response.data.forEach(function (city) {
					$(".new_post_details #delivery_dept").append(new Option(city.DescriptionRu, city.Ref, false, false));
				});
				if (!$(".new_post_details #delivery_dept")[0].options.length) {
					$(".new_post_details #delivery_dept").append(new Option("Нет отделений", "", true, true));
				}
				$(".new_post_details #delivery_dept")[0].options[0].selected = true;
			}


		}
	})
}
function getDACityList(city) {
	var request = {
		apiKey: '4ce2347821d2e9e93c08b5683631764e',
		modelName: "Address",
		calledMethod: "getCities",
	}
	$.ajax({
		url: 'https://www.delivery-auto.com/api/v4/Public/GetAreasList?culture=ru-RU&fl_all=true&country=1',//&regionId={regionId}',
		method: "Get",
		success: function (response) {
			if ($(".delivAuto_details #delivery_city").length) {
				$(".delivAuto_details #delivery_city").empty();
				response.data = response.data.filter(function (x) { return x.IsWarehouse; });
				response.data.forEach(function (city) {
					$(".delivAuto_details #delivery_city").append(new Option(city.name, city.id, false, false));
				});
				$(".delivAuto_details #delivery_city").change();
			}
		}
	})
}
function getDADeptList(city) {

	$.ajax({
		url: 'https://www.delivery-auto.com/api/v4/Public/GetWarehousesListInDetail?culture=ru-RU&CityId=' + $(".delivAuto_details #delivery_city").val() + '&country=1',
		method: "Get",
		success: function (response) {
			if ($(".delivAuto_details #delivery_dept").length) {
				$(".delivAuto_details #delivery_dept").empty();
				response.data.sort(function (a, b) { return a > b });
				response.data.forEach(function (city) {
					var type = city.WarehouseType == 2 ? "Почтомат" : city.WarehouseType == 3 ? "Склад с наложеным платежом" : city.WarehouseType == 0 ? "Склад" : "";
					$(".delivAuto_details #delivery_dept").append(new Option(city.name + ", " + type + ", " + city.address, city.id, false, false));
				});
				if (!$(".delivAuto_details #delivery_dept")[0].options.length) {
					$(".delivAuto_details #delivery_dept").append(new Option("Нет отделений", "", true, true));
				}
				$(".delivAuto_details #delivery_dept")[0].options[0].selected = true;
			}
		}
	})
}

document.addEventListener('DOMContentLoaded', function () {
	var container = document.querySelector('.input-range-container');
	var rangeLower = document.querySelector('input[name="range-lower"]');
	var rangeUpper = document.querySelector('input[name="range-upper"]');
	var trackerBetween = document.querySelector('.input-range-tracker-between');
	if (!rangeLower || !rangeUpper || !trackerBetween) {
		return;
	}
	var minValue = 0;
	var maxValue = Number(rangeUpper != null ? rangeUpper.getAttribute('max') : 0);

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