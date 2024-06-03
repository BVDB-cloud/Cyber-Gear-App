//Hideable Doc
const navBarCart = document.getElementById('navBarShoppingCart');
const shoppingCartDiv = document.querySelector(".shoppingCartPopOutMenu");
const productsSection = document.getElementById("products");

function toggleShoppingCart() {
    shoppingCartDiv.style.display = (shoppingCartDiv.style.display === "block") ? "none" : "block";
        if (productsSection.style.marginRight === "50px") {
            productsSection.style.marginRight = "100px";
        } else {
            productsSection.style.marginRight = "100px";
        }
}
navBarCart.addEventListener("click", toggleShoppingCart);
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById('navBarShoppingCart');
    const cartMenu = document.querySelector('.shoppingCartPopOutMenu');
    const cartExit = document.getElementById('cartExit');
    const applyCouponButton = document.querySelector('.couponAddOption button');
    const couponInput = document.querySelector('.couponAddOption input');
    const couponBannerSuccessful = document.querySelector('.couponBannerSuccessful');
    const couponBannerDenied = document.querySelector('.couponBannerDenied');
    const closeCouponSuccess = document.querySelector('.couponBannerSuccessful i');
    const closeCouponDenied = document.querySelector('.couponBannerDenied i');
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.couponBannerSuccessful') && couponBannerSuccessful.style.display === 'flex') {
            couponBannerSuccessful.style.display = 'none';
        }
        if (!event.target.closest('.couponBannerDenied') && couponBannerDenied.style.display === 'flex') {
            couponBannerDenied.style.display = 'none';
        }
    });
    cartIcon.addEventListener('click', function () {
        cartMenu.classList.add('visible'); // Use class to handle transition
    });

    // Hide cart menu
    cartExit.addEventListener('click', function () {
        cartMenu.classList.remove('visible'); // Use class to handle transition
    });
    applyCouponButton.addEventListener('click', applyCoupon);
    couponInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            applyCoupon();
        }
    });
    applyCouponButton.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            applyCoupon();
        }
    });
    function applyCoupon() {
        const couponCode = couponInput.value.trim();
        if (couponCode === "DISCOUNT20") { 
            couponBannerSuccessful.style.display = 'flex';
            couponBannerDenied.style.display = 'none';
        } else {
            couponBannerSuccessful.style.display = 'none';
            couponBannerDenied.style.display = 'flex';
        }
        couponInput.value = '';
    }
    closeCouponSuccess.addEventListener('click', function () {
        couponBannerSuccessful.style.display = 'none';
    });

    closeCouponDenied.addEventListener('click', function () {
        couponBannerDenied.style.display = 'none';
    });
});
let products = {
    data: [
        {
            id:1,
            productName:"Macintosh 128K",
            brand:"Apple",
            category:"Desktop",
            price:"39,999",
            stars:"5",
            image:"image1.jpg",
            description:"Introducing the Apple Macintosh 128K, the revolutionary personal computer that changed the world in 1984. With its intuitive graphical user interface, built-in screen, and iconic mouse, the original Mac made computing accessible to everyone. Experience the legacy of innovation and user-friendly design that continues to define Apple products today. Discover the Macintosh 128K and see how it all began.",
        },
        {
            id:2,
            productName:"PowerBook G4",
            brand:"Apple",
            category:"Laptop",
            price:"17.99",
            stars:"2",
            image:"image2.jpg",
            description:"Meet the Apple PowerBook G4, the sleek and powerful laptop that redefined portable computing. Boasting a stunning titanium or aluminum design, this iconic notebook combines high performance with elegance. Featuring a robust PowerPC G4 processor, brilliant display, and advanced connectivity options, the PowerBook G4 is perfect for professionals and creatives on the go. Experience the blend of style and substance that makes the PowerBook G4 a true Apple classic.",
        },
        {
            id:3,
            productName:"iMac G3",
            brand:"Apple",
            category:"Desktop",
            price:"999.99",
            stars:"4",
            image:"image3.png",
            description:"Introducing the iMac G3, the colorful and innovative desktop computer that revolutionized the tech world. With its vibrant, translucent design and all-in-one form factor, the iMac G3 combines style with cutting-edge technology. Featuring a powerful G3 processor, crisp display, and user-friendly interface, this iconic machine made computing fun and accessible. Discover the iMac G3 and see how it brought a burst of color and creativity to personal computing.",
        },
        {
            id:4,
            productName:"iMac 2011",
            brand:"Apple",
            category:"Desktop",
            price:"10.99",
            stars:"1",
            image:"image4.jpg",
            description:"Discover the iMac 2011, the all-in-one desktop that combines powerful performance with sleek design. Featuring a stunning LED-backlit display, Intel Core processors, and advanced graphics, the iMac 2011 delivers an exceptional computing experience. Its minimalist design, with a seamless glass front and aluminum enclosure, adds a touch of elegance to any workspace. Experience the perfect blend of power, style, and functionality with the iMac 2011.",
        },
        {
            id:5,
            productName:"Apple IIc",
            brand:"Apple",
            category:"Desktop",
            price:"10,000,000.99",
            stars:"5",
            image:"image5.jpg",
            description:"Introducing the Apple IIc, the compact and portable member of the legendary Apple II family. Launched in 1984, the Apple IIc offered the same powerful computing capabilities as its predecessors in a sleek, lightweight design. With its built-in keyboard, integrated floppy drive, and easy connectivity, the Apple IIc provided unparalleled convenience and versatility. Ideal for both home and professional use, the Apple IIc is a timeless classic that brought advanced computing within reach for everyone. Experience the innovation and simplicity of the Apple IIc.",
        },
        {
            id:6,
            productName:"Surface Studio 3",
            brand:"Microsoft",
            category:"Desktop",
            price:"0.29",
            stars:"5",
            image:"image6.png",
            description:"Introducing the Microsoft Surface Studio 3, the ultimate all-in-one desktop designed for creativity and productivity. Featuring a stunning 28-inch PixelSense™ touchscreen display with adjustable Zero Gravity Hinge, the Surface Studio 3 offers an immersive and flexible workspace. Powered by the latest Intel Core processors and high-performance graphics, it delivers exceptional speed and performance for demanding tasks. With its elegant design and advanced features, the Surface Studio 3 is perfect for artists, designers, and professionals who need a versatile and powerful tool to bring their ideas to life. Elevate your creativity with the Microsoft Surface Studio ",
        },
        {
            id:7,
            productName:"Surface Studio 2+",
            brand:"Microsoft",
            category:"Desktop",
            price:"999.99",
            stars:"1",
            image:"image7.png",
            description:"Introducing the Microsoft Surface Studio 2+, the innovative all-in-one desktop that transforms your workspace. Boasting a stunning 28-inch PixelSense™ touchscreen display with adjustable Zero Gravity Hinge, the Surface Studio 2+ provides an unparalleled canvas for creativity. Powered by the latest Intel Core processors and advanced NVIDIA GeForce graphics, it delivers powerful performance for design, rendering, and multitasking. Its sleek, elegant design seamlessly integrates into any environment, making it perfect for professionals and creatives. Experience the future of desktop computing with the Microsoft Surface Studio 2+.",
        },
        {
            id:8,
            productName:"Band 2",
            brand:"Microsoft",
            category:"Watch",
            price:"199.99",
            stars:"3",
            image:"image8.jpg",
            description:"Introducing the Microsoft Band 2, the ultimate fitness tracker designed to help you achieve your health and wellness goals. Featuring a sleek, curved AMOLED display, the Band 2 provides real-time insights into your activity levels, heart rate, sleep quality, and more. With built-in GPS, it tracks your runs and bike rides accurately, while guided workouts and smart notifications keep you motivated and connected. Durable and stylish, the Microsoft Band 2 is your perfect companion for a healthier, more active lifestyle. Stay on top of your fitness journey with the Microsoft Band 2.",
        },
        {
            id:9,
            productName:"Green-Eyed Mouse",
            brand:"Microsoft",
            category:"Mouse",
            price:"599.99",
            stars:"5",
            image:"image9.jpg",
            description:"Introducing the Microsoft Green-Eyed Mouse (1983), a pioneering input device that revolutionized personal computing. Featuring a green tracking ball for precise cursor control, this iconic mouse paved the way for modern computer interaction. Its ergonomic design and smooth operation made it a favorite among early PC users. With the Microsoft Green-Eyed Mouse, navigating your digital world became more intuitive and efficient. Experience the legacy of innovation with this classic piece of computing history.",
        },
        {
            id:10,
            productName:"Lumia 535",
            brand:"Microsoft",
            category:"Phone",
            price:"534.99",
            stars:"2",
            image:"image10.jpg",
            description:"Introducing the Microsoft Lumia 535: a budget-friendly smartphone with a vibrant 5-inch display, ergonomic design, and easy navigation. Powered by Windows Phone 8.1, it offers access to a wide range of apps and services. Capture selfies and video calls with its 5-megapixel front-facing camera. Experience Microsoft's reliability and security in the palm of your hand.",
        },
        {
            id:11,
            productName:"NC-10",
            brand:"Samsung",
            category:"Laptop",
            price:"3,141,592.65",
            stars:"4",
            image:"image11.jpg",
            description:"Introducing the Samsung NC10, a compact and powerful netbook designed for on-the-go productivity. With its sleek and lightweight design, the NC10 is perfect for travel and everyday use. Featuring a 10.1-inch display, comfortable keyboard, and long-lasting battery life, it offers a comfortable and efficient computing experience. Whether you're browsing the web, checking emails, or working on documents, the Samsung NC10 delivers reliable performance wherever you go",
        },
        {
            id:12,
            productName:"Galaxy Book 3 Ultra",
            brand:"Samsung",
            category:"Laptop",
            price:"657.49",
            stars:"3",
            image:"image12.png",
            description:"Introducing the Samsung Galaxy Book 3 Ultra, the pinnacle of productivity and performance in a sleek, portable design. With its ultra-slim profile and stunning display, the Galaxy Book 3 Ultra redefines what's possible in a laptop. Powered by high-performance Intel Core processors and equipped with a long-lasting battery, it delivers seamless multitasking and all-day productivity. Whether you're working on-the-go or enjoying multimedia entertainment, the Galaxy Book 3 Ultra offers an immersive experience like no other. Elevate your workflow with the Samsung Galaxy Book 3 Ultra.",
        },
        {
            id:13,
            productName:"Galaxy S23",
            brand:"Samsung",
            category:"Phone",
            price:"419.99",
            stars:"4",
            image:"image13.png",
            description:"The Samsung Galaxy S23 sets a new standard for premium smartphones, blending cutting-edge technology with sleek design. Boasting a stunning display, powerful processor, and advanced camera system, the Galaxy S23 delivers an unparalleled user experience. With innovative features like 5G connectivity, enhanced security, and long-lasting battery life, it's the perfect companion for work, play, and everything in between. Experience the future of mobile technology with the Samsung Galaxy S23",
        },
        {
            id:14,
            productName:"Galaxy S24",
            brand:"Samsung",
            category:"Phone",
            price:"1,200",
            stars:"5",
            image:"image14.jpg",
            description:"Introducing the Samsung Galaxy S24, the epitome of innovation and style in a smartphone. With its sleek design, stunning display, and powerful performance, the Galaxy S24 redefines what's possible in mobile technology. Featuring advanced camera capabilities, lightning-fast 5G connectivity, and enhanced security features, it's the perfect device for capturing memories, staying connected, and unleashing your creativity. Elevate your mobile experience with the Samsung Galaxy S24 and discover a new level of innovation.",
        },
        {
            id:15,
            productName:"Galaxy Watch 5 Pro",
            brand:"Samsung",
            category:"Watch",
            price:"199.99",
            stars:"1",
            image:"image15.png",
            description:"Introducing the Samsung Galaxy Watch 5 Pro, the ultimate companion for your active lifestyle. With its sleek design and advanced features, the Galaxy Watch 5 Pro seamlessly blends style and functionality. Featuring robust health and fitness tracking, built-in GPS, and water resistance, it's perfect for monitoring your workouts and staying connected on the go. With long-lasting battery life and customizable watch faces, the Galaxy Watch 5 Pro is designed to keep up with your busy schedule. Elevate your wearable experience with the Samsung Galaxy Watch 5 Pro.",
        },
        {
            id:16,
            productName:"G502 K Plus",
            brand:"Logitech",
            category:"Mouse",
            price:"34.99",
            stars:"3",
            image:"image16.png",
            description:"Introducing the Logitech G502 X Plus, the ultimate gaming mouse designed for precision and performance. Featuring Logitech's advanced HERO 25K sensor, the G502 X Plus delivers exceptional accuracy and responsiveness. With customizable RGB lighting, adjustable weights, and 11 programmable buttons, it offers a personalized gaming experience tailored to your style. Its ergonomic design ensures comfort during long gaming sessions, while the LIGHTSPEED wireless technology provides ultra-fast connectivity. Elevate your gameplay with the Logitech G502 X Plus and experience the pinnacle of gaming performance.",
        },
        {
            id:17,
            productName:"Cobra Pro",
            brand:"Razer",
            category:"Mouse",
            price:"129.99",
            stars:"5",
            image:"image17.png",
            description:"Introducing the Razer Cobra Pro, the ultimate gaming mouse engineered for precision and speed. Featuring Razer's Focus Pro 30K Optical Sensor, the Cobra Pro delivers unparalleled accuracy and responsiveness. With customizable Chroma RGB lighting, 10 programmable buttons, and ultra-fast Razer HyperSpeed Wireless technology, it offers a truly immersive and personalized gaming experience. Its ergonomic design ensures maximum comfort during extended gaming sessions. Elevate your gameplay with the Razer Cobra Pro and experience the cutting edge of gaming technology.",
        },
        {
            id:18,
            productName:"Keychron M6",
            brand:"Apple",
            category:"Mouse",
            price:"69.00",
            stars:"4",
            image:"image18.png",
            description:"Introducing the Keychron M6, the perfect blend of style and performance in a wireless mouse. Designed for both productivity and gaming, the M6 features a high-precision optical sensor for smooth and accurate tracking. Its ergonomic design ensures comfort during extended use, while customizable buttons and RGB lighting add a touch of personal flair. With reliable Bluetooth connectivity and long-lasting battery life, the Keychron M6 is your ideal companion for work and play. Elevate your computing experience with the Keychron M6.",
        },
    ]
}
let cart = [];
let cartItemCount = 0;
let discountCodeApplied = false;
let discount = 0;

function calculateDiscount(subTotal, discountPercentage) {
    return subTotal * (discountPercentage / 100);
}

function applyDiscountCode(discountCode) {
    if (discountCode === "discount20") {
        discountCodeApplied = true;
    } else {
        discountCodeApplied = false;
    }
    calculateTotals();
}

function renderProducts(containerId = 'products', filteredProducts = products.data) {
    const productsContainer = document.getElementById(containerId);
    productsContainer.innerHTML = '';
    for (let product of filteredProducts) {
        let card = document.createElement("div");
        card.classList.add("card", product.category);
        card.setAttribute("data-id", product.id);
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        let image = document.createElement("img");
        image.setAttribute("src", product.image);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        let container = document.createElement("div");
        container.classList.add("container");
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = product.productName.toUpperCase();
        container.appendChild(name);
        let price = document.createElement("h5");
        price.classList.add("product-price");
        price.innerText = "$" + product.price;
        container.appendChild(price);
        let starsContainer = document.createElement("div");
        starsContainer.classList.add("stars-container");
        for (let i = 0; i < 5; i++) {
            let starIcon = document.createElement("i");
            starIcon.classList.add("fa-solid", "fa-star");
            starIcon.style.color = i < product.stars ? "gold" : "lightgrey";
            starsContainer.appendChild(starIcon);
        }    
        container.appendChild(starsContainer);
        card.appendChild(container);
        productsContainer.appendChild(card);
        card.classList.add("card");
        let addToCartButton = document.createElement("button");
        addToCartButton.classList.add("addToCartButton");
        addToCartButton.addEventListener('click', addToCartHandler);
    

        // Append the button to the specified container
        addToCartButton.innerText = "Add to cart";
        addToCartButton.dataset.productId = product.id;
        addToCartButton.removeAttribute('aria-hidden');
        card.appendChild(addToCartButton);
        container.style.cursor ="pointer";
        container.addEventListener('click', function () {
            showProductDetails(product.id);
        });
    }
}

function showProductDetails(productId) {
    const product = products.data.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('popupProductImage').src = product.image;
    document.getElementById('productBrand').innerText = product.brand;
    document.getElementById('popupProductName').innerText = product.productName;
    document.getElementById('popupProductPrice').innerText = "$" + product.price;
    document.getElementById('popupProductDescription').innerText = product.description;

    const productPopup = document.getElementById('productPopup');
    productPopup.style.display = 'flex';

    document.querySelector('.popup-content').dataset.id = productId;
}

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('productPopup').style.display = 'none';
});

document.getElementById('popupAddToCart').addEventListener('click', addToCartHandler);
function addToCartHandler() {
    const productId = parseInt(document.querySelector('.popup-content').dataset.id);
    const product = products.data.find(p => p.id === productId);
    if (product) {
        if (cart.find(item => item.id === product.id)) {
            alert("Product is already in the cart.");
        } else {
            cartItemCount++;
            updateCartCount(cartItemCount);
            addToCart(product);
            renderCartProducts();
            calculateTotals();
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
});

function updateCartCount(count) {
    const shoppingCartCount = document.getElementById('shoppingCartNumberOfItems');
    shoppingCartCount.textContent = count;
}
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    const priceNumber = parseFloat(product.price.replace(/,/g, '')); 
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, price: priceNumber, quantity: 1 });
    }
    updateCartCount(cartItemCount); 
}
function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        const product = cart[productIndex];
        cartItemCount -= product.quantity;
        cart.splice(productIndex, 1);
        updateCartCount(cartItemCount);
        calculateTotals();
    }
}
function updateCartQuantity(productId, newQuantity) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        const difference = newQuantity - product.quantity;
        product.quantity = newQuantity;
        cartItemCount += difference; 
        updateCartCount(cartItemCount); 
    }
}
function calculateTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const shipping = subtotal * 0.05; 
    const tax = subtotal * 0.0825; 

    let totalDiscount = 0; 
    if (discountCodeApplied) {
        totalDiscount = subtotal * 0.2; 
    }
    const total = subtotal + shipping + tax - totalDiscount;
    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').innerText = `$${shipping.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('discount').innerText = `$${totalDiscount.toFixed(2)}`;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}
function renderCartProducts() {
    const productsHolder = document.getElementById('productHolder');
    productsHolder.innerHTML = '';
    cart.forEach(product => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cartItem');
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('cartImageContainer');
        let image = document.createElement('img');
        image.setAttribute('src', product.image);
        imgContainer.appendChild(image);
        cartItem.appendChild(imgContainer);
        let cartDetails = document.createElement('div');
        cartDetails.classList.add('cartDetails');
        let name = document.createElement('h4');
        name.innerText = product.productName;
        cartDetails.appendChild(name);
        let itemPrice = document.createElement('p');
        itemPrice.classList.add('itemPrice');
        itemPrice.innerText = "$" + product.price;
        cartDetails.appendChild(itemPrice);
        let quantity = document.createElement('div');
        quantity.classList.add('quantity');
        quantity.innerHTML = `Quantity: <input type="number" value="${product.quantity}" min="1" data-product-id="${product.id}">`;
        cartDetails.appendChild(quantity);
        let removeButton = document.createElement('i');
        removeButton.classList.add("fa-solid", "fa-trash");
        removeButton.classList.add("removeButton");
        removeButton.addEventListener('click', function () {
            removeFromCart(product.id);
            renderCartProducts();
            calculateTotals();
        });
        cartDetails.appendChild(removeButton);
        cartItem.appendChild(cartDetails);
        productsHolder.appendChild(cartItem);
    });
    const quantityInputs = document.querySelectorAll('.quantity input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function () {
            const productId = parseInt(this.dataset.productId);
            const newQuantity = parseInt(this.value);
            updateCartQuantity(productId, newQuantity);
            calculateTotals();
        });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
    const applyCouponButton = document.querySelector('.couponAddOption button');
    applyCouponButton.addEventListener('click', function () {
        const couponCode = document.getElementById('discountCodeInput').value.trim();
        applyDiscountCode(couponCode);
    });
});
calculateTotals(); 
let selectedBrands = [];
let selectedCategories = [];
let selectedPriceRanges = [];
let selectedSortOrder = null;
function filterProducts() {
    let filteredProducts = products.data.filter(product =>
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        (selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            let [min, max] = range.split('-').map(Number);
            let price = parseFloat(product.price.replace(/,/g, ''));
            return price >= min && price <= max;
        }))
    );
    if (selectedSortOrder) {
        switch (selectedSortOrder) {
            case 'PriceHigh':
                filteredProducts.sort((a, b) => parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, '')));
                break;
            case 'PriceLow':
                filteredProducts.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
                break;
            case 'NameAsc':
                filteredProducts.sort((a, b) => a.productName.localeCompare(b.productName));
                break;
            case 'NameDesc':
                filteredProducts.sort((a, b) => b.productName.localeCompare(a.productName));
                break;
            case 'StarsHigh':
                filteredProducts.sort((a, b) => b.stars - a.stars);
                break;
            case 'StarsLow':
                filteredProducts.sort((a, b) => a.stars - b.stars);
                break;
        }
    }
    renderProducts('products', filteredProducts);
}
function handleFilter(selectedFilter, value, checked) {
    if (checked) {
        if (!selectedFilter.includes(value)) {
            selectedFilter.push(value);
        }
    } else {
        selectedFilter = selectedFilter.filter(item => item !== value); 
    }
    return selectedFilter; 
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.checkBoxFilter').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const filterType = this.closest('.filterSection').classList[1];
            const value = this.value;
            const checked = this.checked;
            switch (filterType) {
                case 'filterPageBrands':
                    selectedBrands = handleFilter(selectedBrands, value, checked);
                    break;
                case 'filterPageCategories':
                    selectedCategories = handleFilter(selectedCategories, value, checked);
                    break;
                case 'filterPagePriceRanges':
                    selectedPriceRanges = handleFilter(selectedPriceRanges, value, checked);
                    break;
                default:
                    break;
            }
            filterProducts(); 
        });
    });
    document.querySelectorAll('input[name="sortButton"]').forEach(radio => {
        radio.addEventListener('change', function () {
            selectedSortOrder = this.value;
            filterProducts();
        });
    });
    renderProducts('products');
});

renderProducts();
const searchBarInput = document.getElementById('searchBarInput');
searchBarInput.addEventListener('input', () => {
    const searchValue = searchBarInput.value.trim().toLowerCase();
    let filteredProducts = products.data.filter(product =>
        product.productName.toLowerCase().includes(searchValue)
    );
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
    }
    if (selectedPriceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return selectedPriceRanges.some(range => {
                let [min, max] = range.split('-').map(Number);
                let price = parseFloat(product.price.replace(/,/g, ''));
                return price >= min && price <= max;
            });
        });
    }
    renderProducts('products', filteredProducts);
});
