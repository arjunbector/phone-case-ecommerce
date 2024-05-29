import mongoose from "mongoose";

enum OrderStatus {
    fullfilled,
    shipped,
    awaiting_shipment,
  }

const orderSchema = new mongoose.Schema({
    configurationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Configuration',
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    amount:{
        type:Number
    },
    isPaid:{
        type:Boolean
    },
    status:{
        type:String,
        enum:Object.values(OrderStatus),
    },
    shippingAdress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ShippingAddress",
        defalut:"awaiting_shipment"
    }
},  {timestamps:true})

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);    
export default Order;

