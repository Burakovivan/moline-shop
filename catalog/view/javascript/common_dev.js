$(function () {

	window.inputNumber = function (el) {

		var min = el.attr('min') || false;
		var max = el.attr('max') || false;

		var els = {};

		els.dec = el.prev();
		els.inc = el.next();

		el.each(function () {
			init($(this));
		});

		function init(el) {

			els.dec.on('click', decrement);
			els.inc.on('click', increment);

			function decrement() {
				var value = el[0].value;
				value--;
				if (!min || value >= min) {
					el[0].value = value;
				}
			}

			function increment() {
				var value = el[0].value;
				value++;
				if (!max || value <= max) {
					el[0].value = value++;
				}
			}
		}
	}

	inputNumber($('.input-number'));
	/* input counter end */

	//for replaceing path for big img
	$(".small_img").click(function () {
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

	/*Slide down*/
	// $(".slider-show").click(function (){
	// 	$(this).closest(".clump").find(".detail").removeClass("closed");
	// });
	// $(".slider-close").click(function (){
	// 	$(this).closest(".clump").find(".detail").addClass("closed");
	// });

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

	$('#openSidebarMenu').on('click', function () {
		$('.overlay').toggleClass('show');
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
		$('.overlay').toggleClass('show');
	});

	var i_type_trig = 1;
	var tree_modif = 0;
	var tree_moove = 0;

	$('#type_grid').on('click', function () {

		console.log('START type grid');
		if (i_type_trig == 0) {
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


});
