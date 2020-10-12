 ;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var formateUrl = function() {
		var obj = {};
		var arr = window.location.href.split('?')[1].split('&');
		for (let i = 0;i < arr.length; i++) {
			let key = arr[i].split('=')[0];
			let value = arr[i].split('=')[1];
			obj[key] = value;
		}
		return obj;
	}

	var workType = function() {
		var curUrl = window.location.href;
		if (curUrl.indexOf('?') > -1) {
			var type = curUrl.split('?')[1].substr(5);
			$('#fh5co-project .atosTit').text(type);
			if (type === 'atos') {
				$("#fh5co-project").find('.project').first().css('display', 'block').siblings('.project').css('display','none');
				$("#fh5co-project").find('.el-breadcrumb_name').text('意大利ATOS全系液压产品');
				let a = '';
				for (let i = 0; i < atos.length; i++) {
					a += `
					<div class="col-xs-6 col-md-3 listpart">
						<div class="project-grid" style="background-image:url(${atos[i].list[0].list[0].name})">
						</div>
						<div class="shortName">${atos[i].name}</div>
					</div>
					`
				}
				console.log('formate',formateUrl())
				$("#fh5co-project").find('.atoslist').append(a);
				// contentWayPoint();
				// $('#carousel-responsive > ul').append(b);
			} else if (type === 'bmeg') {
				$("#fh5co-project").find('.project').eq(1).css('display', 'block').siblings('.project').css('display','none');
				$("#fh5co-project").find('.el-breadcrumb_name').text('德国BMEG全系列液压产品');
			} else if (type === 'yml') {
				$("#fh5co-project").find('.project').eq(2).css('display', 'block').siblings('.project').css('display','none');
				$("#fh5co-project").find('.el-breadcrumb_name').text('YWL·VTOZ全系列液压产品');	
			} else {
				$("#fh5co-project").find('.project').first().css('display', 'block').siblings('.project').css('display','none');
			}
		} else {
			$("#fh5co-project").find('.project').first().css('display', 'block').siblings('.project').css('display','none');
		}
	}

	// 产品列表滚动展示
	var atosPro = function() {
		//responsive
		var opts = {
			autoScroll : true,
			autoScrollSpeed : 20000
		};
		console.log($('#carousel-responsive'));
		var responsiveCarousel;
		responsiveCarousel = $('#carousel-responsive').floatingCarousel(opts);
		$(window).resize(responsiveCarousel.update(opts));
	}

	var workDetail = function() {
		$('#fh5co-project .workTypeTit').text(formateUrl().type);
		$('#fh5co-project .workTypeTitItem').text(localStorage.getItem('listItem'));
		let list = JSON.parse(localStorage.getItem('list'));
		console.log(list)
		let b = '',c = '';
		for (let i = 0; i < list.length; i++) {
			b += `
			<div class="col-xs-6 col-md-3">
				<div class="project-grid" style="background-image:url(${list[i].list[0].name});">
					<div class="desc">
						<span>Application</span>
						<h3><a href="#">${list[i].name}</a></h3>
					</div>
				</div>
			</div>
			`;
			c += 
				$.map(list[i].list, function(val, m){
					return `<li>
								<div style="position:relative">
									<div class="project-grid" style="background-image:url(${val.name});width: 220px"></div>
									<div style="position:absolute;bottom: 0;color: black;text-align: center;width: 100%;">${val.ca}</div>
								</div>
							</li>`
				}).join('');
		}
		$(".fh5co-project-worktype").find('.project').first().append(b);
		$("#carousel-responsive ul").append(c);
		atosPro();
	}
	
	$(function(){
		workType();
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		$('.atoslist .listpart').click(function(){
			let curClick = $(this).children('.shortName').text();
			for (let m = 0; m < atos.length; m++) {
				if (curClick === atos[m].name) {

					window.location.href = './workDetail.html?type=' + formateUrl().type + '&list=' + atos[m].code;
					localStorage.setItem('list', JSON.stringify(atos[m].list));
					localStorage.setItem('listItem', atos[m].name)

				}
			}
		});
		workDetail();
	});


}());