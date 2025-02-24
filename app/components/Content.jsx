'use client'
import Image from 'next/image'
import Swal from 'sweetalert2'
import React, { useState } from 'react'
import { FaCheck, FaUniversity } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiCapsuleFill, RiFacebookCircleFill } from "react-icons/ri";
import { BiSolidDonateHeart } from "react-icons/bi";
import { RiComputerFill } from "react-icons/ri";
import { MdEngineering } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Link from 'next/link';
import TicetDetils from './TicetDetils';
import GlobalData from '../api/GlobalData';
import { v4 as uuidv4 } from 'uuid';

const Content = () => {
    const [showModel, setShowModel] = useState(false)
    const [name, setName] = useState("");
    const [selectedCollege, setSelectedCollege] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [index, setIndex] = useState(0)

    const sendData = (data) => {
        GlobalData.query(data).then((res) => {
            console.log(res)
        });
    }

    const getlenth = async () => {
        const res = await GlobalData.query2();
        console.log(res.human.jsonres.length)
        return res.human.jsonres.length + 1;
    }

    const handleRadioChangeCollege = (e) => {
        setSelectedCollege(e.target.value);
    };
    const handleRadioChangeDays = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleClick = async () => {
        console.log("Name: ", name);
        console.log("College: ", selectedCollege);
        console.log("Day: ", selectedDay);

        if (!name || !selectedCollege || !selectedDay) {
            Swal.fire({
                title: "يجب اختيار الاسم والكلية واليوم المناسب",
                icon: "error",
                confirmButtonText: "حسناً",
            });
            return;
        }

        const newIndex = await getlenth();
        setIndex(newIndex);

        const data = {
            id: uuidv4(),
            name: name,
            college: selectedCollege,
            day: selectedDay,
            index: newIndex
        };

        Swal.fire({
            title: "هل انت متأكد من حجز المعاد ؟",
            text: "مش هتقدر تحجز معاد تاني بعدين !",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "الغاء",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "اه متاكد!",
        }).then((result) => {
            if (result.isConfirmed) {
                sendData(data);
                setShowModel(true);
                Swal.fire({
                    title: "تم الحجز بنجاح ",
                    text: "اتحدد لحضرتك ساعة محددة باليوم لتسليم الملف بالرجاء الالتزام",
                    icon: "success"
                });
            }
        });
    }

    const collegs = [
        {
            name: "كليه طب بشري",
            icon: <FaUserDoctor />,
            value: "human_medicine"
        },
        {
            name: "كليه صيدلة",
            icon: <RiCapsuleFill />,
            value: "pharmacy"
        },
        {
            name: "كليه علاج طبيعي",
            icon: <BiSolidDonateHeart />,
            value: "physical_therapy"
        },
        {
            name: "كليه حاسبات ",
            icon: <RiComputerFill />,
            value: "computers"
        },
        {
            name: "كليه الهندسة",
            icon: <MdEngineering />,
            value: "engineering"
        },
        {
            name: "كليه علاقات عامة",
            icon: <FaUserFriends />,
            value: "public_relations"
        }
    ];

    const generateDays = (start, count) => Array.from({ length: count }, (_, i) => i + start);

    const firstDays = generateDays(1, 3);
    const secondDays = generateDays(4, 3);
    const thirdDays = generateDays(7, 3);

    return (
        <div className='cursor-default mx-auto items-center flex m-5  justify-center'>
            <div className='md:p-5 p-2 rounded-lg w-full md:w-1/2 m-2 backdrop-blur-xl bg-black/10'>
                <div className="relative flex m-auto justify-center from-black bg-gradient-to-tr gap-2 to-black/70 rounded-xl mb-5 p-5">
                    <Link target='_blank' href='https://www.facebook.com/profile.php?id=100085627053543'>
                        <RiFacebookCircleFill className='text-4xl text-white hover:ease-in-out hover:scale-125 transition hover:text-blue-500 top-5 right-5 cursor-pointer absolute'></RiFacebookCircleFill>
                    </Link>
                    <div className='flex justify-center gap-2 place-items-center'>
                        <Image src='/mnulogo.svg' width={100} alt='logo' className='flex m-4' height={100}></Image>
                        <span className='font-arabicUI2 text-white flex justify-center text-4xl'>جامعة المنيا الأهلية</span>
                    </div>
                </div>
                {!showModel ?
                    <div className='grid grid-cols-1'>
                        <div className='titlehead2 bg-white flex w-full rounded-xl'>
                            <span className="bg-gray-200 font-arabicUI2 text-2xl md:text-4xl text-gray-700 p-4 rounded-l-xl">الاسم</span>
                            <input placeholder='' onChange={(e) => { setName(e.target.value) }} value={name} dir='rtl' className='overflow-hidden text-ellipsis focus:outline-none rounded-r-xl w-full font-arabicUI2 text-2xl md:text-4xl p-4' type="text" />
                        </div>
                        <div className="titlehead2 mt-5 px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
                            <legend className="font-arabicUI2 text-3xl md:text-3xl mb-3 select-none flex place-items-center mx-auto justify-center gap-2" dir='rtl'>اختار كليتك <FaUniversity /></legend>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                {collegs.map((colleg) => (
                                    <label
                                        key={colleg.name}
                                        htmlFor={colleg.name}
                                        name={colleg.name}
                                        dir='rtl'
                                        className="cursor-pointer font-arabicUI2 text-2xl md:text-2xl transition h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                                    >
                                        <span className='flex gap-2 place-items-center m-6'>
                                            {colleg.name}
                                            {colleg.icon}
                                        </span>
                                        <input
                                            type="radio"
                                            name="status"
                                            className="w-4 h-4 absolute accent-blue-500 right-3"
                                            id={colleg.name}
                                            value={colleg.name}
                                            checked={selectedCollege === colleg.name}
                                            onChange={handleRadioChangeCollege}
                                        />
                                    </label>
                                ))}
                            </div>
                            <hr />
                            <div className='titlehead'>
                                <h3 dir='rtl' className='place-items-center flex gap-2 justify-center font-arabicUI2 text-white text-3xl md:text-4xl'>اختار اليوم المناسب معاك <FaRegCalendarDays className=' text-4xl' /></h3>
                            </div>
                            <div className="radio-inputs font-arabicUI3">
                                {firstDays.map((day, index) => (
                                    <label key={index} className="radio">
                                        <input
                                            name="radio"
                                            type="radio"
                                            value={day}
                                            checked={selectedDay === day.toString()}
                                            onChange={handleRadioChangeDays}
                                        />
                                        <span className="text-lg md:text-xl name">9 / {day} </span>
                                    </label>
                                ))}
                            </div>
                            <div className="radio-inputs font-arabicUI3">
                                {secondDays.map((day, index) => (
                                    <label key={index} className="radio">
                                        <input
                                            name="radio"
                                            type="radio"
                                            value={day}
                                            checked={selectedDay === day.toString()}
                                            onChange={handleRadioChangeDays}
                                        />
                                        <span className="text-lg md:text-xl name">9 / {day} </span>
                                    </label>
                                ))}
                            </div>
                            <div className="radio-inputs font-arabicUI3">
                                {thirdDays.map((day, index) => (
                                    <label key={index} className="radio">
                                        <input
                                            name="radio"
                                            type="radio"
                                            value={day}
                                            checked={selectedDay === day.toString()}
                                            onChange={handleRadioChangeDays}
                                        />
                                        <span className="text-lg md:text-xl name">9 / {day} </span>
                                    </label>
                                ))}
                            </div>
                            <button onClick={handleClick} className='buttonn group'>
                                <span dir='rtl' className='m-auto justify-center gap-3 font-arabicUI2 flex text-white text-4xl md:text-5xl place-items-center'>حجز معاد لتسليم الملف <MdOutlineAccessTimeFilled className='text-4xl group-hover:animate-spin'></MdOutlineAccessTimeFilled></span>
                            </button>
                        </div>
                    </div>
                    :
                    <TicetDetils name={name} selectedCollege={selectedCollege} selectedDay={selectedDay}></TicetDetils>
                }
            </div>
        </div>
    )
}

export default Content