import { FaSearch } from "react-icons/fa";
import Title from "../data/Title";
import Card from "./Card";
import { type } from "os";
const Cards = () => {
    return (
        <>
            <div className="flex gap-x-4">
                <p className="cards text-black text-[22px] font-bold hover:text-blue-400 cursor-pointer">
                    Categories
                    <div className="subcards w-[30px] h-4 hover:bg-blue-400 mt-1"></div>
                </p>
                <p className="cards text-black text-[22px] font-bold hover:text-blue-400 cursor-pointer">
                    Live Channels
                    <div className="subcards w-[30px] h-4 hover:bg-blue-400 mt-1"></div>
                </p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                    <span className="text-[15px] font-bold">Fillter By Tag</span>
                    <div className="flex items-center bg-slate-200 py-1 px-2">
                        <FaSearch />
                        <input className="bg-slate-200 text-black pl-2 outline-none w-[13rem]" type="search" placeholder="Search Category Tags" />
                    </div>
                </div>
            </div >
            <div className={`grid grid-cols-2 gap-x-4 sm:gap-x-20 mt-[1rem] sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xxxl:grid-cols-7 xxl:gap-x-5`}>
                {
                    Title.map((title) => {
                        return (
                            <>
                                <Card img={title.img} name={title.name} view={title.view} type={title.type} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Cards