const Breadcrumb = ({ items }) => {
    return (
      <nav aria-label="breadcrumb" className="pb-5 pt-0 px-0">
        <ul className="breadcrumb flex">
          {items.map((item, index) => (
            <li key={index} className={`breadcrumb-item m-0`}>
              {index === items.length - 1 ? (
                <span>{item.label}</span> 
              ) : (
                <a className="m-1" href={item.url}>{item.label} {'/'}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Breadcrumb;