import { title } from "process";
import Category from "./Category";
import { GiGameConsole } from "react-icons/gi";
import { RiLiveFill } from "react-icons/ri";
import { GiAnimalHide } from "react-icons/gi";
import { SiThemodelsresource } from "react-icons/si";
import { GiLoveLetter } from "react-icons/gi";
import { GiLifeInTheBalance } from "react-icons/gi";
const Browse = () => {
    const categories = [
        { title: "Lives", icon: <RiLiveFill />, css: "text-[60px] hover:rotate-45" },
        { title: "Game", icon: <GiGameConsole />, css: "text-[55px] hover:rotate-45" },
        { title: "Life", icon: <GiLifeInTheBalance />, css: "text-[55px] hover:rotate-45" },
        { title: "Animal", icon: <GiAnimalHide />, css: "text-[55px] hover:rotate-45" },
        { title: "Love", icon: <GiLoveLetter />, css: "text-[55px] hover:rotate-45" },
        { title: "Model", icon: <SiThemodelsresource />, css: "text-[45px] hover:rotate-45" },

    ]
    return <>
        <div className="">
            <div className="text-[55px] font-bold text-black">Explore</div>
            <div className="flex flex-wrap gap-x-8 py-[2rem] gap-y-10 sm:gap-y-10">
                {
                    categories.map((categories, index, css) => (
                        <>
                            <Category title={categories.title} icon={categories.icon} css={categories.css} />
                        </>
                    ))
                }
            </div>
        </div>
    </>
}
export default Browse;