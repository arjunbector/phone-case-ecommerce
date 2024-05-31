import mongoose from "mongoose";

enum OrderStatus {
    fullfilled,
    shipped,
    awaiting_shipment,
}

const orderSchema = new mongoose.Schema({
    configurationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Configuration',
    },
    userId: {
        type: String,
    },
    amount: {
        type: Number
    },
    isPaid: {
        type: Boolean
    },
    status: {
        type: String,
        enum: Object.values(OrderStatus),
        default: "awaiting_shipment"
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ShippingAddress",
    },
    billingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BillingAddress",
    }
}, { timestamps: true })

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;

