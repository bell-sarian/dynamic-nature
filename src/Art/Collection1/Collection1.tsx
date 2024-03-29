import React, { Component, useState, useEffect } from "react";
import "./Collection1.css";
import Block from "./Block/Block";
import Sun from "./Sun/Sun";
import Stars from "./Stars/Stars";
import InfoButton from "../../Components/InfoButton/InfoButton";
import Modal from "../../Components/Modal/Modal";
import { Dropdown } from "../../Components/Dropdown/Dropdown";

export default function Collection1() {
  const [modalOpen, setModalOpen] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState("");
  const [timeOfDayArray, setTimeOfDayArray] = useState([]);
  const [sunStyle, setSunStyle] = useState("");
  const [starBool, setStarBool] = useState(null);
  const [time, setTime] = useState(new Date().getHours());
  const [TODLable, setTODLable] = useState("");

  const [animate, setAnimate] = useState(false);
  let content = [
    "Ocean Sun is an impressionistic art series consisting of seven animated images of the sun or moon over the ocean at different times of the day.",
    "The images depict different times of day and change real time to match the users's time of day.",
  ];
  const options = [
    { label: `Current Time: ${TODLable}`, value: "currenttime" },
    { label: "Moon", value: "moon" },
    { label: "Moonset", value: "moonset" },
    { label: "Sunrise", value: "sunrise" },
    { label: "Daytime Sun", value: "daysun" },
    { label: "Pre Sunset", value: "midsunset" },
    { label: "Sunset", value: "sunset" },
    { label: "Moonrise", value: "moonrise" },
  ];

  // Matrix of color blocks including:
  //   color,
  //   duration of linear gradient animation
  //   width of block
  //   height of block

  // DONE
  const moon = [
    [
      {
        color: "#1A222F",
        duration: "12",
        width: "100vw",
        height: "2vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#1E2633",
        duration: "10",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#1F2935",
        duration: "15",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#232C3B",
        duration: "20",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#24303E",
        duration: "13",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#27333F",
        duration: "19",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#2C363F",
        duration: "19",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#2C3740",
        duration: "14",
        width: "100vw",
        height: "10vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#313640",
        duration: "17",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#1F222C",
        duration: "17",
        width: "100vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#262A33",
        duration: "5",
        width: "35vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#222933",
        duration: "4",
        width: "20vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "3",
        width: "15vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#222631",
        duration: "2",
        width: "30vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#242B35",
        duration: "5",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#252934",
        duration: "4",
        width: "35vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#2A2B34",
        duration: "3",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1E2730",
        duration: "2",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
    ],
    // Moon width 8
    [
      {
        color: "#252C36",
        duration: "5",
        width: "20vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#222933",
        duration: "4",
        width: "26vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#737D8C",
        duration: "2",
        width: "8vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#22262F",
        duration: "3",
        width: "15vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "6",
        width: "31vw",
        height: "2vh",
        horizon: false,
      },
    ],
    // Moon width 10
    [
      {
        color: "#242B35",
        duration: "7",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#222933",
        duration: "5",
        width: "15vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9097A0",
        duration: "4",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9097A0",
        duration: "4",
        width: "5vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9097A0",
        duration: "4",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9097A0",
        duration: "4",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "5",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#222631",
        duration: "5",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
    ],
    // Moon reflection width 12
    [
      {
        color: "#232A34",
        duration: "3",
        width: "23vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#242833",
        duration: "5",
        width: "24vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "2",
        width: "13vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "2",
        width: "34vw",
        height: "2vh",
        horizon: false,
      },
    ],
    // Moon reflection width 12
    [
      {
        color: "#232A34",
        duration: "3",
        width: "35vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#242833",
        duration: "5",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "2",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "2",
        width: "34vw",
        height: "3vh",
        horizon: false,
      },
    ],
    // Moon reflection width 12
    [
      {
        color: "#232A34",
        duration: "3",
        width: "25vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#242833",
        duration: "5",
        width: "19vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "2",
        width: "30vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "2",
        width: "14vw",
        height: "2vh",
        horizon: false,
      },
    ],
    // Moon reflection width 12
    [
      {
        color: "#232A34",
        duration: "3",
        width: "5vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#242833",
        duration: "5",
        width: "39vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "2",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "2",
        width: "24vw",
        height: "3vh",
        horizon: false,
      },
    ],
    // Moon width 10
    [
      {
        color: "#222A35",
        duration: "2",
        width: "40vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#212934",
        duration: "4",
        width: "5vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "3",
        width: "1vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "3",
        width: "4vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "3",
        width: "2vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "3",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#202833",
        duration: "5",
        width: "33vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#1F2531",
        duration: "5",
        width: "12vw",
        height: "4vh",
        horizon: false,
      },
    ],
    // Moon width 7
    [
      {
        color: "#1F2732",
        duration: "4",
        width: "27vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "2",
        width: "20vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "17vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "5",
        width: "30vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#1F2732",
        duration: "4",
        width: "23vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "2",
        width: "24vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "5",
        width: "37vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#1F2732",
        duration: "2",
        width: "28vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "2",
        width: "21vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "18vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "33vw",
        height: "2vh",
        horizon: false,
      },
    ],
  ];
  // DONE
  const moonset = [
    [
      {
        color: "#1A222F",
        duration: "12",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#1E2633",
        duration: "10",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#1F2935",
        duration: "15",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#232C3B",
        duration: "20",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#24303E",
        duration: "13",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#27333F",
        duration: "19",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#2C363F",
        duration: "19",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#2C3740",
        duration: "14",
        width: "100vw",
        height: "10vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#313640",
        duration: "17",
        width: "100vw",
        height: "1vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#1F222C",
        duration: "17",
        width: "100vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#242B35",
        duration: "5",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#252934",
        duration: "4",
        width: "35vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#2A2B34",
        duration: "3",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1E2730",
        duration: "2",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
    ],
    // Moon width 8
    [
      {
        color: "#252C36",
        duration: "5",
        width: "20vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#222933",
        duration: "4",
        width: "26vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#737D8C",
        duration: "2",
        width: "8vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#22262F",
        duration: "3",
        width: "15vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "6",
        width: "31vw",
        height: "2vh",
        horizon: false,
      },
    ],
    // Moon width 10
    [
      {
        color: "#242B35",
        duration: "7",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#222933",
        duration: "5",
        width: "15vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9097A0",
        duration: "4",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9097A0",
        duration: "4",
        width: "5vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9097A0",
        duration: "4",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9097A0",
        duration: "4",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "5",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#222631",
        duration: "5",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
    ],
    // Moon reflection width 12
    [
      {
        color: "#232A34",
        duration: "3",
        width: "23vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#242833",
        duration: "5",
        width: "24vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "2",
        width: "13vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "2",
        width: "34vw",
        height: "2vh",
        horizon: false,
      },
    ],
    // Moon reflection width 12
    [
      {
        color: "#232A34",
        duration: "3",
        width: "35vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#242833",
        duration: "5",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "2",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "2",
        width: "34vw",
        height: "3vh",
        horizon: false,
      },
    ],
    // Moon reflection width 12
    [
      {
        color: "#232A34",
        duration: "3",
        width: "25vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#242833",
        duration: "5",
        width: "19vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "2",
        width: "30vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "2",
        width: "14vw",
        height: "2vh",
        horizon: false,
      },
    ],
    // Moon reflection width 12
    [
      {
        color: "#232A34",
        duration: "3",
        width: "5vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#242833",
        duration: "5",
        width: "39vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "1vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#202731",
        duration: "2",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#212530",
        duration: "2",
        width: "24vw",
        height: "3vh",
        horizon: false,
      },
    ],
    // Moon width 10
    [
      {
        color: "#222A35",
        duration: "2",
        width: "40vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#212934",
        duration: "4",
        width: "5vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "3",
        width: "1vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "3",
        width: "4vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "3",
        width: "2vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#A4A7AB",
        duration: "3",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#202833",
        duration: "5",
        width: "33vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#1F2531",
        duration: "5",
        width: "12vw",
        height: "4vh",
        horizon: false,
      },
    ],
    // Moon width 7
    [
      {
        color: "#1F2732",
        duration: "4",
        width: "27vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "2",
        width: "20vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "2vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "17vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "5",
        width: "30vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#1F2732",
        duration: "4",
        width: "23vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "2",
        width: "25vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: ".5vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "1.5vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "1vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "11vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "5",
        width: "37vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#1F2732",
        duration: "4",
        width: "23vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "2",
        width: "25vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: ".3vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "1vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: ".5vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: ".5vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: ".3vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: ".5vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: ".2vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#979CA3",
        duration: "3",
        width: "1vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: ".3vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "11vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "5",
        width: "37vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#1F2732",
        duration: "4",
        width: "23vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "2",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "11vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "5",
        width: "37vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#1F2732",
        duration: "4",
        width: "13vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "2",
        width: "35vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1D2530",
        duration: "3",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "6",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#1E2631",
        duration: "5",
        width: "57vw",
        height: "3vh",
        horizon: false,
      },
    ],
  ];
  // DONE
  const sunrise = [
    [
      {
        color: "#849FBD",
        duration: "12",
        width: "100vw",
        height: "2vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#99B2D0",
        duration: "10",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#A6BCD4",
        duration: "15",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B1C6D9",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#C4D2DB",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#D6DAD9",
        duration: "20",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#E3E1D5",
        duration: "20",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#F2E0C8",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#F9D7B4",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#F5C6A8",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#F3BCA4",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#E3AFAA",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#CFA9AA",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B5A8AF",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#A4A8B1",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B0B1B3",
        duration: "17",
        width: "100vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#9FA0A2",
        duration: "17",
        width: "100vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#ADABA5",
        duration: "5",
        width: "13vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A39F9C",
        duration: "4",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#ACABA7",
        duration: "3",
        width: "5vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9F9F9F",
        duration: "2",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#ACABA7",
        duration: "3",
        width: "23vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9A9B9F",
        duration: "3",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#B7AEA5",
        duration: "5",
        width: "3vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#B3ACA6",
        duration: "4",
        width: "32vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#ABA6A0",
        duration: "2",
        width: "4vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#A6A5A0",
        duration: "3",
        width: "25vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#B3ACA5",
        duration: "6",
        width: "36vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#B7AEA5",
        duration: "7",
        width: "39vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#AEA79F",
        duration: "5",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#B2AFA8",
        duration: "4",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9F9F9C",
        duration: "5",
        width: "6vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#B5A89F",
        duration: "3",
        width: "5vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#ABA49E",
        duration: "5",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#C3B7A9",
        duration: "6",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#B2A8A1",
        duration: "2",
        width: "81vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#B5A89F",
        duration: "2",
        width: "33vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#C4B9AB",
        duration: "4",
        width: "20vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#C0B3AA",
        duration: "3",
        width: "40vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#B3AAA1",
        duration: "5",
        width: "9vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#BCB0A4",
        duration: "3",
        width: "2vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#C3B7AB",
        duration: "5",
        width: "5vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#BDB1A3",
        duration: "2",
        width: "20vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#B8B0A5",
        duration: "4",
        width: "40vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#B3AAA1",
        duration: "7",
        width: "40vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#BEB2A4",
        duration: "5",
        width: "11vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#BAB1A2",
        duration: "4",
        width: "5vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#B8AFA0",
        duration: "6",
        width: "15vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#C5B5A8",
        duration: "7",
        width: "40vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#B6ADA4",
        duration: "5",
        width: "29vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#B2AA9F",
        duration: "3",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#BCAEA1",
        duration: "7",
        width: "8vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#C2B6A8",
        duration: "3",
        width: "40vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#BCB3A4",
        duration: "5",
        width: "30vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#BAB0A4",
        duration: "6",
        width: "29vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#C5B9AB",
        duration: "4",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#B8AEA5",
        duration: "2",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#BAAEA0",
        duration: "3",
        width: "15vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#B4AA9E",
        duration: "6",
        width: "60vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#BCB2AA",
        duration: "5",
        width: "12vw",
        height: "3vh",
        horizon: false,
      },
    ],
  ];
  // DONE
  const daysun = [
    [
      {
        color: "#89B5DC",
        duration: "12",
        width: "100vw",
        height: "2vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#8EBADF",
        duration: "10",
        width: "100vw",
        height: "5vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#92BDE0",
        duration: "10",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#9BC2E3",
        duration: "10",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#A5C7E2",
        duration: "10",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#ADCBE3",
        duration: "10",
        width: "100vw",
        height: "10vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B6D1E2",
        duration: "10",
        width: "100vw",
        height: "10vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#BDD7E9",
        duration: "10",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#97B0C4",
        duration: "14",
        width: "100vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#83A3BC",
        duration: "17",
        width: "100vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#6584A0",
        duration: "5",
        width: "13vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#6A8CA8",
        duration: "4",
        width: "29vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#6488AA",
        duration: "3",
        width: "25vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#6C8EB1",
        duration: "2",
        width: "10vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#6087A8",
        duration: "3",
        width: "23vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#BCD5E0",
        duration: "5",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#97B5CF",
        duration: "4",
        width: "12vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#416482",
        duration: "2",
        width: "4vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#385B77",
        duration: "3",
        width: "35vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A7BAC5",
        duration: "6",
        width: "46vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#567893",
        duration: "7",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#4C718B",
        duration: "5",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#50748E",
        duration: "4",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#537799",
        duration: "5",
        width: "36vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#3C5A72",
        duration: "3",
        width: "5vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#80919F",
        duration: "5",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#D4E5F8",
        duration: "6",
        width: "47vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#275169",
        duration: "2",
        width: "41vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#4C6E87",
        duration: "2",
        width: "3vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#5E7D97",
        duration: "4",
        width: "30vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#496D85",
        duration: "3",
        width: "55vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#537D96",
        duration: "5",
        width: "22vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#648096",
        duration: "3",
        width: "3vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#7C98AD",
        duration: "5",
        width: "3vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#DBEBF4",
        duration: "2",
        width: "70vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#2F546E",
        duration: "4",
        width: "25vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#6E8592",
        duration: "5",
        width: "2vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#6B879C",
        duration: "4",
        width: "5vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#8699A7",
        duration: "6",
        width: "15vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#BFC4CD",
        duration: "7",
        width: "60vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#7E9AAF",
        duration: "5",
        width: "19vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#566978",
        duration: "3",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#859CAC",
        duration: "7",
        width: "8vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#9CADB7",
        duration: "3",
        width: "40vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#728B9F",
        duration: "5",
        width: "20vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#849FAD",
        duration: "6",
        width: "29vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#94A7B4",
        duration: "4",
        width: "6vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#7A91A1",
        duration: "2",
        width: "10vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#819BAC",
        duration: "3",
        width: "15vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#7D94A2",
        duration: "6",
        width: "40vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#A3ACB6",
        duration: "5",
        width: "25vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#94A7B4",
        duration: "4",
        width: "6vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#648096",
        duration: "3",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#7C98AD",
        duration: "5",
        width: "23vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#DBEBF4",
        duration: "2",
        width: "70vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#537D96",
        duration: "4",
        width: "5vw",
        height: "2vh",
        horizon: false,
      },
    ],

    [
      {
        color: "#5E7381",
        duration: "5",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#829198",
        duration: "4",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#A9B6BC",
        duration: "8",
        width: "15vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#496D85",
        duration: "7",
        width: "65vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#5E7381",
        duration: "5",
        width: "7vw",
        height: "3vh",
        horizon: false,
      },
    ],
  ];
  // DONE
  const midsunset = [
    [
      {
        color: "#386F83",
        duration: "12",
        width: "100vw",
        height: "2vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#43768B",
        duration: "10",
        width: "100vw",
        height: "10vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#4A7B8C",
        duration: "15",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#578595",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#718F97",
        duration: "13",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#949F9B",
        duration: "19",
        width: "100vw",
        height: "4vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#A9A492",
        duration: "11",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B9A686 ",
        duration: "19",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#C2A16C",
        duration: "14",
        width: "100vw",
        height: "4vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#C79A5D",
        duration: "17",
        width: "100vw",
        height: "4vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#CA923C",
        duration: "17",
        width: "100vw",
        height: "5vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#5F4520",
        duration: "17",
        width: "100vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#5B6854",
        duration: "17",
        width: "100vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#AA997B",
        duration: "5",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#5B6756",
        duration: "4",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#75745C",
        duration: "3",
        width: "5vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#AB8D68",
        duration: "2",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#887E5F",
        duration: "3",
        width: "63vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#6A6D60",
        duration: "5",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#958362",
        duration: "4",
        width: "12vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#696852",
        duration: "2",
        width: "4vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#A17C53",
        duration: "3",
        width: "35vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#C0B08C",
        duration: "6",
        width: "46vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#65644B",
        duration: "7",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9A907A",
        duration: "5",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#867A5B",
        duration: "4",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#3E504A",
        duration: "5",
        width: "36vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#626957",
        duration: "3",
        width: "5vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#6A664B",
        duration: "5",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#DDB473",
        duration: "6",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#878064",
        duration: "2",
        width: "81vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#586352",
        duration: "2",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#445449",
        duration: "4",
        width: "20vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#DDA454",
        duration: "3",
        width: "55vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#5C624E",
        duration: "5",
        width: "32vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#A8865B",
        duration: "3",
        width: "2vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#8B7956",
        duration: "5",
        width: "10vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#8A7552",
        duration: "2",
        width: "20vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#79765D",
        duration: "4",
        width: "40vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#79765D",
        duration: "7",
        width: "30vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#D1A171",
        duration: "5",
        width: "1vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#9F7F55",
        duration: "4",
        width: "5vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#827454",
        duration: "6",
        width: "15vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#5E6958",
        duration: "7",
        width: "50vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#9C8F76",
        duration: "5",
        width: "29vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#B29068",
        duration: "3",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#8C7F61",
        duration: "7",
        width: "8vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#957753",
        duration: "3",
        width: "40vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#6C684C",
        duration: "5",
        width: "30vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#8D7C5F",
        duration: "6",
        width: "29vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#64644B",
        duration: "4",
        width: "33vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#84785A",
        duration: "2",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#B29063",
        duration: "3",
        width: "15vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#9F7F55",
        duration: "5",
        width: "32vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#B29068",
        duration: "5",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#8C7F61",
        duration: "4",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#957753",
        duration: "8",
        width: "15vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#6C684C",
        duration: "7",
        width: "70vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#8D7C5F",
        duration: "5",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#757558",
        duration: "5",
        width: "33vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#666D5A",
        duration: "4",
        width: "50vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#4B5B4E",
        duration: "8",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
    ],
  ];
  // DONE
  const sunset = [
    [
      {
        color: "#764F62",
        duration: "12",
        width: "100vw",
        height: "2vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#6E475A",
        duration: "10",
        width: "100vw",
        height: "13vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#6A4356",
        duration: "15",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#634456",
        duration: "20",
        width: "100vw",
        height: "10vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#60445A",
        duration: "13",
        width: "100vw",
        height: "10vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#54475B",
        duration: "19",
        width: "100vw",
        height: "4vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#4D4D5F",
        duration: "11",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#454E5D",
        duration: "19",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#70646A",
        duration: "14",
        width: "100vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#866B6A",
        duration: "17",
        width: "100vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#52504E",
        duration: "5",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#4B5052",
        duration: "4",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#2D3238",
        duration: "3",
        width: "5vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#56646E",
        duration: "2",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#6E7D8E",
        duration: "3",
        width: "63vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#675D5C",
        duration: "5",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#59514F",
        duration: "4",
        width: "12vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#43444B",
        duration: "2",
        width: "4vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#465666",
        duration: "3",
        width: "35vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#667486",
        duration: "6",
        width: "46vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#635959",
        duration: "7",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#59514F",
        duration: "5",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#465666",
        duration: "4",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#526373",
        duration: "5",
        width: "36vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#635353",
        duration: "3",
        width: "5vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#505053",
        duration: "5",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#2E3339",
        duration: "6",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#59514F",
        duration: "2",
        width: "81vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#5C5050",
        duration: "2",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#77655E",
        duration: "4",
        width: "20vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#836560",
        duration: "3",
        width: "55vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#77605A",
        duration: "5",
        width: "32vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#64524E",
        duration: "3",
        width: "2vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#342E2E",
        duration: "5",
        width: "5vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#6D5D56",
        duration: "2",
        width: "20vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#745356",
        duration: "4",
        width: "40vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#575452",
        duration: "7",
        width: "40vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#232325",
        duration: "5",
        width: "1vw",
        height: "7vh",
        horizon: false,
      },
      {
        color: "#342E2E",
        duration: "4",
        width: "5vw",
        height: "7vh",
        horizon: false,
      },
      {
        color: "#1F2024",
        duration: "6",
        width: "15vw",
        height: "7vh",
        horizon: false,
      },
      {
        color: "#2D3134",
        duration: "7",
        width: "50vw",
        height: "7vh",
        horizon: false,
      },
      {
        color: "#48494D",
        duration: "5",
        width: "29vw",
        height: "7vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#49433D",
        duration: "3",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#3F3B38",
        duration: "7",
        width: "8vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#504645",
        duration: "3",
        width: "60vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#645A57",
        duration: "5",
        width: "50vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#564E4C",
        duration: "6",
        width: "29vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#372D2E",
        duration: "4",
        width: "3vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#463637",
        duration: "2",
        width: "10vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#463434",
        duration: "3",
        width: "15vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#443135",
        duration: "6",
        width: "60vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#706F79",
        duration: "5",
        width: "12vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#372D2E",
        duration: "5",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#463637",
        duration: "4",
        width: "10vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#463434",
        duration: "8",
        width: "15vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#443135",
        duration: "7",
        width: "70vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#474143",
        duration: "5",
        width: "2vw",
        height: "3vh",
        horizon: false,
      },
    ],
  ];
  //
  const moonrise = [
    [
      {
        color: "#897F73",
        duration: "12",
        width: "100vw",
        height: "2vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#907C71",
        duration: "10",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#91766F",
        duration: "15",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#87696B",
        duration: "20",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#816466",
        duration: "13",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#6E5864",
        duration: "19",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#625566",
        duration: "19",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#515264",
        duration: "14",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#515264",
        duration: "17",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#1F222C",
        duration: "17",
        width: "100vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#2A3B43",
        duration: "17",
        width: "100vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#52504E",
        duration: "5",
        width: "3vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#4B5052",
        duration: "4",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#2D3238",
        duration: "3",
        width: "5vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#5C6D81",
        duration: "2",
        width: "20vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#6E7D8E",
        duration: "3",
        width: "63vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#675D5C",
        duration: "5",
        width: "3vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#59514F",
        duration: "4",
        width: "12vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#43444B",
        duration: "2",
        width: "4vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#465666",
        duration: "3",
        width: "35vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#667486",
        duration: "6",
        width: "46vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#635959",
        duration: "7",
        width: "9vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#59514F",
        duration: "5",
        width: "30vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#465666",
        duration: "4",
        width: "25vw",
        height: "3vh",
        horizon: false,
      },
      {
        color: "#526373",
        duration: "5",
        width: "36vw",
        height: "3vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#635353",
        duration: "3",
        width: "5vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#505053",
        duration: "5",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#2E3339",
        duration: "6",
        width: "7vw",
        height: "2vh",
        horizon: false,
      },
      {
        color: "#59514F",
        duration: "2",
        width: "81vw",
        height: "2vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#5C5050",
        duration: "2",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#77655E",
        duration: "4",
        width: "20vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#836560",
        duration: "3",
        width: "55vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#77605A",
        duration: "5",
        width: "32vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#64524E",
        duration: "3",
        width: "2vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#342E2E",
        duration: "5",
        width: "5vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#6D5D56",
        duration: "2",
        width: "20vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#745356",
        duration: "4",
        width: "40vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#575452",
        duration: "7",
        width: "40vw",
        height: "1vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#232325",
        duration: "5",
        width: "1vw",
        height: "7vh",
        horizon: false,
      },
      {
        color: "#342E2E",
        duration: "4",
        width: "5vw",
        height: "7vh",
        horizon: false,
      },
      {
        color: "#1F2024",
        duration: "6",
        width: "15vw",
        height: "7vh",
        horizon: false,
      },
      {
        color: "#2D3134",
        duration: "7",
        width: "50vw",
        height: "7vh",
        horizon: false,
      },
      {
        color: "#48494D",
        duration: "5",
        width: "29vw",
        height: "7vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#49433D",
        duration: "3",
        width: "3vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#3F3B38",
        duration: "7",
        width: "8vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#504645",
        duration: "3",
        width: "60vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#645A57",
        duration: "5",
        width: "50vw",
        height: "4vh",
        horizon: false,
      },
      {
        color: "#564E4C",
        duration: "6",
        width: "29vw",
        height: "4vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#372D2E",
        duration: "4",
        width: "3vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#463637",
        duration: "2",
        width: "10vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#463434",
        duration: "3",
        width: "15vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#443135",
        duration: "6",
        width: "60vw",
        height: "5vh",
        horizon: false,
      },
      {
        color: "#706F79",
        duration: "5",
        width: "12vw",
        height: "5vh",
        horizon: false,
      },
    ],
    [
      {
        color: "#372D2E",
        duration: "5",
        width: "3vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#463637",
        duration: "4",
        width: "10vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#463434",
        duration: "8",
        width: "15vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#443135",
        duration: "7",
        width: "70vw",
        height: "1vh",
        horizon: false,
      },
      {
        color: "#474143",
        duration: "5",
        width: "2vw",
        height: "1vh",
        horizon: false,
      },
    ],
  ];

  const setCurrentTimeOfDay = () => {
    if (time <= 4 || time > 19) {
      setTimeOfDayArray(moon);
      setSunStyle("moon");
      setStarBool(true);
      setTODLable("Moon");
    } else if (time >= 4 && time < 5) {
      setTimeOfDayArray(moonset);
      setSunStyle("moonset");
      setStarBool(true);
      setTODLable("Moonset");
    } else if (time >= 6 && time < 8) {
      setTimeOfDayArray(sunrise);
      setSunStyle("sunrise");
      setStarBool(false);
      setTODLable("Sunrise");
    } else if (time >= 8 && time < 16) {
      setTimeOfDayArray(daysun);
      setSunStyle("daysun");
      setStarBool(false);
      setTODLable("Daytime Sun");
    } else if (time >= 16 && time < 17) {
      setTimeOfDayArray(midsunset);
      setSunStyle("midsunset");
      setStarBool(false);
      setTODLable("Pre Sunset");
    } else if (time >= 17 && time < 18) {
      setTimeOfDayArray(sunset);
      setSunStyle("sunset");
      setStarBool(false);
      setTODLable("Sunset");
    } else if (time >= 18 && time <= 19) {
      setTimeOfDayArray(moonrise);
      setSunStyle("moonrise");
      setStarBool(true);
      setTODLable("Moonrise");
    } else {
      setTimeOfDayArray(moon);
      setSunStyle("moon");
      setStarBool(true);
      setTODLable("Moon");
    }
  };

  const handleTimeOfDayChange = (event) => {
    setTimeOfDay(event.target.value);
    console.log("TOD " + event.target.value);

    if (event.target.value === "currenttime") {
      // The if/else statements
      setCurrentTimeOfDay();
    } else if (event.target.value === "moon") {
      setTimeOfDayArray(moon);
      setSunStyle("moon");
      setStarBool(true);
    } else if (event.target.value === "moonset") {
      setTimeOfDayArray(moonset);
      setSunStyle("moonset");
      setStarBool(true);
    } else if (event.target.value === "sunrise") {
      setTimeOfDayArray(sunrise);
      setSunStyle("sunrise");
      setStarBool(false);
    } else if (event.target.value === "daysun") {
      setTimeOfDayArray(daysun);
      setSunStyle("daysun");
      setStarBool(false);
    } else if (event.target.value === "midsunset") {
      setTimeOfDayArray(midsunset);
      setSunStyle("midsunset");
      setStarBool(false);
    } else if (event.target.value === "sunset") {
      setTimeOfDayArray(sunset);
      setSunStyle("sunset");
      setStarBool(false);
    } else if (event.target.value === "moonrise") {
      setTimeOfDayArray(moonrise);
      setSunStyle("moonrise");
      setStarBool(true);
    }
  };

  useEffect(() => {
    setCurrentTimeOfDay();
  }, [time]);

  return (
    <div>
      <div className="ocean-sunset-container">
        {starBool ? <Stars /> : null}
        {/* <Stars /> */}

        {/* Sun component */}
        <Sun sunStyle={sunStyle} />

        {/* Outer loop to iterate through color matrix row-by-row */}
        {timeOfDayArray.map((items, index) => {
          return (
            <div key={index} className="row-container">
              {/* Inner loop to iterate through color matrix column-by-column */}
              {items.map((subItems, subIndex) => {
                return (
                  <Block
                    key={items.color + "-" + subIndex}
                    blockNumber={index}
                    blockSubNumber={subIndex}
                    blockColor={subItems.color}
                    blockSecondColor={subItems.color2}
                    blockWidth={subItems.width}
                    blockHeight={subItems.height}
                    blockDuration={subItems.duration}
                    horizon={subItems.horizon}
                    numSubItems={items.length}
                  />
                );
              })}
            </div>
          );
        })}
        {/* <button onClick={openFullscreen()} >Full Screen</button> */}
      </div>
      <div className="time-of-day-select-container">
        <Dropdown items={options} onChange={handleTimeOfDayChange} />
      </div>
      <div onClick={() => setModalOpen(true)} className="info-button-container">
        <InfoButton />
      </div>

      <Modal
        setModalOpen={setModalOpen}
        content={content}
        modalOpen={modalOpen}
      />
    </div>
  );
}
