import Text from "../common/Text";

interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
}

const SectonLayout = ({ title, children }: SectionLayoutProps) => {
  return (
    <section className="flex flex-col mt-40">
      <Text
        as="h2"
        style="flex items-center gap-4 font-title-bold text-4xl mb-10 bedore:content-[''] before:block before:h-px before:w-12 before:bg-primary before:-translate-y-px"
      >
        {title}
      </Text>
      {children}
    </section>
  );
};

export default SectonLayout;
