import CardPromo from "@/src/components/atoms/CardPromo";
import { Partners } from "@/src/lib/partners";
import { Partner } from "@/src/types/models";

export default function Page() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 '>
      {Partners.map((partner: Partner, id: number) => (
        <CardPromo
          key={id}
          name={partner.name}
          logo={partner.logo}
          alt={partner.alt}
          url={partner.url}
          // code={partner.code}
          description={partner.description}
          reduction={partner.reduction}
        />
      ))}
    </div>
  );
}
