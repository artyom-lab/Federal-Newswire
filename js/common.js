$(document).ready(function () {

	$(".navbar-toggler").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-in");;
	});

	$(".search-close").on("click", function() {
		$(this).closest(".dropdown-menu").removeClass("show");
	});

	function navbar() {
		if ($(this).scrollTop() >= $(window).height()) {
			$('.page-navbar').addClass("fixed-top");
		} else {
			$('.page-navbar').removeClass("fixed-top");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

});