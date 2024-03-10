
const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
};

const products = await getProducts();
const HTMLContainer = document.querySelector("#container");

products.forEach((product) => {
    const HTMLProduct = `
        <div class="product">
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" />
            <p>${product.description}</p>
            <p>${product.price}</p>
        </div>
    `;

    HTMLContainer.innerHTML += HTMLProduct;

});