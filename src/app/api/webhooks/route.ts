import connectDB from "@/lib/connectDB";
import { stripe } from "@/lib/stripe";
import Order from "@/models/order.model";
import ShippingAddress from "@/models/shipping-address.model";
import BillingAddress from "@/models/billing-address.model";
import { headers } from "next/headers";
import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const signature = headers().get("stripe-signature");
        if (!signature) return new Response("Invalid signature", { status: 400 })

        const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
        if (event.type === "checkout.session.completed") {
            if (!event.data.object.customer_details?.email) {
                throw new Error("Missing user email.")
            }
            const session = event.data.object as Stripe.Checkout.Session;
            const { userId, orderId } = session.metadata || { userId: null, orderId: null }
            if (!userId || !orderId) throw new Error("Missing metadata");

            const billingAddress = session.customer_details!.address
            const shippingAddress = session.shipping_details!.address

            await connectDB();
            const shippingAddressDB = await ShippingAddress.create({
                name: session.customer_details!.name,
                city: shippingAddress!.city,
                country: shippingAddress!.country,
                postalCode: shippingAddress!.postal_code,
                street: shippingAddress!.line1,
                state: shippingAddress!.state,
            })

            await shippingAddressDB.save();
            const billingAddressDB = await BillingAddress.create({
                name: session.customer_details!.name,
                city: billingAddress!.city,
                country: billingAddress!.country,
                postalCode: billingAddress!.postal_code,
                street: billingAddress!.line1,
                state: billingAddress!.state,
            })
            await billingAddressDB.save();
            const order = await Order.findByIdAndUpdate(orderId, {
                isPaid: true,
                shippingAddress: shippingAddressDB._id,
                billingAddress: billingAddressDB._id,
            });

        }
        return NextResponse.json({
            result: event,
            ok: true
        })
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong",
            ok: false
        },
            { status: 500 })
    }
}