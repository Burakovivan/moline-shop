$(function() {

	window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }

	inputNumber($('.input-number'));
	/* input counter end */

		//for replaceing path for big img
		$(".small_img").click(function() {
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

	$(".more").click(function (){
		$(this).closest(".clump").find(".detail").removeClass("closed");
		$(this).closest(".clump").find(".more").addClass("hide_link");
		$(this).closest(".clump").find(".less").removeClass("hide_link");
	});
	$(".less").click(function (){
		$(this).closest(".clump").find(".detail").addClass("closed");
		$(this).closest(".clump").find(".more").removeClass("hide_link");
		$(this).closest(".clump").find(".less").addClass("hide_link");
	});

	$(".header_slide").click(function (){
		$(this).closest(".clump").find(".detail").removeClass("closed");
		$(this).closest(".clump").find(".header_slide").addClass("hide_link");
		$(this).closest(".clump").find(".header_slide_inside").removeClass("hide_link");
	});
	$(".header_slide_inside").click(function (){
		$(this).closest(".clump").find(".detail").addClass("closed");
		$(this).closest(".clump").find(".header_slide").removeClass("hide_link");
		$(this).closest(".clump").find(".header_slide_inside").addClass("hide_link");
	});

	$(".sb_header_slide").click(function (){
		$(this).closest(".clump").find(".sb_detail").removeClass("closed");
		$(this).closest(".clump").find(".sb_header_slide").addClass("hide_link");
		$(this).closest(".clump").find(".sb_header_slide_inside").removeClass("hide_link");
	});
	$(".sb_header_slide_inside").click(function (){
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
	
		console.log(i_type_trig);
		if( i_type_trig == 0){
			$('.block_products').toggleClass('grid');
			$('.block_products').toggleClass('cat_row');

			$('.item_wrap').toggleClass('col-md-4 col-xs-6 col-sm-3');
			$('.item_wrap').toggleClass('col-xs-12');
			$('.item_wrap> div:first-child').toggleClass('top_info');

			$('.retail_price').toggleClass('ct_hide');

			var artcl_tmp = $('.itm_artic_wrap');
			// var retail_price = '<div class="retail_price">Рекомендуемая розничная цена<div class="price">12000,99 <span class="currency">грн</span></div>';


			$('.item_wrap > div:nth-child(1)').toggleClass('ct_hide');
			$('.itm_img_wrap').toggleClass('col-md-12');
			$('.itm_img_wrap').toggleClass('col-xs-5 col-sm-3');

			// $('.h_wrap').prepend(artcl_tmp);

			$('.h_wrap').toggleClass('col-md-12');
			$('.p_wrap').toggleClass('col-md-12');

			// $('.p_wrap').append(retail_price);

			$('.cw_wrp').toggleClass('col-md-6 col-sm-12  col-sm-12  pr-lg-right');
			$('.cw_wrp').toggleClass('col-xs-12 col-sm-5');

			var lim = '<div class="limit">от <span class="amount_lim">5 ед.</span><span class="hidd_mobile">минимальный заказ</span></div>';
			var ost = '<div class="ost col-sm-12 pln ">115 ед. остаток на складе</div>';

			$('.h_wrap').unwrap('.col-xs-7.col-sm-4');
			$('.p_wrap').insertAfter($(".h_wrap"));

			$('.counter_wrap').toggleClass('col-xs-6 col-sm-6 pln prn');
			// $('.counter_wrap').wrap('<div class="inner_wrap"></div>');

			$('.btn_buy_wrap_link').toggleClass('col-xs-6 col-sm-6 col-md-6 col-sm-12 pln prn  ');
			// $('.btn_buy_wrap_link').attr('class','col-xs-6 col-sm-6 pln prn btn_buy_wrap btn_buy_wrap_link ');
			
			$('.btn_buy_wrap_link').appendTo('.item_wrap > .row');

			$('.itm_artic_wrap').appendTo('.item_wrap > .top_info');
			$('.itm_artic_wrap').wrap('<div class="col-md-6 col-xs-7 prn"></div>');

			$('.limit').toggleClass('ct_hide');
			$('.ost').toggleClass('ct_hide');

			i_type_trig = 1;
			console.log(i_type_trig);

		}

		console.log(i_type_trig);
		
	});

	$('#type_list').on('click', function () {

	
		// var item = $('.item_wrap');
		$('.item_wrap').each(function() {
		// var item = $(this).find('h4').text();
		// console.log(item);

		if( i_type_trig == 1){
			$('.block_products').toggleClass('cat_row');
			$('.block_products').toggleClass('grid');
	
			$('.item_wrap').toggleClass('col-md-4 col-xs-6 col-sm-3');
			$('.item_wrap').toggleClass('col-xs-12');
			$('.item_wrap> div:first-child').toggleClass('top_info');
	
			var artcl_tmp = $('.itm_artic_wrap');
			var retail_price = '<div class="retail_price">Рекомендуемая розничная цена<div class="price">12000,99 <span class="currency">грн</span></div>';
	
	
			$('.item_wrap > div:nth-child(1)').toggleClass('ct_hide');
			$('.itm_img_wrap').toggleClass('col-md-12');
			$('.itm_img_wrap').toggleClass('col-xs-5 col-sm-3');
	
			var lim = '<div class="limit">от <span class="amount_lim">5 ед.</span><span class="hidd_mobile">минимальный заказ</span></div>';
			var ost = '<div class="ost col-sm-12 pln ">115 ед. остаток на складе</div>';
			
			$('.h_wrap').toggleClass('col-md-12');
			$('.p_wrap').toggleClass('col-md-12');
	
		
			$('.cw_wrp').toggleClass('col-md-6 col-sm-12  col-sm-12  pr-lg-right');
			$('.cw_wrp').toggleClass('col-xs-12 col-sm-5');
	
			
	
			if(tree_moove == 0){
				$('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
				$('.p_wrap').insertAfter($(".h_wrap"));
				$('.counter_wrap').wrap('<div class="inner_wrap"></div>');
				$('.btn_buy_wrap_link').appendTo('.inner_wrap');
				tree_moove = 1;
			}else{
				$('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
				$('.p_wrap').insertAfter($(".h_wrap"));
				var btn_tmp = $('.btn_buy_wrap');
				// console.log('btn_tmp =' + btn_tmp);
				$('.btn_buy_wrap').remove();
			
				$(btn_tmp).insertAfter($(".counter_wrap"));
	
			}
	
			if(tree_modif == 0){
				$('.h_wrap').prepend(artcl_tmp);
				console.log('Артикул добавлен');
				$('.p_wrap').append(retail_price);
				$('.inner_wrap').prepend(lim);
				$('.inner_wrap').append(ost);
				console.log(tree_modif);
	
				tree_modif = 1;
			}else{
				$('.itm_artic_wrap').remove();
				$('.retail_price').remove();
	
				$('.h_wrap').prepend(artcl_tmp);
				$('.p_wrap').append(retail_price);
	
				$('.limit').toggleClass('ct_hide');
				$('.ost').toggleClass('ct_hide');
			}
			
			console.log(tree_modif);
			
	
			$('.counter_wrap').toggleClass('col-xs-6 col-sm-6 pln prn');
		
	
			$('.btn_buy_wrap_link').toggleClass('col-xs-6 col-sm-6 col-md-6 col-sm-12 pln prn  ');
			// $('.btn_buy_wrap_link').attr('class','col-xs-6 col-sm-6 pln prn btn_buy_wrap btn_buy_wrap_link ');
			
			
			
			i_type_trig = 0;
				console.log(i_type_trig);
			}

		});
		

		console.log(i_type_trig);
		// if( i_type_trig == 1){
		// $('.block_products').toggleClass('cat_row');
		// $('.block_products').toggleClass('grid');

		// $('.item_wrap').toggleClass('col-md-4 col-xs-6 col-sm-3');
		// $('.item_wrap').toggleClass('col-xs-12');
		// $('.item_wrap> div:first-child').toggleClass('top_info');

		// var artcl_tmp = $('.itm_artic_wrap');
		// var retail_price = '<div class="retail_price">Рекомендуемая розничная цена<div class="price">12000,99 <span class="currency">грн</span></div>';


		// $('.item_wrap > div:nth-child(1)').toggleClass('ct_hide');
		// $('.itm_img_wrap').toggleClass('col-md-12');
		// $('.itm_img_wrap').toggleClass('col-xs-5 col-sm-3');

		// var lim = '<div class="limit">от <span class="amount_lim">5 ед.</span><span class="hidd_mobile">минимальный заказ</span></div>';
		// var ost = '<div class="ost col-sm-12 pln ">115 ед. остаток на складе</div>';
		
		// $('.h_wrap').toggleClass('col-md-12');
		// $('.p_wrap').toggleClass('col-md-12');

	
		// $('.cw_wrp').toggleClass('col-md-6 col-sm-12  col-sm-12  pr-lg-right');
		// $('.cw_wrp').toggleClass('col-xs-12 col-sm-5');

		

		// if(tree_moove == 0){
		// 	$('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
		// 	$('.p_wrap').insertAfter($(".h_wrap"));
		// 	$('.counter_wrap').wrap('<div class="inner_wrap"></div>');
		// 	$('.btn_buy_wrap_link').appendTo('.inner_wrap');
		// 	tree_moove = 1;
		// }else{
		// 	$('.h_wrap').wrap('<div class="col-xs-7 col-sm-4"></div>');
		// 	$('.p_wrap').insertAfter($(".h_wrap"));
		// 	var btn_tmp = $('.btn_buy_wrap');
		// 	// console.log('btn_tmp =' + btn_tmp);
		// 	$('.btn_buy_wrap').remove();
		
		// 	$(btn_tmp).insertAfter($(".counter_wrap"));

		// }

		// if(tree_modif == 0){
		// 	$('.h_wrap').prepend(artcl_tmp);
		// 	console.log('Артикул добавлен');
		// 	$('.p_wrap').append(retail_price);
		// 	$('.inner_wrap').prepend(lim);
		// 	$('.inner_wrap').append(ost);
		// 	console.log(tree_modif);

		// 	tree_modif = 1;
		// }else{
		// 	$('.itm_artic_wrap').remove();
		// 	$('.retail_price').remove();

		// 	$('.h_wrap').prepend(artcl_tmp);
		// 	$('.p_wrap').append(retail_price);

		// 	$('.limit').toggleClass('ct_hide');
		// 	$('.ost').toggleClass('ct_hide');
		// }
		
		// console.log(tree_modif);
		

		// $('.counter_wrap').toggleClass('col-xs-6 col-sm-6 pln prn');
	

		// $('.btn_buy_wrap_link').toggleClass('col-xs-6 col-sm-6 col-md-6 col-sm-12 pln prn  ');
		// // $('.btn_buy_wrap_link').attr('class','col-xs-6 col-sm-6 pln prn btn_buy_wrap btn_buy_wrap_link ');
		
		
		
		// i_type_trig = 0;
		// 	console.log(i_type_trig);
		// }
		console.log(i_type_trig);

	});

	$('.sidebarMenuInner .main-item').on('click', function () {
		if($(window).width() < 768){
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

	// $('.primary_btn').on('click', function () {
	// 	$('.primary_btn.tg').toggleClass('go');
	// 	console.log('click');
	// 	// $('#openSidebarMenu').toggleClass('slide-mm');
	// 	// console.log('click main');
	// });

	// $("#openSidebarMenu").click(function() {
  
	// 	$(".focus_wrap").is(":visible")?$(".focus_wrap").fadeOut(300):$(".focus_wrap").fadeIn(300);
	// 		});
	// $("#openSidebarMenu").click(function() {
	// 	// $(this).toggleClass("on");
	// 	// $(".focus_wrap").css("opacity", '1');
	// 	$(".focus_wrap").toggleClass("on-focus");
	// 	// $(this).parent().next().next().find(".main-mnu").slideToggle();
	// 	// return false;
	// });
	// $('#openSidebarMenu').click(function(){
	// 	console.log('click');
		
		// $("#focus_wrap").css("display", "block");
		// if(	$("#focus_wrap").css("display", "block")){
		// 	$("#focus_wrap").css("display", "none");
		// }
	// });

	// $("#sidebarMenu .sidebarMenuInner li").click(function(){
	// 	// $("ul").slideToggle();
	// 	// console.log("click");
	// 	// $("ul ul").css("display", "none");
	// });
	
});
