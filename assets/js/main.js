jQuery(document).ready(function() {	

	
	$('.tab-content, .tab-content-2').removeClass('opacity-0');

	$('.icon-mobile').click(function(){
		$('.cmn-toggle-switch').toggleClass("active");
	});

	$('.list-button .btn-rj').click(function(){

		var item_1 = $('#sp .menu-services li a.active').parent().index();

		$('.tab-content-2 .tab-pane').removeClass("active");
		$('.list-button .btn').removeClass("active");
		$(this).addClass("active");
		$('#rj').removeClass("invisible");
		$('#sp').addClass("invisible");
		$('.tab-content .tab-pane').removeClass("active show");
		$('#rj .menu-services li a').removeClass('active');
		$('#rj .menu-services li a').eq(item_1).addClass('active');
		$('.tab-content .tab-pane').eq(item_1).addClass("active show");
	});

	$('.list-button .btn-sp').click(function(){

		var item = $('#rj .menu-services li a.active').parent().index();


		$('.list-button .btn').removeClass("active");
		$(this).addClass("active");
		$('#sp').removeClass("invisible");
		$('#rj').addClass("invisible");
		$('.tab-content-2 .tab-pane').removeClass("active show");
		$('#sp .menu-services li a').removeClass('active');
		$('#sp .menu-services li a').eq(item).addClass('active');
		$('.tab-content-2 .tab-pane').eq(item).addClass("active show");
		
	});


	$("#rj #alimentacao").load("assets/pages/rj/alimentacao.html",function(){
	   	
	   	$('.slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots:true,
  		adaptiveHeight: true,
  		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button" style="display: block;"><img src="assets/images/arrow-left.png" /></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><img src="assets/images/arrow-right.png" /></button>',
		responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    },
	    {
	        breakpoint: 992,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots:true,
	           
	        }
	    }
	    ]
	});	


	});


	$("#rj #bares").load("assets/pages/rj/bares.html",function(){
	   	
	   	$('#bares .slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots:true,
  		adaptiveHeight: true,
  		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button" style="display: block;"><img src="assets/images/arrow-left.png" /></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><img src="assets/images/arrow-right.png" /></button>',
		responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    },
	    {
	        breakpoint: 992,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots:true,
	           
	        }
	    }
	    ]
	});	


	});


	$("#rj #saude").load("assets/pages/rj/saude.html",function(){
	   	
	   	$('#saude .slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots:true,
  		adaptiveHeight: true,
  		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button" style="display: block;"><img src="assets/images/arrow-left.png" /></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><img src="assets/images/arrow-right.png" /></button>',
		responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    },
	    {
	        breakpoint: 992,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots:true,
	           
	        }
	    }
	    ]
	});	


	}); 


	$("#rj #servicos").load("assets/pages/rj/servicos.html",function(){
	   	
	   	$('#servicos .slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots:true,
  		adaptiveHeight: true,
  		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button" style="display: block;"><img src="assets/images/arrow-left.png" /></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><img src="assets/images/arrow-right.png" /></button>',
		responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    },
	    {
	        breakpoint: 992,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots:true,
	           
	        }
	    }
	    ]
	});	


	});  










		$("#sp #alimentacao_sp").load("assets/pages/sp/alimentacao.html",function(){
	   	
	   	$('#sp #alimentacao_sp .slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots:true,
  		adaptiveHeight: true,
  		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button" style="display: block;"><img src="assets/images/arrow-left.png" /></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><img src="assets/images/arrow-right.png" /></button>',
		responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    },
	    {
	        breakpoint: 992,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots:true,
	           
	        }
	    }
	    ]
	});	


	});


	$("#sp #bares_sp").load("assets/pages/sp/bares.html",function(){
	   	
	   	$('#sp #bares_sp .slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots:true,
  		adaptiveHeight: true,
  		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button" style="display: block;"><img src="assets/images/arrow-left.png" /></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><img src="assets/images/arrow-right.png" /></button>',
		responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    },
	    {
	        breakpoint: 992,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots:true,
	           
	        }
	    }
	    ]
	});	


	});


	$("#sp #saude_sp").load("assets/pages/sp/saude.html",function(){
	   	
	   	$('#sp #saude_sp .slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots:true,
  		adaptiveHeight: true,
  		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button" style="display: block;"><img src="assets/images/arrow-left.png" /></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><img src="assets/images/arrow-right.png" /></button>',
		responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    },
	    {
	        breakpoint: 992,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots:true,
	           
	        }
	    }
	    ]
	});	


	}); 


	$("#sp #servicos_sp").load("assets/pages/sp/servicos.html",function(){
	   	
	   	$('#sp #servicos_sp .slider').slick({
		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots:true,
  		adaptiveHeight: true,
  		prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button" style="display: block;"><img src="assets/images/arrow-left.png" /></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><img src="assets/images/arrow-right.png" /></button>',
		responsive: [
	    {
	        breakpoint: 1200,
	        settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    },
	    {
	        breakpoint: 992,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    },
	    {
	        breakpoint: 768,
	        settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            arrows: false,
	            dots:true,
	           
	        }
	    }
	    ]
	});	


	});   




	


});