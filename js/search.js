const productItemTemplate = (productData) => {
    const {id, image, title, cost} = productData
    return `
        <li class="products-grid_item">
            <article class="product">
                <div class="image_switch_img">
                    <a href="#popup_products${id}" class="popup_link">
                        <img src="${image}" alt="${title}">
                    </a>
                </div>
                <h3 class="product_title">
                    <a href="#popup_products${id}" class="popup_link">${productData.title}</a>
                </h3>
                <div class="product_price">
                    <span class="product-price_current">${cost}р.</span>
                </div>

                <div class="product__quantity"></div>

                <button class="product_btn btn"
                    data-sb-id-or-vendor-code="${id}"
                    data-sb-product-name="${title}"
                    data-sb-product-price="${cost}"
                    data-sb-product-quantity="1"
                    data-sb-product-img="${image}"
                >
                    Добавить в корзину
                </button>
            </article>
        </li>
    `
}

function generateCards (products) {
    return products.map(item => productItemTemplate(item))
}

function generateProductList (productData) {
    const results = document.getElementById('results');

    if (!results) return

    const cardsArr = generateCards(productData)
    results.innerHTML = cardsArr.join('')
}

generateProductList(productData)

//Поиск

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

let searchValue = '';

searchInput.oninput = (event) => {
    searchValue = event.target.value
    filterSearch()
}

searchBtn.onclick = () => {
    filterSearch()
}

function filterSearch() {
    const rgx = new RegExp(searchValue, 'i')
    let filteredProductData = productData.filter(card => {
        if (rgx.test(card.title)) {
            return true
        } else {
            return false
        }
    })

    generateProductList(filteredProductData)
}