interface BreadcrumbProps {
  pathName: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathName }) => {
  return (
    <div className="breadcrumb">
      <span className="breadcrumb__arrow" />

      <span className="breadcrumb__text">{pathName}</span>
    </div>
  );
};
