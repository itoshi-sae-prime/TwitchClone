import React from "react";
const Category = ({ title, icon, css }: any) => {
    return <>
        <div className="relative">
            <div className="bg-blue-500 w-[9rem] rounded-[1rem] sm:w-[16rem] md:w-[13rem] lg:w-[13rem]">
                <div className="text-white font-bold text-[30px] px-4 py-1">{title}</div>
            </div>
            <div className="absolute -top-[2rem] right-3 -rotate-12">
                <div className={`text-black text-[15x] ${css}`}>{icon}</div>
            </div >
        </div >
    </>
}
export default Category;