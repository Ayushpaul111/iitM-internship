import React from "react";
import {
  BsThreeDots,
  BsChevronDown,
  BsChevronRight,
  BsSun,
  BsCloud,
  BsDroplet,
  BsWind,
  BsCloudRain,
  BsThermometerHalf,
  BsCloudDrizzle,
} from "react-icons/bs";
import face from "../assets/face.jpg";

export const Right = () => {
  return (
    <>
      <div className="w-[70vw] rounded-3xl z-10 -ml-24 p-7 bg-[#E4F1FF] h-full">
        <div className="content flex flex-col gap-10 justify-between items-start w-full h-full ">
          {/* //Below is the header of the content  */}
          <div className="header w-full flex flex-row justify-between items-center">
            <div className="headerText flex flex-col justify-start items-start">
              <p className="text-black font-bold text-[16px]">
                Welcome Back, Ayush!
              </p>
              <p className="text-black font-semibold text-[16px]">
                Check out today's weather information
              </p>
            </div>
            <div className="headerImage flex flex-row justify-center items-center">
              <span>
                <BsThreeDots className="mr-5 cursor-pointer" />
              </span>
              <div className="w-[40px] h-[40px]">
                <img
                  alt=""
                  src={face}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* //Below is the middle Section  */}
          <div className="middleSection flex flex-col justify-between items-center bg-white w-full h-[300px] rounded-3xl p-5 hover:shadow-md transition duration-200">
            <div className="header w-full flex flex-row justify-between items-center">
              <p className="text-black text-[18px] font-semibold">
                Upcoming Hours
              </p>
              <div className="flex flex-row justify-center items-center">
                <button className="bg-[#F1F1F1] flex flex-row justify-center items-center rounded-md border text-xs p-2 text-black">
                  Rain Precipitation
                  <span>
                    <BsChevronDown className="text-black text-sm ml-2" />
                  </span>
                </button>
                <button className="bg-[#F1F1F1] flex flex-row justify-center items-center rounded-md border font-semibold text-xs p-2 ml-5 text-black">
                  Next Days
                  <span>
                    <BsChevronRight className="text-black text-sm ml-2" />
                  </span>
                </button>
              </div>
            </div>

            <div className="footer mt-6 w-full h-full">
              <div className="collectionSticks w-full h-full flex flex-row justify-between items-center">
                <div className="singleStick flex flex-col gap-1 justify-between items-center">
                  <p className="text-sm text-black font-normal">Now</p>
                  <span>
                    <BsSun />
                  </span>
                  <p className="text-sm text-black font-normal">27°</p>
                  <span className="h-12 w-1/12 bg-black"></span>
                  <p className="text-sm text-black font-normal">23%</p>
                </div>
                <div className="singleStick flex flex-col gap-1 justify-between items-center">
                  <p className="text-sm text-black font-normal">11:00</p>
                  <span>
                    <BsSun />
                  </span>
                  <p className="text-sm text-black font-normal">28°</p>
                  <span className="h-12 w-1/12 bg-black"></span>
                  <p className="text-sm text-black font-normal">29%</p>
                </div>
                <div className="singleStick flex flex-col gap-1 justify-between items-center">
                  <p className="text-sm text-black font-normal">12:00</p>
                  <span>
                    <BsCloud />
                  </span>
                  <p className="text-sm text-black font-normal">28°</p>
                  <span className="h-12 w-1/12 bg-black"></span>
                  <p className="text-sm text-black font-normal">58%</p>
                </div>
                <div className="singleStick flex flex-col gap-1 justify-between items-center">
                  <p className="text-sm text-black font-normal">13:00</p>
                  <span>
                    <BsCloud />
                  </span>
                  <p className="text-sm text-black font-normal">29°</p>
                  <span className="h-12 w-1/12 bg-black"></span>
                  <p className="text-sm text-black font-normal">75%</p>
                </div>
                <div className="singleStick flex flex-col gap-1 justify-between items-center">
                  <p className="text-sm text-black font-normal">14:00</p>
                  <span>
                    <BsSun />
                  </span>
                  <p className="text-sm text-black font-normal">30°</p>
                  <span className="h-12 w-1/12 bg-black"></span>
                  <p className="text-sm text-black font-normal">33%</p>
                </div>
                <div className="singleStick flex flex-col gap-1 justify-between items-center">
                  <p className="text-sm text-black font-normal">15:00</p>
                  <span>
                    <BsCloud />
                  </span>
                  <p className="text-sm text-black font-normal">29°</p>
                  <span className="h-12 w-1/12 bg-black"></span>
                  <p className="text-sm text-black font-normal">20%</p>
                </div>
                <div className="singleStick flex flex-col gap-1 justify-between items-center">
                  <p className="text-sm text-black font-normal">16:00</p>
                  <span>
                    <BsCloud />
                  </span>
                  <p className="text-sm text-black font-normal">29°</p>
                  <span className="h-12 w-1/12 bg-black"></span>
                  <p className="text-sm text-black font-normal">73%</p>
                </div>
                <div className="singleStick flex flex-col gap-1 justify-between items-center">
                  <p className="text-sm text-black font-normal">17:00</p>
                  <span>
                    <BsSun />
                  </span>
                  <p className="text-sm text-black font-normal">28°</p>
                  <span className="h-12 w-1/12 bg-black"></span>
                  <p className="text-sm text-black font-normal">49%</p>
                </div>
              </div>
            </div>
          </div>

          {/* //Below is the footer section  */}
          <div className="footer h-full w-full flex flex-col justify-between items-start">
            <div>
              <h4 className="text-[15px] text-black font-semibold">
                More details about Today's Weather
              </h4>
            </div>
            <div className="row1 w-full flex flex-row justify-between items-center">
              {/* 1st SingleBox 1st row  -------------------- */}
              <div className="singleBox gap-1 p-4 w-[250px] h-[130px] border rounded-3xl bg-white flex flex-col justify-start items-center hover:shadow-md transition duration-200">
                <div className="flex w-full flex-row justify-between items-center">
                  <p className="text-black text-sm font-semibold">Humidity</p>
                  <div className="bg-[#5C9CE5] p-1 rounded-lg">
                    <BsDroplet className=" text-white font-bold text-lg" />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-[16px] text-black font-bold">82%</span>
                  <p className="text-black text-sm pl-2">bad</p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">good</p>
                    <div className="levelBarContainer w-12 h-2
                     rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-12 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">normal</p>
                    <div className="levelBarContainer w-12 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-12 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">bad</p>
                    <div className="levelBarContainer w-12 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-5 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd singleBox 1st row ----------------------- */}
              <div className="singleBox gap-1 p-4 w-[250px] h-[130px] border rounded-3xl bg-white flex flex-col justify-start items-center hover:shadow-md transition duration-200">
                <div className="flex w-full flex-row justify-between items-center">
                  <p className="text-black text-sm font-semibold">Wind</p>
                  <div className="bg-[#5C9CE5] p-1 rounded-lg">
                    <BsWind className=" text-white font-bold text-lg" />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-[16px] text-black font-bold">
                    8 km/hr
                  </span>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-sm text-[#9b9b9b]">0</p>
                    <p className="text-sm text-[#949494]">5</p>
                    <p className="text-sm text-[#8f8f8f]">10</p>
                    <p className="text-sm text-[#8f8f8f]">20</p>
                    <p className="text-sm text-[#8f8f8f]">30</p>
                    <p className="text-sm text-[#8f8f8f]">40</p>
                  </div>
                  <div className="levelBarContainer w-full h-2 rounded-2xl bg-[#b6b4b4]">
                    <div className="colorLevelBar w-[30%] h-2 rounded-2xl bg-[#5C9CE5]"></div>
                  </div>
                </div>
              </div>
              {/* 3rd SingleBox 1st row ---------------- */}
              <div className="singleBox gap-1 p-4 w-[250px] h-[130px] border rounded-3xl bg-white flex flex-col justify-start items-center hover:shadow-md transition duration-200">
                <div className="flex w-full flex-row justify-between items-center">
                  <p className="text-black text-sm font-semibold">
                    Precipitation
                  </p>
                  <div className="bg-[#5C9CE5] p-1 rounded-lg">
                    <BsCloudRain className=" text-white font-bold text-lg" />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-[16px] text-black font-bold">
                    1.4 cm
                  </span>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">0</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-3 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">10</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-2 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">20</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">30</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">40</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">50</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">60</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">70</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">80</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">90</p>
                    <div className="levelBarContainer w-3 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------second row below */}
            <div className="row2 mt-3 w-full flex flex-row justify-between items-center">
              {/* 1st singleBox 2nd row -------------------- */}
              <div className="singleBox gap-1 p-4 w-[250px] h-[130px] border rounded-3xl bg-white flex flex-col justify-start items-center hover:shadow-md transition duration-200">
                <div className="flex w-full flex-row justify-between items-center">
                  <p className="text-black text-sm font-semibold">UV index</p>
                  <div className="bg-[#5C9CE5] p-1 rounded-lg">
                    <BsSun className=" text-white font-bold text-lg" />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-[20px] text-black font-bold">4</span>
                  <p className="text-black text-sm pl-2 ">medium</p>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">0-2</p>
                    <div className="levelBarContainer w-6 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-6 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">3-5</p>
                    <div className="levelBarContainer w-6 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-3 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">6-7</p>
                    <div className="levelBarContainer w-6 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">8-10</p>
                    <div className="levelBarContainer w-6 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                  <div className="singleLevel flex flex-col justify-start items-center">
                    <p className="text-sm text-[#B0B0B0]">11+</p>
                    <div className="levelBarContainer w-6 h-2 rounded-2xl bg-[#b6b4b4]">
                      <div className="colorLevelBar w-0 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd singlebox 2nd row ----------------------- */}
              <div className="singleBox gap-1 p-4 w-[250px] h-[130px] border rounded-3xl bg-white flex flex-col justify-start items-center hover:shadow-md transition duration-200">
                <div className="flex w-full flex-row justify-between items-center">
                  <p className="text-black text-sm font-semibold">Feels Like</p>
                  <div className="bg-[#5C9CE5] p-1 rounded-lg">
                    <BsThermometerHalf className=" text-white font-bold text-lg" />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-[16px] text-black font-bold">30°</span>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-sm text-[#9b9b9b]">0°</p>
                    <p className="text-sm text-[#949494]">25°</p>
                    <p className="text-sm text-[#8f8f8f]">50°</p>
                  </div>
                  <div className="levelBarContainer w-full h-2 rounded-2xl bg-[#b6b4b4]">
                    <div className="colorLevelBar w-3/4 h-2 rounded-2xl bg-[#5C9CE5]"></div>
                  </div>
                </div>
              </div>
              {/* 3rd singlebox 2nd row ---------------- */}
              <div className="singleBox gap-1 p-4 w-[250px] h-[130px] border rounded-3xl bg-white flex flex-col justify-start items-center hover:shadow-md transition duration-200">
                <div className="flex w-full flex-row justify-between items-center">
                  <p className="text-black text-sm font-semibold">
                    Chance of Rain
                  </p>
                  <div className="bg-[#5C9CE5] p-1 rounded-lg">
                    <BsCloudDrizzle className=" text-white font-bold text-lg" />
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-[16px] text-black font-bold">42%</span>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-sm text-[#9b9b9b]">0%</p>
                    <p className="text-sm text-[#949494]">25%</p>
                    <p className="text-sm text-[#8f8f8f]">50%</p>
                    <p className="text-sm text-[#8f8f8f]">70%</p>
                    <p className="text-sm text-[#8f8f8f]">100%</p>
                  </div>
                  <div className="levelBarContainer w-full h-2 rounded-2xl bg-[#b6b4b4]">
                    <div className="colorLevelBar w-[40%] h-2 rounded-2xl bg-[#5C9CE5]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
