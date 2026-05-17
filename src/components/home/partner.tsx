import Link from "next/link"

const ServicesItem = [
    {
        id: 1,
        icon: "/images/landingpage/p1.svg"
    },
    {
        id: 2,
        icon: "/images/landingpage/p2.svg"
    },
    {
        id: 3,
        icon: "/images/landingpage/p3.svg"
    },
    {
        id: 4,
        icon: "/images/landingpage/p4.svg"
    },
    {
        id: 5,
        icon: "/images/landingpage/p5.svg"
    },

]



const Partner = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-1 lg:py-2 xl:py-5 2xl:py-5">
                <div className="flex justify-between items-center">

                    <div className="w-[100%] bg-transparent p-px rounded-xl">
                        <div className="bg-transparent items-center flex justify-center sm:justify-between flex-wrap lg:flex-nowrap gap-2 lg:-gap-6 py-2 px-2  rounded-[11px]">

                            {ServicesItem.map((item, index) => (
                                <div key={index} className={`text-center`}>
                                    <Link href={""} target="_blank"><img src={item.icon} alt="" /></Link>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Partner