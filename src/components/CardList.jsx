import CardComp from "./CardComp.jsx";
import CardEcommerce from "./CardEcommerce.jsx";

export default function CardList({ data, type, children }) {
  return (
    <div className="block mx-auto w-4xl">
      {children}
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) =>
          type == "category" ? (
            <CardComp key={index} item={item} />
          ) : (
            <CardEcommerce key={index} item={item} />
          )
        )}  
      </div>
    </div>
  );
}
