import { useState } from 'react';
import readyIcon from '../../Assets/ready-icon.svg';
import registerIcon from '../../Assets/register-icon.svg';
import rentIcon from '../../Assets/rent-icon.svg';
import browseIcon from '../../Assets/browse-icon.svg';
import scheduleIcon from '../../Assets/schedule-icon.svg';
import returnIcon from '../../Assets/return-icon.svg';

function Works() {
    const [hoverId, setHoverId] = useState("")
    const sections = [{
        heading: "How It Works",
        points: [
            {
                id: 1,
                heading: "Get ready",
                description: "Do you want to make an extra income from your vehicles, houses and other items? Make sure you have your items available.",
                img: readyIcon,
                hover: true,
            },
            {
                id: 2,
                heading: "Register",
                description: "Take photos of items you want to rent out. Complete your profile and list your item details on p33r.",
                img: registerIcon,
                hover: true,
            },
            {
                id: 3,
                heading: "Rent Out",
                description: "Make sure you're available on days you've set and respond promptly to requests.",
                img: rentIcon,
                hover: true,
            },
        ]
    },
    {
        heading: "Borrowing on P33R",
        points: [
            {
                id: 4,
                heading: "Browse",
                description: "Search for your preferred choice of item from the wide range of listing on p33r.",
                img: browseIcon,
                hover: true,
            },
            {
                id: 5,
                heading: "Schedule Rental",
                description: "Schedule rental for as long as you need and be careful with usage.",
                img: scheduleIcon,
                hover: true,
            },
            {
                id: 6,
                heading: "Return Item",
                description: "When the rental time lapses, return item in the same condition you got it.",
                img: returnIcon,
                hover: true,
            },
        ]
    },]
    return (<>
        <div className="px-4 md:px-6 flex flex-col justify-center items-center gap-16 pt-16 pb-20 bg-[#f9f9f9]">
            {sections.map(section => (
                <div className="flex flex-col gap-12 justify-center items-center w-full">
                    <p className="text-[#212674] font-manrope text-[44px] font-bold">{section.heading}</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 xl:gap-20 w-full">
                        {section.points.map(point => (
                            <div onMouseEnter={() => setHoverId(point.id)} onMouseLeave={() => setHoverId("")} className='flex flex-col gap-10 bg-white px-8 py-10 rounded-[20px] w-full md:max-w-[350px] h-[284px]'>
                                <img src={point.img} alt="ready" className={`w-[73px] mt-[-65px] filter drop-shadow-[4_10px_20px_rgba(33,38,116,0.25)] ${hoverId === point.id ? hoverId === 1 || hoverId === 4 ? "readyAndBrowseIconHoverEffect" : hoverId === 2 || hoverId === 5 ? "registerAndScheduleIconHoverEffect" : hoverId === 3 || hoverId === 6 ? "rentAndReturnIconHoverEffect" : "" : ""
                                    }`} />
                                <div className='flex flex-col gap-4'>
                                    <p className='text-[#191919] font-Manrope text-2xl font-bold'>{point.heading}</p>
                                    <p className='text-[#323232] font-Manrope text-base font-normal leading-normal'>{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </>)
}

export default Works;