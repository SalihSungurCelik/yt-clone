import { AiFillBell, AiFillVideoCamera } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link className="flex items-center gap-[10px]">
        <img className="w-12 " src="/youtube.png" alt="" />
        <h1 className="text-2xl max-sm:hidden">Youtube</h1>
      </Link>

      <form
        action=""
        className="flex iems-center border border-gray-400 rounded-[20px]"
      >
        <input
          className="bg-black outline-none rounded-[20px] px-3 py-1"
          type="text"
        />
        <button className="border-l px-2">
          <GoSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer">
        <AiFillBell className="hover:text-gray-400" />
        <AiFillVideoCamera className="hover:text-gray-400" />

        <i></i>
      </div>
    </header>
  );
};

export default Header;
