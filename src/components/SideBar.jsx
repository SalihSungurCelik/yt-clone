import { categories } from "../constants.jsx";
const SideBar = () => {
  return (
    <div>
      <div>
        {categories.map((item) => (
          <div className="flex items-center gap-2 py-4 px-2 md:">
            <span>{item.icon}</span>
            <span> {item.name} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
