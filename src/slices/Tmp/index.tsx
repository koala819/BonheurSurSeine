import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Tmp`.
 */
export type TmpProps = SliceComponentProps<Content.TmpSlice>;

/**
 * Component for "Tmp" Slices.
 */
const Tmp = ({ slice }: TmpProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for tmp (variation: {slice.variation}) Slices
    </section>
  );
};

export default Tmp;
