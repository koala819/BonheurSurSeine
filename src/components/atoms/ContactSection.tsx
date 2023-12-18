import { KeyTextField } from "@prismicio/types";

const ContactSection = ({ text }: { text: KeyTextField }) => {
  return (
    <div className='p-6 text-center'>
      <p className='text-lg font-semibold'>{text}</p>
    </div>
  );
};

export default ContactSection;
