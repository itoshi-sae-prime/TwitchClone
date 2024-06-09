const Channel = ({ img, name, nickname, active, view }: any) => {
    return (
        <>
            <div className="flex items-center lg:justify-between mb-2">
                <div className="flex gap-x-1">
                    <div className="w-10 h-10 lg:mx-auto">
                        <img className="w-10 h-10 object-cover rounded-2xl" src={img} alt="" />
                    </div>
                    <div className="hidden lg:flex lg:justify-between lg:items-center  whitespace-nowrap">
                        <div className="">
                            <div className="text-[1px] font-bold">{nickname}</div>
                            <p className="text-[1px]">{name}</p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex lg:justify-between lg:items-center font-semibold pl-2">
                    <div className={`mx-[3px] ${active}`}>
                    </div>
                    <div className="text-[3px]">{view}</div>
                </div>
            </div>
        </>
    )
}
export default Channel;