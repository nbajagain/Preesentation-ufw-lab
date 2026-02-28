module.exports = async function (context, req) {

    const products = [
        { id: "1", name: "Wireless Headphones", price: 250, category: "electronics" },
        { id: "2", name: "Smart Watch", price: 399, category: "electronics" },
        { id: "3", name: "Gaming Keyboard", price: 120, category: "electronics" },
        { id: "4", name: "Backpack", price: 80, category: "accessories" }
    ];

    context.res = {
        status: 200,
        body: products
    };
};
