module.exports = async function (context, req) {

    const order = req.body;

    if (!order || !order.productId) {
        context.res = {
            status: 400,
            body: "Invalid order. Please send productId."
        };
        return;
    }

    context.bindings.outputSbMsg = JSON.stringify(order);

    context.res = {
        status: 200,
        body: {
            message: "Order placed and sent to queue successfully!",
            order: order
        }
    };
};
