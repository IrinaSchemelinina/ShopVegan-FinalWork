let items = $(".products-grid .products-grid_item");
let numItems = items.length;
let perPage = 9;

items.slice(perPage).hide();

$('#pagination-container').pagination({
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