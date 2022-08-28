$(function () {
	let basket = $('.smart-basket__wrapper')
	if (!basket) return
	basket.smbasket({
		productElement: 'products-grid_item',
		buttonAddToBasket: 'product_btn',
		productPrice: 'product__price-number',
		productSize: 'product__size-element',
				
		productQuantityWrapper: 'product__quantity',
		smartBasketMinArea: 'cart',
		countryCode: '+375',
		smartBasketCurrency: 'Br',
		smartBasketMinIconPath: '/smartbasket/js/smartbasket.min.js',

		agreement: {
			isRequired: true,
			isChecked: true,
			isLink: 'https://artstranger.ru/privacy.html',
		},
			nameIsRequired: false,
	});
});


$(function () {
	function paginationInit () {
		var paginationContainer = $('#pagination-container')
		if (!paginationContainer.length) return

		let items = $(".products-grid .products-grid_item");
		let numItems = items.length;
		let perPage = 6;

	items.slice(perPage).hide();

		paginationContainer.pagination({
			items: numItems,
			itemsOnPage : perPage,
			prevText: "<",
			nextText: ">",
			onPageClick : function (pageNumber) {
				let showFrom = perPage * (pageNumber - 1);
				let showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).show();
			}
		});
	}

	paginationInit()
});