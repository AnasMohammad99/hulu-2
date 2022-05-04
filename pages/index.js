import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import Modal from "../components/Modal";
import Image from "next/image";
import result1 from "../assets/1w.png";
import result2 from "../assets/2w.png";
import coverPhoto from "../assets/asd.jpg";
import mainPhoto from "../assets/bg.png";
import brainPhoto from "../assets/m.jpg";

const Home = () => {
  return (
    <div className="">
      <div className="bg-blue-900 w-full flex flex-col justify-center items-center p-10">
        <div className="w-32 h-32">
          <Image src={coverPhoto} />
        </div>
        <div className="pt-8 sm:text-2xl md:text-4xl font-bold text-white">
          جيل الفحولة الاصلي رقم واحد في العالم
        </div>
      </div>
      <div className="bg-red-800 pb-20">
        <div className="md:flex md:flex-row pt-12  md:px-20 md:pt-8 sm:flex-col sm:justify-center sm:items-center">
          <div className="pt-12 md:pt-16 md:w-[45rem] md:h-[22.5]">
            <Image src={mainPhoto} />
          </div>
          <div className="flex flex-col justify-center items-center md:pl-20 md:pt-10">
            <p className="text-4xl font-bold py-8 md:py-24 md:pb-16 ">
              Asclepius Gel
            </p>
            <ul className="list-disc mx-4 md:mx-0 pb-8">
              <li className="md:pb-6 "> حل نهائى للمشاكل الجنسيه لدى الرجال</li>
              <li className="md:pb-6"> علاقه اطول و تحكم اكثر فى وقت القذف</li>
              <li className="md:pb-6"> حل طبيعى لزياده القضيب طول و عرض</li>
              <li className="md:pb-6"> انتصاب قوى وثابت لنهايه العلاقه</li>
              <li className="md:pb-6">
                منتج طبيعي وأمن من مكونات وزيوت طبيعية
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full  flex justify-center md:pt-28">
          <Modal />
        </div>
      </div>
      <div className="mx-2 md:mx-36">
        <Accordion sx={{ direction: "rtl" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p className="font-semibold text-xl">طريقه عمله</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex justify-center">
              <Image src={brainPhoto} />
            </div>
            <p className="font-semibold text-xl text-center ">
              تتوغل مكوناتة فى بطانه النسيج الكهفى للعضو الذكرى ليعمل على تنشيط
              الخلايا و الاوعية الدموية لضخ الدم ليجعل القضيب منتصبا وزياده حجمه
              طولا و عرضا ويأخر القذف ليزيد من الاثاره و النشاط الجنسى و يغنيك
              عن عمليات تكبير العضو المكلفة و الغير مضمونة
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ direction: "rtl" }}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className="font-semibold text-xl">النتيجة</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col justify-center md:flex-row">
              <Image
                src={result1}
                alt="Picture of the author"
                width={550}
                height={400}
              />
              <Image src={result2} width={550} height={400} />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="bg-gray-700">
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-bold py-8 text-white">
            خصم 40% لفترة محدودة
          </p>
          <p className="text-lg font-bold text-white text-center">
            ضمان استرجاع المنتج خلال 14 يوم في حالة عدم رضائك عن النتائج
          </p>
          <div className="py-8">
            <img src="https://tereva.club/asclepius/images/b1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
