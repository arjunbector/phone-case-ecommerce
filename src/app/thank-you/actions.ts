"use server";

import connectDB from "@/lib/connectDB";
import Order from "@/models/order.model";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getPaymentStatus = async ({ orderId }: { orderId: string }) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user?.id || !user?.email) {
        throw new Error("User not found");
    }

    connectDB();
    const order = await Order.findOne({ _id: orderId, userId: user.id }).populate({ path: "configurationId" }).populate({ path: "shippingAddress" }).populate({ path: "billingAddress" });
    if (!order) throw new Error("This order does not exist.");
    if (order.isPaid) {
        return order;
    }
    else {
        return false
    }
}