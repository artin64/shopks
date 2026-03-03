import { Button } from '@hopify/ui/src/button';

const featured = [
  { id: 1, name: 'Artisan Coffee', price: 12.5 },
  { id: 2, name: 'Handmade Rug', price: 85 }
];

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Storefront</h2>
        <p className="text-zinc-500">Buyer-facing marketplace for Kosovo vendors.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((item) => (
          <article className="rounded-lg border p-4" key={item.id}>
            <h3 className="font-medium">{item.name}</h3>
            <p>€{item.price.toFixed(2)}</p>
            <Button className="mt-3">Add to cart</Button>
          </article>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <a className="rounded border p-4" href="/vendor">Vendor dashboard placeholder</a>
        <a className="rounded border p-4" href="/admin">Admin dashboard placeholder</a>
      </div>
    </section>
  );
}
