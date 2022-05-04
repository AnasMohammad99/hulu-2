import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import buyPhoto from "../assets/e.jpg";

export default function Accordions() {
  const [expandAccordion, setExpandAccordion] = React.useState(true);
  return (
    <div>
      <Accordion expanded={expandAccordion} sx={{ direction: "rtl" }}>
        <AccordionSummary
          onClick={() => setExpandAccordion(!expandAccordion)}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <p className="font-semibold text-xl">الطلب</p>
        </AccordionSummary>
        <AccordionDetails>
          <Image src={buyPhoto} />
          <div className="">
            <p className="font-semibold text-xl text-center">
              لطلــب المنتج سجـل بياناتك وسوف يقوم احد ممثلي خدمة العملاء
              بالتواصل معكم المنتج طبيعي %100 وامن تماما ليس له اي اثار جانبية
              كما انه حاصل علي تصريح وزارة الصحة المصرية
            </p>
            <div className="flex flex-col ">
              <input
                className="shadow-md m-3 border p-3"
                type="text"
                placeholder="الإسم"
              />
              <input
                className="shadow-md m-3 border p-3"
                type="text"
                placeholder="رقم الهاتف"
              />
              <button className="bg-green-700 text-white p-4 rounded-lg">
                إطلب
              </button>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
