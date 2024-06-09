const Card = ({ img, name, view, type, css }: any) => {
    return (
        <>
            <div className="mb-[20px] gap-x-5 sm:gap-x-10 md:gap-x-15 lg:gap-x-20">
                <div className="w-[210px] h-[12rem] sm:w-[220px] sm:h-[10rem] md:w-[230px] md:h-[13rem] lg:w-[230px] lg:h-[15rem]">
                    <img className="w-full h-full object-cover rounded-[0.5rem]" src={img} />
                </div>
                <p className="font-bold text-[18px] uppercase">{name}</p>
                <p className="text-gray-700 font-mono ">{view}</p>
                <p className="bg-gray-300 inline-block rounded-md px-1">{type}</p>
            </div>
        </>
    )
};
export default Card;