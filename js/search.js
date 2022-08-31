const results = document.getElementById('results');

function generateCards(productData) {
    const cards = [];
    for (let i = 0; i < productData.length; i++) {
        cards.push (`
            <li class="products-grid_item">
                <article class="product">
                    <div class="image_switch_img">
                        <a href="#" class="popup_link">
                            <img src="${productData[i].image}" alt="${productData[i].title}">
                        </a>
                    </div>
                    <h3 class="product_title">
                        <a href="#popup_sweets1" class="popup_link">${productData[i].title}</a>
                    </h3>
                    <div class="product_price">
                        <span class="product-price_current">${productData[i].cost}р.</span>
                    </div>
        
                    <div class="product__quantity"></div>
        
                    <button class="product_btn btn" data-sb-id-or-vendor-code="19"
                        data-sb-product-name="${productData[i].title}"
                        data-sb-product-price="${productData[i].cost}р." data-sb-product-quantity="1"
                        data-sb-product-img="${productData[i].image}">Добавить в корзину</button>
                </article>
            </li>
        `)
    }
    return cards
}

const cardsArr = generateCards(productData)
results.innerHTML = cardsArr.join('')

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

    const newFilteredCardsHTML = generateCards(filteredProductData)
    results.innerHTML = newFilteredCardsHTML.join('');
}