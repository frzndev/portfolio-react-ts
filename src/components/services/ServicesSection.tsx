import ServiceItem from "./ItemSection";
import TitleSection from "./TitleSection";

export interface ServiceItemsProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  data: ServiceItemsProps[];
}

function ServicesSection(props: ServicesSectionProps) {
  return (
    <div className="py-12">
      <TitleSection></TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {props.data.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
