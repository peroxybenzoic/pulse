$(document).ready(function () {
	$(".carousel__inner").slick({
		speed: 1200,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
				},
			},
		],
	});

	$("ul.catalog__tabs").on(
		"click",
		"li:not(.catalog__tab_active)",
		function () {
			$(this)
				.addClass("catalog__tab_active")
				.siblings()
				.removeClass("catalog__tab_active")
				.closest("div.container")
				.find("div.catalog__content")
				.removeClass("catalog__content_active")
				.eq($(this).index())
				.addClass("catalog__content_active");
		}
	);

	$(".catalog-item__link").each(function (i) {
		$(this).on("click", function (e) {
			e.preventDefault();
			$(".catalog-item__content")
				.eq(i)
				.toggleClass("catalog-item__content_active");
			$(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
		});
	});

	$(".catalog-item__back").each(function (i) {
		$(this).on("click", function (e) {
			e.preventDefault();
			$(".catalog-item__content")
				.eq(i)
				.toggleClass("catalog-item__content_active");
			$(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
		});
	});

	$("[data-modal=consult]").on("click", function () {
		$(".overlay, #consult").fadeIn();
	});
	$(".modal__close").on("click", function () {
		$(".overlay, #consult, #order, #thanks").fadeOut();
	});
	$(".button_mini").on("click", function () {
		$(".overlay, #order").fadeIn();
	});
});
