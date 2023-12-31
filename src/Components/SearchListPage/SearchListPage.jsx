/* eslint-disable default-case */
import  { useRef, useState } from 'react';
import exploreImg1 from '../../Assets/exploreImg1.png'
import exploreImg2 from '../../Assets/exploreImg2.png'
import exploreImg3 from '../../Assets/exploreImg3.png'
import exploreImg4 from '../../Assets/exploreImg4.png'
import exploreImg5 from '../../Assets/exploreImg5.png'
import exploreImg6 from '../../Assets/exploreImg6.png'
import exploreImg7 from '../../Assets/exploreImg7.png'
import filterIcon from '../../Assets/filter-icon.svg';
import rightArrowBlack from '../../Assets/right-arrow-black.svg';
import rightArrowPink from '../../Assets/right-arrow-pink.svg';
import leftArrowBlack from '../../Assets/left-arrow-black.svg';
import leftArrowPink from '../../Assets/left-arrow-pink.svg';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import graySearchIcon from "../../Assets/gray-search-icon.svg";
import pinkSearchIcon from "../../Assets/pink-search-icon.svg";
import grayCalenderIcon from "../../Assets/gray-calender-icon.svg";
import pinkCalenderIcon from "../../Assets/pink-calender-icon.svg";
import grayPersonIcon from "../../Assets/gray-person-icon.svg";
import pinkPersonIcon from "../../Assets/pink-person-icon.svg";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker } from "antd";
import { Popover } from "antd";
import listImg1 from '../../Assets/list-img-1.png';
import listImg2 from '../../Assets/list-img-2.png';
import listImg3 from '../../Assets/list-img-3.png';
import listImg4 from '../../Assets/list-img-4.png';
import mapImg from '../../Assets/map-img.png';
import locationIcon from '../../Assets/location-icon.png';
import starIcon from '../../Assets/star-icon.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "auto",
      "& .MuiFilledInput-root": {
        backgroundColor: "#F9F9F9",
      },
      "& .MuiFilledInput-root:hover": {
        backgroundColor: "#F9F9F9",
        "@media (hover: none)": {
          backgroundColor: "#F9F9F9",
        },
      },
      "& .MuiFilledInput-root.Mui-focused": {
        backgroundColor: "#F9F9F9",
      },
    },
  }));

function SearchListPage(){
  const classes = useStyles();
  const scrollContainer = useRef(null);
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  const [focusSearchField, setFocusSearchField] = useState(false);
  const [location, setLocation] = useState(null);
  const [focusCheckinField, setFocusCheckinField] = useState(false);
  const [checkin, setCheckin] = useState(null);
  const [focusCheckoutField, setFocusCheckoutField] = useState(false);
  const [focusGuestField, setFocusGuestField] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [checkout, setCheckout] = useState(null);
  const [guestPopoverVisible, setGuestPopoverVisible] = useState(false);
  const [listHoverId, setListHoverId] = useState("");

  const categories = [
    {
      img: exploreImg1,
      name: "Townhouse"
    },
    {
      img: exploreImg2,
      name: "Apartment"
    },
    {
      img: exploreImg3,
      name: "Cabin"
    },
    {
      img: exploreImg4,
      name: "Tent"
    },
    {
      img: exploreImg5,
      name: "Condominium"
    },
    {
      img: exploreImg6,
      name: "Tiny House"
    },
    {
      img: exploreImg7,
      name: "Bungalow"
    },
    {
      img: exploreImg1,
      name: "Townhouse"
    },
    {
      img: exploreImg2,
      name: "Apartment"
    },
    {
      img: exploreImg3,
      name: "Cabin"
    },
    {
      img: exploreImg4,
      name: "Tent"
    },
    {
      img: exploreImg5,
      name: "Condominium"
    },
    {
      img: exploreImg6,
      name: "Tiny House"
    },
    {
      img: exploreImg7,
      name: "Bungalow"
    },
  ]

  const list = [
    {
      id: 1,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg1,
    },
    {
      id: 2,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg2,
    },
    {
      id: 3,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg3,
    },
    {
      id: 4,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg4,
    },
    {
      id: 5,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg1,
    },
    {
      id: 6,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg2,
    },
    {
      id: 7,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg3,
    },
    {
      id: 8,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg4,
    },
    {
      id: 9,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg1,
    },
    {
      id: 10,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg2,
    },
    {
      id: 11,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg3,
    },
    {
      id: 12,
      name: "Vintage Airstream Suite on Top of a Hill",
      location: "Calaca, Calabarzon, Philippines",
      rating: "4.8",
      reviews: "230",
      time: "night",
      price: "250",
      img: listImg4,
    },
  ];

  const guestsDropdownContent = [
    { id: "adults", name: "Adults", description: "Age 13+", count: adults },
    {
      id: "children",
      name: "Children",
      description: "Ages 2-12",
      count: children,
    },
    {
      id: "infants",
      name: "Infants",
      description: "Under 2",
      count: infants,
    },
    {
      id: "pets",
      name: "Pets",
      description: "Bringing a service animal?",
      count: pets,
    },
  ];

  const handleAddAndRemoveGuests = (type, id) => {
    switch (id) {
      case "adults":
        type === "inc"
          ? setAdults(adults + 1)
          : adults > 0 && setAdults(adults - 1);
        break;
      case "children":
        type === "inc"
          ? setChildren(children + 1)
          : children > 0 && setChildren(children - 1);
        break;
      case "infants":
        type === "inc"
          ? setInfants(infants + 1)
          : infants > 0 && setInfants(infants - 1);
        break;
      case "pets":
        type === "inc" ? setPets(pets + 1) : pets > 0 && setPets(pets - 1);
        break;
    }
  };
  
  const handleCloseGuestPopover = () => {
    setGuestPopoverVisible(false);
    setFocusGuestField(false);
  };

  const content = (
    <div className="flex flex-col gap-4">
      <div className="p-6 flex flex-col gap-5">
        {guestsDropdownContent.map((item) => (
          <div className="flex gap-24 justify-between items-center">
            <div className="flex flex-col">
              <p className="text-[#535052] font-bold text-base leading-normal">
                {item.name}
              </p>
              <p
                className={`text-[#747073] text-base leading-normal ${
                  item.id === "pets" ? "underline cursor-pointer" : ""
                }`}
              >
                {item.description}
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <span
                className={`py-1 px-3 cursor-pointer border ${
                  item.count <= 0 ? "border-[#D5CED2]" : "border-[#535052]"
                } rounded-full `}
                onClick={() => handleAddAndRemoveGuests("dec", item.id)}
              >
                -
              </span>
              <span
                className={`${
                  item.count <= 0 ? "text-[#D5CED2]" : "text-[#535052]"
                }`}
              >
                {item.count}
              </span>
              <span
                className="py-1 px-[10px] cursor-pointer border border-[#535052] rounded-full"
                onClick={() => handleAddAndRemoveGuests("inc", item.id)}
              >
                +
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-end items-center underline text-sm cursor-pointer"
        onClick={handleCloseGuestPopover}
      >
        Close
      </div>
    </div>
  );
    const handleScroll = (type) => {
        if (scrollContainer.current) {
          type === "left" ? scrollContainer.current.scrollLeft -= 100 : scrollContainer.current.scrollLeft += 100
        }
      };

    return (
      <>
        <div className="pt-[112px] flex flex-col ">
          <div className="py-6 flex flex-col gap-6 shadow-md px-4 md:px-6 md:sticky md:top-0 bg-white">
            <div className="flex gap-4 justify-start items-center w-[85%] md:w-[90%] xl:w-[95%]">
              <div className="flex justify-start items-center w-full">
                <div className="w-20 h-[140.5px] flex justify-start items-center bg-gradient-to-r from-white to-transparent mr-[-75px] z-10 mt-[1px] ml-5">
                  <div
                    onMouseEnter={() => setLeftHover(true)}
                    onMouseLeave={() => setLeftHover(false)}
                    className={`flex p-2 rounded-full border cursor-pointer ${
                      leftHover ? "border-[#C75D9C]" : "border-[#000]"
                    } shadow-md bg-white`}
                  >
                    <img
                      onClick={() => handleScroll("left")}
                      src={leftHover ? leftArrowPink : leftArrowBlack}
                      alt="_left"
                      className="cursor-pointer w-3"
                    />
                  </div>
                </div>
                <div
                  className="flex gap-6  w-[100%] h-[140px] overflow-x-scroll noScrollBar"
                  ref={scrollContainer}
                >
                  {categories?.map((item) => (
                    <div className="min-w-[140px]">
                      <img
                        src={item.img}
                        alt="_explore"
                        className="rounded-lg w-[140px] h-[140px]"
                      />
                      <p className="text-white text-center font-manrope text-base mt-[-35px]">
                        {item?.name}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="w-20 h-[140.5px] flex justify-end items-center bg-gradient-to-l from-white to-transparent ml-[-75px] mt-[1px]">
                  <div
                    className={`flex p-2 pl-3 pr-[10px] rounded-full border ${
                      rightHover ? "border-[#C75D9C]" : "border-[#000]"
                    } cursor-pointer shadow-md bg-white`}
                    onMouseEnter={() => setRightHover(true)}
                    onMouseLeave={() => setRightHover(false)}
                  >
                    <img
                      onClick={() => handleScroll("right")}
                      src={rightHover ? rightArrowPink : rightArrowBlack}
                      alt="_right"
                      className="cursor-pointer w-[6px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-4 py-6 rounded-full border border-[#E3E1E2] justify-center items-center">
                <img src={filterIcon} alt="_filter" />
                <p className="text-Black font-Manrope text-sm font-semibold">
                  Filter
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap flex-col md:flex-row">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel
                  htmlFor="grouped-native-select"
                  className={`ml-[30px] ${
                    focusSearchField || location ? "mt-4" : "mt-[26px] text22px"
                  } text-[#747073] selectLabel`}
                >
                  Search place
                </InputLabel>
                <Select
                  onChange={(e) => setLocation(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <img
                        src={
                          focusSearchField || location
                            ? pinkSearchIcon
                            : graySearchIcon
                        }
                        alt="_search"
                      />
                    </InputAdornment>
                  }
                  className={` bg-[#f8f8f9] ${
                    classes.root
                  } selectField border ${
                    focusSearchField
                      ? "border-gradientPink"
                      : "border-[#E3E1E2]"
                  }`}
                  onFocus={() => setFocusSearchField(true)}
                  onBlur={() => setFocusSearchField(false)}
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Search place"
                  variant="filled"
                >
                  <option className="p-4 bg-white" aria-label="None" value="" />
                  <option className="p-4 bg-white" value={1}>
                    I’m flexible
                  </option>
                  <optgroup label="Popular">
                    <option className="p-4 bg-white" value={2}>
                      Denver, Colorado, USA
                    </option>
                    <option className="p-4 bg-white" value={3}>
                      Denver, Colorado, USA
                    </option>
                    <option className="p-4 bg-white" value={4}>
                      Albuquerque, New Mexico, USA
                    </option>
                    <option className="p-4 bg-white" value={5}>
                      Kansas City, Missouri, USA
                    </option>
                  </optgroup>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel
                  htmlFor="grouped-native-select"
                  className={`ml-[30px] ${
                    checkin || focusCheckinField
                      ? "text12px mt-[-12px]"
                      : "text16px"
                  } text-[#747073] selectLabel`}
                >
                  Check in
                </InputLabel>

                <DatePicker
                  size="small"
                  onFocus={() => setFocusCheckinField(true)}
                  placeholder=""
                  onBlur={() => setFocusCheckinField(false)}
                  suffixIcon={
                    <div>
                      <img
                        className=""
                        src={
                          checkin || focusCheckinField
                            ? pinkCalenderIcon
                            : grayCalenderIcon
                        }
                        alt="_checkin"
                      />
                    </div>
                  }
                  prefixCls=""
                  className={`h-[55.97px] rounded-[12px] bg-[#f8f8f9] datePickerField border ${
                    focusCheckinField
                      ? "border-gradientPink "
                      : "border-[#E3E1E2]"
                  }`}
                  onChange={(e) => setCheckin(e)}
                />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel
                  htmlFor="grouped-native-select"
                  className={`ml-[30px] ${
                    checkout || focusCheckoutField
                      ? "text12px mt-[-12px]"
                      : "text16px"
                  } text-[#747073] selectLabel`}
                >
                  Check out
                </InputLabel>

                <DatePicker
                  size="small"
                  onFocus={() => setFocusCheckoutField(true)}
                  placeholder=""
                  onBlur={() => setFocusCheckoutField(false)}
                  suffixIcon={
                    <div>
                      <img
                        className=""
                        src={
                          checkout || focusCheckoutField
                            ? pinkCalenderIcon
                            : grayCalenderIcon
                        }
                        alt="_checkin"
                      />
                    </div>
                  }
                  prefixCls=""
                  className={`h-[55.97px] rounded-[12px] bg-[#f8f8f9] datePickerField border ${
                    focusCheckoutField
                      ? "border-gradientPink "
                      : "border-[#E3E1E2]"
                  }`}
                  onChange={(e) => setCheckout(e)}
                />
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel
                  htmlFor="grouped-native-select"
                  className={`ml-[30px] ${
                    adults > 0 ||
                    children > 0 ||
                    infants > 0 ||
                    pets > 0 ||
                    focusGuestField
                      ? "text12px mt-[-12px]"
                      : "text16px"
                  } text-[#747073] selectLabel`}
                >
                  My guests
                </InputLabel>
                <Popover
                  trigger="click"
                  placement="bottom"
                  title=""
                  content={content}
                  visible={guestPopoverVisible}
                >
                  <button
                    className={`w-full flex gap-2 py-4 px-4 pr-32 rounded-[12px] bg-[#F9F9F9] border ${
                      focusGuestField
                        ? "border-gradientPink"
                        : "border-[#E3E1E2]"
                    } md:max-w-[180px] whitespace-nowrap overflow-hidden`}
                    onClick={() => {
                      setGuestPopoverVisible(!guestPopoverVisible);
                      setFocusGuestField(true);
                    }}
                  >
                    <img
                      src={
                        adults > 0 ||
                        children > 0 ||
                        infants > 0 ||
                        pets > 0 ||
                        focusGuestField
                          ? pinkPersonIcon
                          : grayPersonIcon
                      }
                      alt="_guest"
                    />
                    <span>
                      {adults > 0 && adults + "Adults, "}
                      {children > 0 && children + "Children, "}
                      {infants > 0 && infants + "Infants, "}
                      {pets > 0 && "&" + pets + "Pets"}
                    </span>
                  </button>
                </Popover>
              </FormControl>
            </div>
          </div>
          {/* Places List */}
          <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-6">
            <div className="flex flex-col gap-4 justify-center items-center lg:w-[50%] ">
              {list.map(item => (
              <div
              onMouseEnter={() => setListHoverId(item.id)}
              onMouseLeave={() => setListHoverId("")}
                className={`p-4 rounded-md border ${listHoverId === item.id ?"border-gradientPink" : "border-[#E0E0E0]"} flex gap-5 w-full`}
              >
                <img src={item.img} alt="list" className="rounded-md" />
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <p className="text-black font-Manrope text-lg font-semibold">
                      {item.name}
                    </p>
                    <div className="flex gap-2 items-center">
                      <img src={locationIcon} alt="_location" />
                      <p className="text-[#535052] font-Manrope text-base font-normal leading-6">
                        {item.location}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={starIcon} alt="_rate" />
                      <p className="font-Manrope text-base font-normal leading-6 flex gap-2">
                        <span className="text-[#1F1C1E] font-semibold">
                          {item.rating}{" "}
                        </span>
                        <span className="text-[#747073]">({item.reviews} Reviews)</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 justify-between items-center">
                    <div className="flex items-center gap-1">
                      <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope font-medium">
                        ${item.price}
                      </p>
                      <span className="text-[#535052] font-Manrope text-base">
                        {" "}
                        {item.time}
                      </span>
                    </div>
                    <p className="text-[#212674] font-Manrope text-base font-semibold cursor-pointer">
                      View Details
                    </p>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <div className='lg:w-[50%]'>
            <img src={mapImg} alt="map" className='w-full'/>
            </div>
          </div>
        </div>
      </>
    );
}

export default SearchListPage;