import React from 'react'
import { MdTimer } from "react-icons/md";

const TicetDetils = ({name,selectedCollege,selectedDay}) => {
    const getDay = (selectedDay) => {
        const days = {
            1: "السبت",
            2: "الثلاثاء",
            3: "الاربعاء",
            4: "الخميس",
            5: "الجمعه",
            6: "الاحد",
            7: "الاثنين",
            8: "الثلاثاء",
            9: "الاربعاء"
        };
        return days[selectedDay] || "";
    };

    return (
        <div className=' titlehead2  flex justify-center flex-col gap-2 bg-white p-1 md:p-4 rounded-xl place-items-center'>

            <h4 className=' p-4 text-3xl md:text-5xl font-arabicUI2 titlehead3  flex m-5'>

                <span className=' flex text-white'>
                    <MdTimer />
                    تفاصيل المعاد
                </span> </h4>


            <div className='titlehead mb-6  grid grid-cols-1'>
                <div dir='rtl' className=' pt-2 '>

                    <div className='titlehead2'>
                        <h4 className=' text-2xl md:text-4xl md:m-3 font-arabicUI2 text-black'>{name}</h4>
                        <h4 className=' text-2xl md:text-4xl md:m-3 font-arabicUI2 text-black'> {selectedCollege}</h4>



                    </div>
                    <div className='flex m-auto justify-center gap-4'>

                        <div className=' font-arabicUI2 titlehead2 m-4 w-fit mx-auto bg-white p-5 rounded-xl border-black border-4'>
                            <h4 className=' text-2xl md:text-7xl  font-arabicUI2'>12:00</h4>
                            <h3 className=' text-2xl md:text-6xl font-arabicUI2'>الساعة</h3>
                        </div>
                        <div className=' font-arabicUI2 titlehead2 m-4 w-fit mx-auto bg-white p-5 rounded-xl border-black border-4'>
                            <h4 className=' text-2xl md:text-7xl  font-arabicUI2 mx-auto flex justify-center'>98</h4>
                            <h3 className=' text-2xl md:text-6xl font-arabicUI2 mx-auto flex justify-center'>ترتيبك</h3>
                        </div>
                    </div>
                    <div dir='trl' className=' flex font-arabicUI2 titlehead2 mb-4 w-fit mx-auto bg-white p-5 rounded-xl border-black border-4'>
                        <h4 className=' text-4xl md:text-7xl  font-arabicUI2 mx-auto flex justify-center'>{getDay(selectedDay)}</h4>
                        <h4 className=' text-4xl md:text-7xl  font-arabicUI2 mx-auto flex justify-center'>{selectedDay}/9 </h4>
                    </div>
                </div>
            </div>

            <div dir='rtl' className=' m-2 flex text-4xl md:text-6xl font-arabicUI2 gap-3'>
                <h3 className=' text-black'>الدور الحالي <span className=' text-blue-500 '>10</span></h3>
                <div className=' relative'>
                    <div className=' absolute rounded-xl animate-ping w-4 h-4 duration-1000 bg-blue-500'> </div>
                    <div className=' absolute rounded-xl  w-4 h-4 duration-1000 bg-blue-500'> </div>

                </div>
            </div>

        </div>
    )
}

export default TicetDetils