import { ServiceItemsProps } from "./ServicesSection";

function ServiceItem(props: ServiceItemsProps) {
  return (
    <div className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5">
      <div className="text-gray-600 dark:text-gray-300 w-6 h-6 mb-3">
        {props.icon}
      </div>
      <h1 className="font-semibold text-lg text-gray-600 dark:text-gray-300 mb-1">
        {props.title}
      </h1>
      <p className="text-md text-gray-600 dark:text-gray-300">
        {props.description}
      </p>
    </div>
  );
}

export default ServiceItem;
