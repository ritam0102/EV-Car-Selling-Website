import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';

export const runtime = 'nodejs';

export async function POST(req: Request) {
	const sig = req.headers.get('stripe-signature')!;
	const body = await req.text();

	let event: Stripe.Event;
	try {
		event = await stripe.webhooks.constructEventAsync(
			body,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET!
		);
	} catch (err: any) {
		return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
	}

	switch (event.type) {
		case 'checkout.session.completed': {
			const session = event.data.object as Stripe.Checkout.Session;
			// TODO: Mark order as paid / open permissions
			break;
		}
		// Other events can be handled here
	}

	return NextResponse.json({ received: true });
}
