import TableauNotation from "@/src/components/atoms/TableauNotation";

export default function Page() {
  return (
    <section
      className='mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 text-gray-900 dark:text-white mb-8 space-y-8 pt-8'
      // className='flex flex-col-reverse md:flex-row items-center mt-8 p-8'
    >
      <p className='text-lg font-semibold'>
        Voici une première présentation du protocole de test et du système de
        notation que j&apos;ai mis en place (non sans l&apos;immense concours de
        Fabien) pour t&apos;aider à la lecture de mes reviews. Au-delà de toutes
        formes de notation, chaque roue, pour le moment et sauf exception est
        super pour un usage qui lui est particulier, le tout, c&apos;est de
        trouver &quot;bonne roue à ses pieds&quot;
      </p>
      <TableauNotation />
    </section>
  );
}
