fetch("data/product.json")
    .then(res => res.json())
    .then(products => {
        renderIndexProducts(products);
        renderShopProducts(products);
    })
    .catch(err => console.error("Lỗi load sản phẩm:", err));

/* ================= INDEX PAGE ================= */
function renderIndexProducts(products) {
    const list = document.getElementById("product-list");
    if (!list) return; // không phải trang index thì bỏ

    list.innerHTML = "";

    // chỉ lấy 6 sản phẩm nổi bật
    products.slice(0, 10).forEach(p => {
        list.innerHTML += productHTML(p);
    });
}

/* ================= SHOP PAGE ================= */
function renderShopProducts(products) {
    const list = document.getElementById("shop-product-list");
    if (!list) return; // không phải trang shop thì bỏ

    list.innerHTML = "";

    products.forEach(p => {
        list.innerHTML += productHTML(p);
    });
}

/* ================= HTML CARD ================= */
function productHTML(p) {
    return `
    <div class="product-card">

        ${p.badge ? `<span class="badge badge-${p.badge}">${p.badge}</span>` : ""}

        <div class="product-img-box">
            <img src="${p.image}" alt="${p.name}">
        </div>

        <h3 class="product-title">${p.name}</h3>

        <div class="product-meta">
            <div class="rating">⭐ ${p.rating}</div>
            <div class="price">${p.price.toLocaleString()}đ</div>
        </div>

        <button class="btn-add">Thêm vào giỏ</button>
    </div>
    `;
}





