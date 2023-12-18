import CardPromo from "@/src/components/atoms/CardPromo";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

export default async function Page() {
  const client = createClient();
  const promos = await client.getByType("promo").catch(() => notFound());

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 '>
      {promos.results.map((promo: any, id: number) => (
        <div key={id} className='text-red-500'>
          <CardPromo
            key={id}
            name={promo.data.name}
            logo={promo.data.logo.url}
            alt={promo.data.logo.alt}
            website={promo.data.website}
            description={promo.data.description}
            code={promo.data.code}
            montant={promo.data.montant}
          />
        </div>
      ))}
    </div>
  );
}
