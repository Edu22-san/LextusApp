import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardsDocumentsCatalogs.css";
import IconChecklist from "../../assets/img/icon-checklist.png";
import { Checkbox } from "primereact/checkbox";

const DataCards = [
  {
    id: 1,
    title: "Visa U",
    documents: [
      "Document/days/accepted",
      "Document/days/accepted",
      "Document/days/upload",
    ],
  },
  {
    id: 2,
    title: "Visa Usa",
    documents: [
      "Document/days/accepted",
      "Document/days/accepted",
      "Document/days/upload",
    ],
  },
  {
    id: 3,
    title: "Visa U",
    documents: [
      "Document/days/accepted",
      "Document/days/accepted",
      "Document/days/upload",
    ],
  },
];

const CardsDocumentsCatalogs = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (itemId, isChecked) => {
    setCheckedItems((prev) => ({ ...prev, [itemId]: isChecked }));
  };

  return (
    <>
      <div className="w-full flex flex-row justify-center md:justify-start lg:justify-start mb-[1rem]">
        <Link className="bg-blue-bg py-2 px-8 rounded-lg boxshadow-rv4 text-white text-xl">
          {" "}
          New checklist
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8">
        {DataCards.map((data) => (
          <div
            key={data.id}
            className="p-5 color-txt-rv text-base font-medium leading-5 bg-white flex flex-col justify-start items-center boxshadow-rv3 w-full h-auto lg:h-full md:h-full"
          >
            <div className="w-full flex flex-row items-end justify-between pb-1 border-b-2 border-solid border-gray-300">
              <div className="flex flex-row items-center ">
                <img src={IconChecklist} alt="" className="mr-1 w-[20px]" />
                <p className="text-blue-500 text-lg md:text-xl lg:text-xl  font-bold ">
                  Matter: {data.title}
                </p>
              </div>
              <div className="h-[40px] w-[40px]">
                <Checkbox
                  onChange={(e) => handleCheckboxChange(data.id, e.checked)}
                  checked={checkedItems[data.id] || false}
                  className={`w-[20px] h-[20px] custom-borde-checkbox ${
                    checkedItems[data.id]
                      ? "bg-gray-300 border-gray-300"
                      : "border-gray-300"
                  } transition-all duration-300`}
                ></Checkbox>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between items-center">
              <div className="w-[80%] flex flex-col  py-3">
                <ul className="list-decimal">
                  {data.documents.map((document, index) => (
                    <li
                      key={index}
                      className="text-blue-txt text-lg md:text-xl lg:text-xl"
                    >
                      {document}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full flex flex-row justify-center md:justify-end lg:justify-end">
                <Link className="bg-blue-bg py-2 px-8 rounded-lg boxshadow-rv4 text-white">
                  {" "}
                  Duplicate checklist
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsDocumentsCatalogs;
