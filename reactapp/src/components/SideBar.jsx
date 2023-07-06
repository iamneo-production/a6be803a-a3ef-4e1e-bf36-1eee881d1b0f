import { NavLink } from 'react-router-dom';
import{FaBars, FaHome}from'react-icons/fa'
import{RiFileAddFill}from'react-icons/ri'
import{CiBadgeDollar}from'react-icons/ci'
import{IoMdAnalytics}from'react-icons/io'
import{CiBullhorn}from'react-icons/ci'
import{ImTicket}from'react-icons/im'
import{BiSearch, BiTask}from'react-icons/bi'
import{BiSolidUserCircle} from'react-icons/bi'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import{MdEmail}from'react-icons/md'
const routes=[{
  path:"/",
  name:"Dashboard",icon:<FaHome/>,
  },{
    path:"/Customer",
  name:"customer",icon:<BiSolidUserCircle/>,
  },{
    path:"/Lead",
  name:"Lead",icon:<RiFileAddFill/>,
  },{
    path:"/Oppo",
  name:"opportunity",icon:<CiBullhorn/>,
  },{
    path:"/Sale",
  name:"sale",icon:<CiBadgeDollar/>,
  },{
    path:"/Stage",
  name:"Analytics",icon:<IoMdAnalytics/>,
  },{
    path:"/Task",
  name:"Task",icon:<BiTask/>,
  },{
    path:"/Ticket",
    name:"Ticket",icon:<ImTicket/>,
    },
    {
      path:"/Email",
      name:"Email",icon:<MdEmail/>,
      }
  ];
  

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 CRM
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
            </div>
        <section className="routes">
            {routes.map((route)=>(
                <NavLink  activeClassName="active" to={route.path}key={route.name}className="link">

                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              
            ))}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;