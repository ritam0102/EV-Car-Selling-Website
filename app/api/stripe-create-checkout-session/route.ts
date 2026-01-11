import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const { priceId, quantity = 1, customerEmail, metadata } = await req.json();
    if (!priceId) {
      return NextResponse.json({ error: 'priceId is required' }, { status: 400 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Preflight: best-effort account check (do not block creation)
    try {
      const account: any = await stripe.accounts.retrieve();
      const businessName = account?.business_profile?.name;
      if (!businessName) {
        console.warn('[Stripe][Preflight] business_profile.name is missing, continuing to create for development debugging');
      }
    } catch (e) {
      console.warn('[Stripe][Preflight] Account information check failed, ignored', e);
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity }],
      success_url: `${appUrl}/stripe-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/stripe-cancel`,
      ...(customerEmail ? { customer_email: customerEmail } : {}),
      ...(metadata ? { metadata } : {}),
    });

    return NextResponse.json({ url: session.url, id: session.id });
  } catch (err: any) {
    const message = err?.message || 'Unknown error creating checkout session';
    console.log(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


