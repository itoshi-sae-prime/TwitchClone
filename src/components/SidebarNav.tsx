import { GrChannel } from "react-icons/gr";
import { IoMdSkipBackward } from "react-icons/io";
import { useState } from "react";
import Member from "../data/Member";
import Channel from "./Channel";

const Sidebar = () => {
    const [toggle, setToggle] = useState<boolean>(true);
    const handleBack = () => {
        try {
            if (toggle === true) {
                setToggle(false)
            }
            else {
                setToggle(true)
            }
        }
        catch {

        }
    }
    console.log(toggle);
    return (
        <>
            <div className="sticky top-0 p-3 mx-2 bg-white lg:py-2 z-20 h-full borders">
                <div className="whitespace-nowrap flex">
                    {
                        toggle && <p className="hidden sm:text-center text-[13px] font-bold lg:flex ">Recommended Channels</p>
                    }
                    {
                        !toggle && <div className="sm:px-2 sm:flex md:flex lg:hidden sm:mx-2">
                            <GrChannel />
                        </div>
                    }
                    <div className="sm:hidden lg:flex">
                        {
                            toggle ? <div className="hidden mx-2 sm:hidden lg:flex">
                                <button onClick={handleBack}>
                                    <IoMdSkipBackward />
                                </button>
                            </div> :
                                <div className="hidden mx-2 sm:hidden lg:flex">
                                    <button onClick={handleBack}>
                                        <GrChannel />
                                    </button>
                                </div>
                        }
                    </div>
                </div>
                <div className="lg:mt-[3px] mt-[8px] absolute left-0 bg-white lg:py-2 lg:px-2">
                    {
                        toggle && Member.map((member) => {
                            return (
                                <>
                                    <Channel img={member.img} name={member.name} nickname={member.nickname} view={member.view} active={member.active} />
                                </>
                            )
                        })
                    }
                    <div className="">
                        {
                            !toggle && Member.map((member) => {
                                return (
                                    <>
                                        <Channel img={member.img} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}
export default Sidebar;