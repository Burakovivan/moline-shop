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
			el.blur(function(){
				var value = parseInt(el[0].value) || 0;
				var min = el.attr('min') || false;
				var max = el.attr('max') || false;
				if (value < min && min) {
					el[0].value = min;
				}
				if(value > max && max){
					el[0].value = max;
				}
			});

			function decrement() {
				var min = el.attr('min') || false;
				var value = parseInt(el[0].value) || 0;
				var quantityInPack = parseInt(el.parents('.item_wrap').find('.quantitiy_in_pack').val()) ||	parseInt($('.input_number_wrap').find('.quantitiy_in_pack').val()) || 0;
				value -= quantityInPack;
				if (!min || value >= min) {
					el[0].value = value;
				}
			}

			function increment() {
				var max = el.attr('max') || false;
				var value = parseInt(el[0].value) || 0;
				var quantityInPack = parseInt(el.parents('.item_wrap').find('.quantitiy_in_pack').val()) ||	parseInt($('.input_number_wrap').find('.quantitiy_in_pack').val()) || 0;
				value += quantityInPack;
				if (!max || value <= max) {
					el[0].value = value;
				}
			}
		}
	}

	$('.input-number').inputNumber();
	/* input counter end */

	//for replaceing path for big img

	$(".small_img").click(function (e) {
		e.preventDefault();
		var src = $(this).find('img').attr('src');
		console.log(src);
		$(".main_img").find('img').attr('src', src);
		console.log(src);
	});

	// $('#small_link_img').on('click', function(e) { e.preventDefault(); });


	

	// $( "body" ).off( "click", ".pin");
		
		
	
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

	/*FAQ*/
	$('dd').hide();
    
	$('dl').on("click", 'dt', function() {
			$(this)
					.next()
						.slideDown(300)
						.siblings('dd')
							.slideUp(300);
	});    
	$('.close_faq_btn_wrap').on("click", function() {
			$(this).parent().slideUp(300);
	});    
	/*end FAQ */

	/*Cart*/
	$('.cart-wrap').on('click', function () {
		// $('.cart').toggleClass('show_cart');
		$('.cart').fadeIn("slow");
		$('.wrap_cart').fadeIn("slow");

		console.log('click +');
	});

	$('.cart').on('click', function () {
		// $('.cart').fadeOut("slow");
		// $('.wrap_cart').fadeOut("slow");

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

	$(".more_seo").click(function () {
		console.log('click more');
		$(this).closest(".clump").find(".detail_seo").toggleClass("closed");
		$(this).closest(".clump").find(".slider_link_seo").toggleClass("less_seo");
		$(this).closest(".clump").find(".slider_link_seo").toggleClass("more_seo");
	});
	$('.show_cat').on('click', function() {
		filter = [];
		$('input[name^=\'filter\']').each(function(idx,element) {
			if($(element).prop('checked')){
				filter.push(this.value);
			}
		});
		var action = $('#filter_action').data('action');
		var price_range = {
			price_from : $('input[name=price_from]').val(),
			price_to : $('input[name=price_to]').val(),
		};
		var url = action;
		url += (filter.length ? ('&filter=' + filter.join(',')) : '');
		if(!(parseFloat(price_range.price_from) == parseFloat($('input[name=range-lower]').attr('min')) && parseFloat(price_range.price_to) == parseFloat($('input[name=range-upper]').attr('max')))){
			url += "&price_from=" + price_range.price_from + "&price_to=" + price_range.price_to;
		}
		location = url;
	});
	$('.styled-checkbox').click(function(){
		// if($(this).prop('checked')){
			$('.show_cat').hide();
			$(this).parent().find('.show_cat').show().css('right','-222px');
			// $(this).parent().find('.show_cat').find('svg').show().hide();
			$(this).parent().find('.show_cat').find('svg').show();
			setTimeout(function(){
				$(this).parent().find('.show_cat').find('svg').hide();
			}, 3000);
			// Instead of .addClass("newclass")
			// $("#item").attr("class", "oldclass newclass");
			// Instead of .removeClass("newclass")
			// $("#item").attr("class", "oldclass");
		// }

	});

	$('.category-more-btn').click(function(){
		const urlParams = new URLSearchParams(window.location.search);
		var button = $(this);
		var page = button.data('page');
		urlParams.set('page',(parseInt(page)||0)+1);
		urlParams.set('partial','Y');
		var url = window.location.href.replace(/.*(\?.*)/,"?"+ urlParams.toString())
		$.get(url, function(data){
			data = JSON.parse(data);
			button.data('page',data.current_page);
			if(data.least > 0){
				$("#least").html(data.least)
			} else {
				$(".category-more-btn").remove();
			}
			var nextPageNavElement = $('.c_pagination ul li[data-page='+data.current_page+']');
			nextPageNavElement.addClass('active');
			// var content = nextPageNavElement.find('a').text();
			// nextPageNavElement.find('a').remove();
			// nextPageNavElement.html('<span>' +content +'</span>');
			$(".block_products").append(data.html);
		});
	});
	$('#openSidebarMenu').on('click', function () {
		$('.overlay').toggleClass('show');
	});
	
	$('#openSidebarMenu').parent(".mnu_button_wrap").parent().on('click', function () {
			$('#openSidebarMenu')[0].checked =  !$('#openSidebarMenu')[0].checked ;
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
		$('#openSidebarMenu').click();
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
			if( $(value).hasClass('absent')){
				// $(value).find('.message_wrap').toggleClass('col-xs-12 col-sm-5');
			}
			if( $(value).hasClass('coming_soon')){
				// $(value).toggleClass('border-test');		
				$(value).find('.message_wrap').attr("class", "message_wrap");

			}
			if( $(value).hasClass('under_the_order')){

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
				if( $(value).hasClass('absent')){
					$(value).find('.message_wrap').toggleClass('col-xs-12 col-sm-5');
				}
				if( $(value).hasClass('coming_soon')){
					// $(value).toggleClass('border-test');		
					$(value).find('.message_wrap').attr("class", "message_wrap col-sm-5");
				}
				if( $(value).hasClass('under_the_order')){

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

	//delivery start
	$(".new_post_details #delivery_city").change(function(){

		getNPDeptList();
	});
	$(".delivAuto_details #delivery_city").change(function(){
		getDADeptList();
	});
	

	$('input[type=radio][name=delivery]').change(function(){
		$("[class$=_details]").hide();
		var deliveryType = $('input[type=radio][name=delivery]:checked').val();
		$("."+deliveryType+"_details").show();
		if(deliveryType == "new_post"){
			if($(".new_post_details #delivery_city").length? !$(".new_post_details #delivery_city")[0].options.length:false)
			{
				getNPCityList();
			}
		}
		if(deliveryType == "delivAuto"){
			if($(".delivAuto_details #delivery_city").length? !$(".delivAuto_details #delivery_city")[0].options.length:false)
			{
				getDACityList();
			}
		}
	});
	//delivery end


var lowerSlider = document.querySelector('#range-lower');
var upperSlider = document.querySelector('#range-upper');
if(!lowerSlider || !upperSlider){
return;
}
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
function getButtonById(product_id){
	return $('.item_wrap.product[data-product-id='+product_id+'] .btn_buy');
}
function getNPCityList(city){
	var request = {
		apiKey : '4ce2347821d2e9e93c08b5683631764e',
		modelName: "Address",
		calledMethod: "getCities",
	}
	$.ajax({
		url:'https://api.novaposhta.ua/v2.0/json/',
		data:JSON.stringify(request),
		method:"POST",
		success:function(response){
			if($(".new_post_details #delivery_city").length){
				$(".new_post_details #delivery_city").empty();
				response.data.forEach(function(city){
					$(".new_post_details #delivery_city").append(new Option(city.DescriptionRu, city.Ref, false,false));
				});
				$(".new_post_details #delivery_city").change();
			}
		}
	})
}
function getNPDeptList(city){
	var request = {
		apiKey : '4ce2347821d2e9e93c08b5683631764e',
		modelName: "Address",
		calledMethod: "getWarehouses",
		methodProperties: {
			Language: "ru",
			CityRef:$(".new_post_details #delivery_city").val()
	   },
	}
	$.ajax({
		url:'https://api.novaposhta.ua/v2.0/json/',
		data:JSON.stringify(request),
		method:"POST",
		success:function(response){
			if($(".new_post_details #delivery_dept").length){
				$(".new_post_details #delivery_dept").empty();
					response.data.forEach(function(city){
					$(".new_post_details #delivery_dept").append(new Option(city.DescriptionRu, city.Ref, false,false));
					});
				if(!$(".new_post_details #delivery_dept")[0].options.length)
				{
					$(".new_post_details #delivery_dept").append(new Option("Нет отделений","", true,true));
				}
				$(".new_post_details #delivery_dept")[0].options[0].selected = true;
			}
		}
	})
}
function getDACityList(city){
	var request = {
		apiKey : '4ce2347821d2e9e93c08b5683631764e',
		modelName: "Address",
		calledMethod: "getCities",
	}
	$.ajax({
		url:'https://www.delivery-auto.com/api/v4/Public/GetAreasList?culture=ru-RU&fl_all=true&country=1',//&regionId={regionId}',
		method:"Get",
		success:function(response){
			if($(".delivAuto_details #delivery_city").length){
				$(".delivAuto_details #delivery_city").empty();
				response.data = response.data.filter(function(x){return x.IsWarehouse;});
				response.data.forEach(function(city){
					$(".delivAuto_details #delivery_city").append(new Option(city.name, city.id, false,false));
				});
				$(".delivAuto_details #delivery_city").change();
			}
		}
	})
}
function getDADeptList(city){

	$.ajax({
		url:'https://www.delivery-auto.com/api/v4/Public/GetWarehousesListInDetail?culture=ru-RU&CityId='+$(".delivAuto_details #delivery_city").val()+'&country=1',
		method:"Get",
		success:function(response){
			if($(".delivAuto_details #delivery_dept").length){
				$(".delivAuto_details #delivery_dept").empty();
				response.data.sort(function(a,b){return a >b});
					response.data.forEach(function(city){
						var type = city.WarehouseType == 2 ?"Почтомат":city.WarehouseType == 3 ?"Склад с наложеным платежом":city.WarehouseType ==0 ?"Склад":"";
					$(".delivAuto_details #delivery_dept").append(new Option(city.name + ", " +type + ", "  + city.address, city.id, false,false));
					});
				if(!$(".delivAuto_details #delivery_dept")[0].options.length)
				{
					$(".delivAuto_details #delivery_dept").append(new Option("Нет отделений","", true,true));
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
	if(!rangeLower || !rangeUpper || !trackerBetween){
		return;
	}
	var minValue = 0;
	var maxValue = Number(rangeUpper!=null?rangeUpper.getAttribute('max'):0);

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