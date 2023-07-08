import React from "react";
import {
  BsFillPlusSquareFill,
  BsThreeDots,
  BsCursor,
  BsSunrise,
  BsSunset,
  BsChevronLeft,
  BsChevronRight,
  BsSun,
} from "react-icons/bs";
import image from "../assets/image.png";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

export const Left = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-no-repeat bg-bottom bg-auto w-[30vw] p-7 rounded-3xl h-full bg-[#5C9CE5]"
      >
        <div className="textContent w-[220px] h-[300px] flex flex-col justify-between">
          <div className="header flex flex-row justify-between items-center ">
            <span>
              <BsFillPlusSquareFill className="text-white" />
            </span>
            <span>
              <BsThreeDots className="text-white ml-4" />
              
            </span>
            <span className="flex justify-center items-center">
              <span className="text-white text-sm mr-4">°C</span>
              <Switch {...label} />
              
              <span className="text-white text-sm ml-2">°F</span>
            </span>
          </div>

          <div className="middle w-full flex flex-col items-center">
            <div className="row1 flex flex-row justify-between items-center">
              <div className="flex justify-center items-center mr-10">
                <span>
                  <BsCursor className="text-white text-sm mr-2"/>
                </span>
                <p className="text-white font-normal text-sm">West Bengal, India</p>
              </div>
              <div className="flex justify-center items-center">
                <span>
                  <BsSunrise className="text-white text-sm mr-2"/>
                </span>
                <p className="text-white font-semibold text-sm">07:19</p>
              </div>
            </div>
            <div className="row2 mt-3 flex flex-row justify-between items-center">
              <div className="flex justify-center items-center mr-10">
                <p className="text-white font-normal text-sm ">Today, 7 Jul</p>
              </div>
              <div className="flex justify-center items-center ml-12">
                <span>
                  <BsSunset className="text-white text-sm mr-2"/>
                </span>
                <p className="text-white font-semibold text-sm">19:32</p>
              </div>
            </div>
          </div>

          <div className="footer flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center">
              <div>
                <span>
                  <BsChevronLeft className="text-[#9AC1EE] text-md mr-8" />
                </span>
              </div>
              <div>
                <p className="text-white text-7xl font-semibold mr-5">27°</p>
              </div>
              <div>
                <span>
                  <BsChevronRight className="text-[#9AC1EE] text-md" />
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-3">
              <span>
                <BsSun className="text-white font-bold text-md mr-3" />
              </span>
              <p className="text-white text-md">Sunny</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
