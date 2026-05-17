import React from 'react'
import Marquee from 'react-fast-marquee'
 

const Testinomials = () => {

    const News = [
        {
            id: 1,
            icon: "/images/landingpage/bman1.svg",
            ml:"ml-4"
        },
        {
            id: 2,
            icon: "/images/landingpage/bman2.svg",
            ml:"ml-0"
        },
        {
            id: 3,
             
            icon: "/images/landingpage/bman3.svg",
            ml:"ml-0"
        },
        {
            id: 4,
           icon: "/images/landingpage/bman4.svg",
            ml:"ml-0"
        },
        {
            id: 5,
            icon: "/images/landingpage/bman5.svg",
            ml:"ml-0"
        },
        


    ]
    return (
        <>

            <div className='bg-[#15171c] pb-10'>
                <Marquee gradient={false} speed={50}>
                    <div className="grid  grid-cols-5 gap-4">

                        {News.map((item, e) => (
                            <div className={`${item.ml} flex items-center gap-2  p-px rounded-2xl`} key={e}>
                                <div className=''><img src={item.icon} className='w-full '/></div>
                            </div>
                        ))}


                    </div>
                </Marquee>
            </div>


        </>
    )
}

export default Testinomials;
