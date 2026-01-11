'use client'

type BuyButtonProps = {
  priceId: string;
}

export default function StripePurchaseButton({ priceId }: BuyButtonProps) {
  async function handleBuy() {
    const res = await fetch('/api/stripe-create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId, metadata: { mockdata: 'true' } }),
    });
    if (!res.ok) {
      try {
        const err = await res.json();
        alert(`Create Checkout Session failed: ${err?.error || res.status}`);
      } catch {
        alert('Create Checkout Session failed');
      }
      return;
    }
    const data = await res.json();
    if (data?.url) {
      window.location.href = data.url as string;
    }
  }

  return (
    <button
      onClick={handleBuy}
      className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
    >
      Purchase
    </button>
  );
}


