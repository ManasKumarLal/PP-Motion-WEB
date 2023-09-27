import React, { useState } from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaBars,
  FaCartPlus,
  FaHeart,
  FaFile,
} from "react-icons/fa";
import {
  MdOutlineSettingsSuggest,
  MdMessage,
  MdAnalytics,
  MdSearch,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdAnalytics />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <MdMessage />,
  },
  {
    path: "/filemanager",
    name: "FileManager",
    icon: <FaFile />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <FaCartPlus />,
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <FaHeart />,
  },
  {
    path: "/setting",
    name: "Setting",
    icon: <MdOutlineSettingsSuggest />,
  },
];

const SlideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const inputAnimate = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "80%",
      padding: "0px 10px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const routeAnimate = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div
        className="slidebar"
        animate={{ width: `${isOpen ? "250px" : "55px"}`,transition:{
            duration:0.5,
            type:"spring",
            damping:13,
        } }}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={routeAnimate}
                className="logo"
              >
                MKLSkillsZone
              </motion.h1>
            )}
          </AnimatePresence>
          <div className="bar">
            <FaBars onClick={() => toggle()} />
          </div>
        </div>

        <div className="search">
          <div className="search_icon">
            <MdSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimate}
                type="search"
                placeholder="search"
              />
            )}
          </AnimatePresence>
        </div>

        <section className="routes">
          {routes.map((route, index) => {
            return (
              <NavLink activeClassName="active" to={route.path} key={index} className="link">
                <div className="routesIcon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      variants={routeAnimate}
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default SlideBar;
