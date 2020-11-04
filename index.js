const json_path = [{
        "id": "62-0VE218914258759",
        "name": "Versace 0VE2194",
        "price": 373,
        "final_price": 224,
        "img_front": "https://static.glassesusa.com/media/catalog/product/8/0/8053672851298_f_1.jpg",
        "img_angle": "https://static.glassesusa.com/media/catalog/product/8/0/8053672851298_u_1.jpg",
        "img_side": "https://static.glassesusa.com/media/catalog/product/8/0/8053672851298_s_1.jpg",
        "link": "https://www.glassesusa.com/blackgray-large/versace-0ve2194/62-0ve218914258759.html",
        "gender": "Unisex",
        "ends_in": "july 15 2020 03:00:00 GMT-0500",
        "qty": 36
    },
    {
        "id": "62-0BE3090Q10525A58",
        "name": "Burberry 0BE3090Q",
        "price": 356,
        "final_price": 249,
        "img_front": "https://static.glassesusa.com/media/catalog/product/8/0/8053672810172_f.jpg",
        "img_angle": "https://static.glassesusa.com/media/catalog/product/8/0/8053672810172_u.jpg",
        "img_side": "https://static.glassesusa.com/media/catalog/product/8/0/8053672810172_s.jpg",
        "link": "https://www.glassesusa.com/browntortoisegold-extra-large/burberry-0be3090q/62-0be3090q10525a58.html",
        "gender": "Men",
        "ends_in": "july 18 2020 00:00:00 GMT-0500",
        "qty": 0
    },
    {
        "id": "62-0RB420260697155",
        "name": "Ray-Ban Andy 4202",
        "price": 128,
        "final_price": 128,
        "img_front": "https://static.glassesusa.com/media/catalog/product/8/0/8053672188868_f_1.jpg",
        "img_angle": "https://static.glassesusa.com/media/catalog/product/8/0/8053672188868_u_1.jpg",
        "img_side": "https://static.glassesusa.com/media/catalog/product/8/0/8053672188868_s_1.jpg",
        "link": "https://www.glassesusa.com/blackgreen-large/ray-ban-andy-4202/62-0rb420260697155.html",
        "gender": "Men",
        "ends_in": "july 25 2020 12:00:00 GMT-0500",
        "qty": 36
    }
];

function productTemplate(product) {
    return `
    <div class="item flex-column flex-between">
                <div class="top-info flex flex-between">
                    <h5 class="ribon">${Math.round((product.price - product.final_price) / product.price * 100) }% Off</h5>

                </div>
                <div class="bottom-info flex flex-column flex-center">
                    <h4><span id="name">${product.name}</span> </h4>
                    <p><span id="price">${product.price}</span><span id="sale">${product.final_price}</span> + Free Shipping</p>
                    <div class="carousel flex">
                        <div class="owl-carousel owl-theme">
                            <img class="category-card owl-item" src="${product.img_front}">
                            <img class="category-card owl-item" src="${product.img_side}">
                            <img class="category-card owl-item" src="${product.img_angle}">
                        </div>
                    </div>
                    <a href="${product.link}" id="button-product">SHOP NOW </a>
                    <div class="items-left flex">${product.qty} Items left <i></i></div>
                </div>
            </div>
    `
}

function myJson() {
    document.getElementById('product-items').innerHTML = `
${json_path.map(productTemplate).join('')}
`
}


// smooth button to first section
$("#button-restart").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#first").offset().top
    }, 2000);
});
// smooth button to Second section
$("#button-hero").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#second").offset().top
    }, 2000);
    myJson();
});