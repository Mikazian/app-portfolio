import Text from '../common/Text';

interface SectionLayoutProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

const SectionLayout = ({ id, title, children }: SectionLayoutProps) => {
  return (
    <section id={id} className="flex flex-col mt-40">
      <Text
        as="h2"
        className="flex items-center gap-4 font-title-bold text-4xl mb-10 bedore:content-[''] before:block before:h-px before:w-12 before:bg-primary before:-translate-y-px"
      >
        {title}
      </Text>
      {children}
    </section>
  );
};

export default SectionLayout;
