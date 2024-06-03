function renderFeaturedProducts(containerId = 'featuredProducts', productIDs = []) {
    const filteredProducts = products.data.filter(product => productIDs.includes(product.id));
    renderProducts(containerId, filteredProducts);
}
const featuredProductIDs = [1, 2, 3, 5, 9, 11,14];
renderFeaturedProducts('featuredProducts', featuredProductIDs);
function renderNewArrivals(containerId = 'newArrivalsContainer', productIDs = []) {
    const newArrivalProducts = products.data.filter(product => productIDs.includes(product.id));
    renderProducts(containerId, newArrivalProducts);
}
const newArrivalProductIDs = [4, 6, 7, 8, 12, 13,16];
renderNewArrivals('newArrivalsContainer', newArrivalProductIDs);
