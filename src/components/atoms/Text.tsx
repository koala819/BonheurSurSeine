export function Text({
  text,
  className,
}: {
  text: string | null;
  className?: string;
}) {
  return <p className={className}>{text}</p>;
}
