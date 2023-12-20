import React, { useState, useEffect } from "react";
import "./Collection2.scss";
import Block from "./Block/Block";
import House from "./House/House";
import { Dropdown } from "../../Components/Dropdown/Dropdown";
export default function Collection2() {
    const [modalOpen, setModalOpen] = useState(false);
    const [season, setSeason] = useState();
    const [grassColor, setGrassColor] = useState("#719951");
    const [seasonArray, setSeasonArray] = useState([]);
    const [grass, setGrass] = useState([]);
    const [homeColor, setHomeColor] = useState('#a43924');
    const [doorColor, setDoorColor] = useState('#c2c2c2');
    const [windowColor, setWindowColor] = useState('#96ecffe0');
    const [windowBorderColor, setWindowBorderColor] = useState('#ffffffe8');
    let content = [
        "Ocean Sun is an impressionistic art series consisting of seven animated images of the sun or moon over the ocean at different times of the day.",
        "The images depict different times of day and change real time to match the users's time of day.",
    ];
    const options = [
        { label: "Spring", value: "spring" },
        { label: "Summer", value: "summer" },
        { label: "Autumn", value: "autumn" },
        { label: "Winter", value: "winter" },
    ];
    const handleSeasonChange = (event) => {
        setSeason(event.target.value);
        if (event.target.value === "spring") {
            setGrassColor("#719951");
            setHomeColor('#a43924');
            setDoorColor('#c2c2c2');
            setWindowColor('#96ecffe0');
            setWindowBorderColor('#8C6967');
            handleSeasonArray(spring, "#719951");
        }
        else if (event.target.value === "summer") {
            setGrassColor("#80621C");
            setHomeColor('#A42826');
            setDoorColor('#D2BDB7');
            setWindowColor('#7cadb8e0');
            setWindowBorderColor('#c2c2c2');
            handleSeasonArray(summer, "#798339");
        }
        else if (event.target.value === "autumn") {
            setGrassColor("#8E5C38");
            setHomeColor('#582722');
            setDoorColor('#c2c2c2');
            setWindowColor('#96ecffe0');
            setWindowBorderColor('#ADBAAB');
            handleSeasonArray(autumn, "#8E5C38");
        }
        else {
            setGrassColor("#EAF2F7");
            setHomeColor('#a43924');
            setDoorColor('#c2c2c2');
            setWindowColor('#96ecffe0');
            setWindowBorderColor('#8C6967');
            handleSeasonArray(winter, "#DAF2F7");
        }
    };
    const handleSeasonArray = (seasonName, color) => {
        let currentseason = seasonName;
        let allGrass = grassChange(color);
        allGrass.forEach((g) => {
            currentseason.push(g);
        });
        setSeasonArray(currentseason);
    };
    const grassChange = (color) => {
        // setGrass([]);
        let grassMatrix = [];
        let grassMatrixRow = [];
        let height = "2vh";
        let width = 100;
        let newWidth = 0;
        for (let j = 0; j < 15; j++) {
            grassMatrixRow = [];
            height = Math.floor(Math.random() * (5 - 2) + 2) + "vh";
            width = 100;
            while (width > 0) {
                // let blade = {"color": Math.floor(Math.random()*16777215).toString(16), "width": "1vw", "height": "2vh", "horizon": false }
                newWidth = Math.floor(Math.random() * (5 - 1) + 1);
                width -= newWidth;
                let blade = {
                    color: color,
                    duration: '' + Math.floor(Math.random() * (10 - 1) + 1),
                    width: newWidth + "vw",
                    height: height,
                    horizon: true,
                };
                grassMatrixRow.push(blade);
            }
            grassMatrix.push(grassMatrixRow);
        }
        console.log(grassMatrix);
        console.log(grassMatrix);
        // setGrass(grassMatrix);
        return grassMatrix;
    };
    // Matrix of color blocks including:
    //   color,
    //   duration of linear gradient animation
    //   width of block
    //   height of block
    // DONE
    const spring = [
        [
            {
                color: "#C9DDD4",
                duration: "12",
                width: "100vw",
                height: "4vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#C9DDD4",
                duration: "10",
                width: "100vw",
                height: "7vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#C6D7CF",
                duration: "15",
                width: "100vw",
                height: "9vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#BCCFC9",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#B7CAC4",
                duration: "20",
                width: "100vw",
                height: "3vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#B8C9C1",
                duration: "20",
                width: "100vw",
                height: "8vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#B7C7BD",
                duration: "20",
                width: "100vw",
                height: "5vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#B3C3B9",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#BBBEB3",
                duration: "20",
                width: "100vw",
                height: "9vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#B9BCAB",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
    ];
    const summer = [
        [
            {
                color: "#7CBED4",
                duration: "12",
                width: "100vw",
                height: "4vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#74B7D2",
                duration: "10",
                width: "100vw",
                height: "7vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#68AFCB",
                duration: "15",
                width: "100vw",
                height: "9vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#65ACCA",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#61A6C5",
                duration: "20",
                width: "100vw",
                height: "3vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#63A8C7",
                duration: "20",
                width: "100vw",
                height: "8vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#5DA2C1",
                duration: "20",
                width: "100vw",
                height: "5vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#5D9EBC",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#6AA1BA",
                duration: "20",
                width: "100vw",
                height: "9vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#78A6B3",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
    ];
    const autumn = [
        [
            {
                color: "E6E3EC",
                duration: "12",
                width: "100vw",
                height: "4vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#E9E6EF",
                duration: "10",
                width: "100vw",
                height: "7vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#EEEDF5",
                duration: "15",
                width: "100vw",
                height: "9vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#ECEBF3",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#EEEDF3",
                duration: "20",
                width: "100vw",
                height: "3vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#F0EFF5",
                duration: "20",
                width: "100vw",
                height: "8vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#F1F2F7",
                duration: "20",
                width: "100vw",
                height: "5vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#F6F7F9",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#F2F3F7",
                duration: "20",
                width: "100vw",
                height: "9vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#EDF8FB",
                duration: "20",
                width: "100vw",
                height: "6vh",
                horizon: true,
            },
        ],
    ];
    const winter = [
        [
            {
                color: "#849FBD",
                duration: "12",
                width: "100vw",
                height: "4vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#99B2D0",
                duration: "10",
                width: "100vw",
                height: "4vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#A6BCD4",
                duration: "15",
                width: "100vw",
                height: "5vh",
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
                height: "3vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#D6DAD9",
                duration: "20",
                width: "100vw",
                height: "4vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#E3E1D5",
                duration: "20",
                width: "100vw",
                height: "5vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#F2E0C8",
                duration: "20",
                width: "100vw",
                height: "4vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#F9D7B4",
                duration: "20",
                width: "100vw",
                height: "4vh",
                horizon: true,
            },
        ],
        [
            {
                color: "#F5C6A8",
                duration: "20",
                width: "100vw",
                height: "6vh",
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
                horizon: true,
            },
        ],
        [
            {
                color: "#9FA0A2",
                duration: "17",
                width: "100vw",
                height: "5vh",
                horizon: true,
            },
        ]
    ];
    useEffect(() => {
        handleSeasonArray(spring, "#719951");
    }, []);
    return (React.createElement("div", null,
        React.createElement("div", { className: "collection-two-container" },
            React.createElement(House, { homeColor: homeColor, doorColor: doorColor, windowColor: windowColor, windowBorderColor: windowBorderColor }),
            React.createElement("div", { class: "cloud large cloud-1" },
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)),
            React.createElement("div", { class: "cloud normal cloud-2" },
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)),
            React.createElement("div", { class: "cloud small cloud-3" },
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null)),
            seasonArray.map((items, index) => {
                return (React.createElement("div", { key: index, className: "row-container" }, items.map((subItems, subIndex) => {
                    return (React.createElement(Block, { key: items.color + "-" + subIndex, blockNumber: index, blockSubNumber: subIndex, blockColor: subItems.color, blockSecondColor: subItems.color2, blockWidth: subItems.width, blockHeight: subItems.height, blockDuration: subItems.duration, horizon: subItems.horizon, numSubItems: items.length }));
                })));
            })),
        React.createElement("div", { className: "season-select-container" },
            React.createElement(Dropdown, { items: options, onChange: handleSeasonChange }))));
}
