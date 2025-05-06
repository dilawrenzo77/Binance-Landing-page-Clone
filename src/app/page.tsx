"use client"
import Image from "next/image";
import { useState } from "react";
import { SiBinance } from "react-icons/si";
import { RiSearch2Line } from "react-icons/ri";
import { RiMobileDownloadFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import QR from "@/assets/biQR.jpg";
import Lite from "@/assets/lite.png";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLinux } from "react-icons/fa6";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaDiscord } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineEllipsis } from "react-icons/ai";
import { HiCurrencyDollar } from "react-icons/hi2";
import { CgToggleSquare } from "react-icons/cg";
import { IoQrCode } from "react-icons/io5";
import { RiBnbFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBitcoin } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { LuCoins } from "react-icons/lu";
import { SiApacheecharts } from "react-icons/si";
import { IoIdCardSharp } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { BsUiChecksGrid } from "react-icons/bs";
import { LuHeadset } from "react-icons/lu";
import { RiMailDownloadFill } from "react-icons/ri";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { useTheme } from "next-themes";




export default function Home() {
  const {theme, setTheme} = useTheme();
  const [open, setOpen] = useState("false");
  const [toogle, setToogle] =useState("false");



  return (
    <main className="flex flex-col items-center justify-between gap-5 dark:bg-[#1E2026]">
      <nav className="flex items-center justify-between w-full px-3 py-2 relative">
        <div className="flex items-center justify-center gap-4 ">
          <div className="flex items-center justify-center gap-1">
            <SiBinance size={20} className="text-binance"/>
            <p className="text-md font-semibold text-binance">BINANCE</p>
          </div>
          <div>
            <p className="text-sm font-medium hidden sm:block hover:text-binance dark:text-neutral-200">Buy crypto</p>
          </div>
          <div>
            <p className="text-sm font-medium hidden sm:block hover:text-binance dark:text-neutral-200">Markets</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
            <p className="text-sm relative peer font-medium hover:text-binance dark:text-neutral-200 hidden sm:block">Trade</p>
            <FaChevronDown size={10} className="hidden sm:block font-bold hover:text-binance dark:text-neutral-200"/>
            </div>
            <div className="absolute top-8.5 left-5 hidden shadow-xl/20 bg-neutral-50 px-2 py-2 peer-hover:flex items-start justify-center gap-2 dark:bg-[#181a20]">
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-[0.5rem] text-neutral-700 dark:text-neutral-200">Basic</p>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Spot</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Buy and sell on the spot market with advanced tools</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Margin</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Increase your profits with leverage</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">P2P</p>
                  <p className="text-[0.4rem] text-neutral-700 text-start dark:text-neutral-200">Buy and cryptocurrencies using bank transfer and 800+ options</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Convert and Block Trade</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">The easiest way to trade across all sizes</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-[0.5rem] text-neutral-700 dark:text-neutral-200">Advanced</p>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Trading Bots</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Trade smarter with our various automated strategies-easy fast and reliable</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Copy trades</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Follow the most popular traders</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">APIs</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Unlimited opportunities with one key</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <p className="text-sm relative peer font-medium hover:text-binance dark:text-neutral-200 hidden sm:block">Futures</p>
              <FaChevronDown size={10} className="hidden sm:block font-bold hover:text-binance dark:text-neutral-200"/>
            </div>
            <div className="absolute top-8.5 left-45 shadow-xl/20 bg-neutral-50 hidden px-2 py-3 peer-hover:flex items-start justify-center gap-2 dark:bg-[#181a20]">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">USD-M Futures</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Contracts settled in USDT and USDC</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">COIN-M Futures</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Contacts settled in crytocurrencies</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <p className="text-sm relative peer font-medium hover:text-binance dark:text-neutral-200 hidden sm:block">Earn</p>
              <FaChevronDown size={10} className="hidden sm:block font-bold hover:text-binance dark:text-neutral-200"/>
            </div>
            <div className="absolute top-8.5 left-50 hidden shadow-xl/20 bg-neutral-50 px-2 py-2 peer-hover:flex items-start justify-center gap-2 dark:bg-[#181a20]">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Overview</p>
                  <p className="text-[0.4rem] text-neutral-700">One-stop portal for all Earn products</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Simple earn</p>
                  <p className="text-[0.4rem] text-neutral-700">Earn massive income on 300+ crypto assets with flexible and locked terms</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Loans</p>
                  <p className="text-[0.4rem] text-neutral-700">Access quick and easy loans with competitive rates</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <p className="text-sm relative peer font-medium hover:text-binance dark:text-neutral-200 hidden sm:block">Square</p>
              <FaChevronDown size={10} className="hidden sm:block font-bold hover:text-binance dark:text-neutral-200"/>
            </div>
            <div className="absolute top-8.5 left-58 hidden shadow-xl/20 bg-neutral-50 px-2 py-2 peer-hover:flex items-start justify-center gap-2 dark:bg-[#181a20]">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Square</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Stay informed with everything crypto</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Academy (learn and earn)</p>
                  <p className="text-[0.4rem] text-neutral-700">Earn cryto by learning about blockchain</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Blog</p>
                  <p className="text-[0.4rem] text-neutral-700 text-start ">Expand your knowledge and get the latest insights</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Research</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Institutional-grade analysis, in-depth insights and more</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <p className="text-sm relative peer font-medium hover:text-binance dark:text-neutral-200 hidden sm:block">More</p>
              <FaChevronDown size={10} className="hidden sm:block font-bold hover:text-binance dark:text-neutral-200"/>
            </div>
            <div className="absolute top-8.5 left-50 hidden shadow-xl/20 bg-neutral-50 px-2 py-2 peer-hover:flex items-start justify-center gap-2 dark:bg-[#181a20]">
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">VIP & Institutional</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Your trusted digital asset for VIP's and institutions</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Megadrop</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Lock your BNB and complete web3 quest for boosted airdrop rewards</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Mining pool</p>
                  <p className="text-[0.4rem] text-neutral-700 text-start dark:text-neutral-200">Mine more rewards by connecting to the pool</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Loan</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Get an instant loan secured by crypto assets</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">NFT</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Explore nft's from creators worldwide</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Charity</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Blockchain empowers charity to be more transparent, efficient and tracable</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-4 ">
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Binance Send</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Send, recieve and spend cryptocurrency</p>
                </div>
                <div className="w-[85%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">fan token</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Discover an all new fandom and unlock unlimited fan experiences</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Binance wallet</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Access and navigate web3 effortlessly</p>
                </div>
                <div className="w-[100%]">
                  <p className="text-[0.5rem] font-semibold dark:text-neutral-200">Travel rule</p>
                  <p className="text-[0.4rem] text-neutral-700 dark:text-neutral-200">Enhance transparency and combat financial crimes such and money laundering and terrorism financing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 md:3 lg:gap-6">
          <RiSearch2Line size={25} className="hover:text-binance dark:text-neutral-200 hidden lg:block"/>
          <button className="text-sm bg-neutral-300 px-2.5 py-1 rounded-sm hover:bg-neutral-200 hidden md:flex">Log In</button>
          <button className="text-sm bg-binance px-2.5 py-1 rounded-sm hover:text-neutral-50 hidden md:flex">Sign Up</button> 
          <RiMobileDownloadFill size={25} className="hover:text-binance dark:text-neutral-200 hidden lg:block"/>
          <FaGlobe size={25} className="hover:text-binance dark:text-neutral-200 hidden lg:block"/>
          <MdLightMode size={25} className=" dark:text-binance hidden sm:block" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}/>
        </div>
        <RxHamburgerMenu size={30} className="text-binance sm:hidden" onClick={() => setToogle("true")}/>
        <div className={(toogle === "false" ?`bg-neutral-100 dark:bg-[#181a20] w-[100vw] px-4 py-2 flex flex-col items-start justify-center gap-4 hidden` : `bg-neutral-100 dark:bg-[#181a20] w-[100vw] px-4 py-2 flex flex-col items-start justify-center gap-4 absolute top-12 left-0`)}>
          <div className="w-[100%] flex items-center justify-end"><p className="font-semibold dark:text-neutral-400 mr-3" onClick={() => setToogle("false")}><IoClose size={30} /></p></div>
          <div className="flex items-center justify-center gap-1 w-full">
            <button className="w-[50%] bg-neutral-600 text-neutral-200 rounded-sm ">Log In</button>
            <button className="w-[50%] bg-binance rounded-sm ">Sign Up</button>
          </div>
          <input type="text" placeholder="Coin, Function, Announcement" className="w-[100%] rounded-sm border border-neutral-400 border-solid dark:border-[#5d637576] placeholder:text-xs placeholder:ml-3 dark:text-neutral-200"/>
          <div className="flex flex-col items-start justify-between gap-4">
            <div className="flex items-center justify-center gap-2"><FaBitcoin size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">Buy crypto</p></div>
            <div className="flex items-center justify-center gap-2"><FaChartBar size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">Markets</p></div>
            <div className="flex items-center justify-center gap-2"><LuCoins size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">Trade</p></div>
            <div className="flex items-center justify-center gap-2"><SiApacheecharts size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">Futures</p></div>
            <div className="flex items-center justify-center gap-2"><IoIdCardSharp size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">Earn</p></div>
            <div className="flex items-center justify-center gap-2"><IoBookSharp size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">Square</p></div>
            <div className="flex items-center justify-center gap-2"><BsUiChecksGrid size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">More</p></div>
            <div className="flex items-center justify-center gap-2"><p className="text-sm text-neutral-400 dark:neutral-400">Theme</p></div>
            <div className="flex items-center justify-center gap-2"><LuHeadset size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">24/7 Chat support</p></div>
            <div className="flex items-center justify-center gap-2"><RiMailDownloadFill size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">Download</p></div>
            <div className="flex items-center justify-center gap-2"><FaGlobe size={20} className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">English(Nigeria)</p></div>
            <div className="flex items-center justify-center gap-2"><FaCircleDollarToSlot size={20}  className="text-binance dark:text-neutral-600"/><p className="text-sm text-neutral-400 dark:neutral-400">USD</p></div>
          </div>
        </div>
      </nav>
      <section className="w-full items-center justify-center px-5 sm:px-6 md:px-8 lg:px-10 xl:px-15 mt-5 mb-15  sm:flex  sm:gap-4 md:gap-7 lg:gap-15 xl:gap-30">
        <div className="flex flex-col items-start gap-10 justify-center w-full sm:px-2 md:px-5 lg:px-7 xl:px-9">
          <div className="flex flex-col items-start justify-center gap-4 w-full">
            <p className="text-4xl sm:text-6xl font-semibold text-binance">240,407,234</p>
            <p className="text-5xl font-bold dark:text-neutral-200 w-full">Users Buy & Sell USDT Through <br/>Us</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-1  content-center">
            <input type="text" placeholder="Email/Phone number" className="border border-neutral-500 border-solid hover:bg-neutral-300 rounded-sm dark:placeholder:text-neutral-400"/>
            <button className="bg-binance px-3 py-1 rounded-sm text-sm hover:opacity-75">Get Started</button>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col items-start justify-center gap-3">
              <p className="text-xs text-neutral-500 dark:text-neutral-200">or Continue with</p>
              <div className="flex items-center justify-center gap-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className="px-2 bg-neutral-100 border border-neutral-200 border-solid hover:bg-neutral-300 rounded-sm dark:text-neutral-200 dark:bg-transparent dark:border-neutral-700 dark:hover:bg-neutral-600">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                <FaApple size={30} className="px-2 bg-neutral-100 border border-neutral-200 border-solid  hover:bg-neutral-300 rounded-sm dark:text-neutral-200 dark:bg-transparent dark:border-neutral-700 dark:hover:bg-neutral-600"/>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <p className="text-xs text-neutral-500 dark:text-neutral-200">Download App</p>
              <IoQrCode size={30} className="p-2 bg-neutral-100 border border-neutral-200 border-solid hover:bg-neutral-300 rounded-sm dark:text-neutral-200 dark:bg-transparent dark:border-neutral-700 dark:hover:bg-neutral-600"/>
            </div>
          </div>
        </div>
        <div className="px-2 py-2 flex flex-col items-start justify-start gap-5 sm:gap-15 md:gap-10 lg:gap-8 w-full h-full">
          <div className="flex flex-col items-start justify-center gap-2 w-full bg-neutral-100 p-2 rounded-md dark:bg-[#181a20]">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center gap-3">
                <p className="text-sm font-semibold dark:text-neutral-200">Popular</p>
                <p className="text-[0.6rem] text-neutral-500 hover:opacity-50">New Listing</p>
              </div>
              <p className="text-[0.5rem] text-neutral-500 hidden sm:block hover:opacity-50">view all 350+ coins</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="flex items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#ffc107" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#fff8e1" d="M17,34V14h8.199c2.41,0,4.234,0.465,5.48,1.395s1.867,2.293,1.867,4.086c0,0.98-0.25,1.844-0.746,2.59c-0.5,0.746-1.195,1.293-2.086,1.641c1.016,0.258,1.816,0.773,2.402,1.555C32.703,26.043,33,26.992,33,28.121c0,1.922-0.609,3.379-1.828,4.367S28.219,33.98,25.965,34H17z M21,22h4.363c2.063-0.035,3.098-0.824,3.098-2.445c0-0.906-0.262-1.559-0.785-1.957S26.328,17,25.199,17H21V22z M21,25v6h4.844C26.805,31,29,30.531,29,28.391S27.883,25.027,26,25H21z"></path><path fill="#fff8e1" d="M20 11h3v5h-3V11zM25 11h3v5h-3V11zM20 32h3v5h-3V32zM25 32h3v5h-3V32z"></path>
                  </svg>
                  <p className="text-xs  dark:text-neutral-200">BTC</p>
                  <p className="text-[0.5rem] text-neutral-400">Bitcoin</p>
                </div>
                <div>
                  <p className="text-xs font-semibold dark:text-neutral-200">$88,023.12</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-600">+0.62%</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="flex items-center justify-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7880e7" d="M11,24L25,2l14,22l-14,8L11,24z"></path><path fill="#5c64c7" d="M25,2l14,22l-14,8V2z"></path><path fill="#7880e7" d="M11,27l14,8l14-8L25,46L11,27z"></path><path fill="#5c64c7" d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"></path><path fill="#2a3192" d="M25,18l14,6l-14,8V18z"></path>
                </svg>
                  <p className="text-xs  dark:text-neutral-200">ETH</p>
                  <p className="text-[0.5rem] text-neutral-400">Ethereum</p>
                </div>
                <div>
                  <p className="text-xs font-semibold dark:text-neutral-200">$1,578.20</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-600">-4.28%</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="flex items-center justify-center gap-1">
                  <RiBnbFill size={20} className="bg-binance rounded-full p-0.5 text-neutral-50"/>
                  <p className="text-xs  dark:text-neutral-200">BNB</p>
                  <p className="text-[0.5rem] text-neutral-400 dark:text-neutral-200">BNB</p>
                </div>
                <div>
                  <p className="text-xs font-semibold dark:text-neutral-200">$600.62</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-600 dark:text-neutral-200">-0.87%</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-6 w-full">
                <div className="flex items-center justify-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64">
                  <linearGradient id="2xyP8ITvw2AyN9J62dUAba_icTiMgoOHSVy_gr1" x1="32" x2="32" y1="17.936" y2="43.068" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#2xyP8ITvw2AyN9J62dUAba_icTiMgoOHSVy_gr1)" d="M41.806,25H17.032l5.161-6h24.774L41.806,25z M17.032,45h24.774l5.161-6H22.194L17.032,45z M17.032,29l5.161,6h24.774l-5.161-6H17.032z"></path><linearGradient id="2xyP8ITvw2AyN9J62dUAbb_icTiMgoOHSVy_gr2" x1="32" x2="32" y1="8.553" y2="55.331" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#2xyP8ITvw2AyN9J62dUAbb_icTiMgoOHSVy_gr2)" d="M32,58C17.663,58,6,46.337,6,32	C6,17.664,17.663,6,32,6s26,11.664,26,26C58,46.337,46.337,58,32,58z M32,8C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24	S45.233,8,32,8z"></path>
                </svg>
                  <p className="text-xs  dark:text-neutral-200">Solana</p>
                  <p className="text-[0.5rem] text-neutral-400">Solana</p>
                </div>
                <div>
                  <p className="text-xs font-semibold dark:text-neutral-200">$2.07</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-600">-2.72%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 rounded-md p-2 dark:bg-[#181a20] flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between">
              <p className="text-sm dark:text-neutral-200">News</p>
              <p className="text-[0.5rem] text-neutral-400 hover:opacity-50">view all news</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <p className="text-xs dark:text-neutral-200">Arthur Hayes Family Office Engages in Private Equities Investment</p>
              <p className="text-xs dark:text-neutral-200">Market Sentiment Neutral as Cryptocurrency Funding Rate...</p>
              <p className="text-xs dark:text-neutral-200">Metaplex Faces Criticism Over Unclaimed Solana Funds Plan</p>
              <p className="text-xs dark:text-neutral-200">Neo Announces Closure of Neo Legacy Network</p>
            </div>
          </div>
        </div>
      </section>
      <section className="items-center justify-center w-[90%] lg:px-15 xl:px-20 mb-10 sm:flex sm:items-cemter sm:justify-center sm:gap-5">
        <div className="px-5">
          <div className="flex flex-col items-center justify-between gap-2">
            <Image src={Lite} width={200} height={300} alt="" className="object-cover "/>
            <div className="flex items-center justify-between gap-3 border-b border-neutral-500 border-solid">
              <p className="text-sm text-neutral-700 dark:text-neutral-500">Desktop</p>
              <p className="text-sm border-b-2 border-binance border-solid py-3 dark:text-neutral-200">Lite</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-500">Pro</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between  gap-18 sm:items-start">
          <p className="text-3xl font-semibold text-center sm:text-start dark:text-neutral-200">Trade on the go. Anywhere, <br/>anytime.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 content-center">
            <div className="">
              <Image src={QR} width={150} height={150} alt="" className="object-cover p-3 rounded-sm  border border-neutral-300 border-solid dark:border-neutral-700"/>
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Scan to Download App</p>
              <p className="dark:text-neutral-200">iOS and Android</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-17 ">
            <div className="flex flex-col items-center justify-center px-2 hover:bg-neutral-300 rounded-sm">
              <FaApple size={20} className="dark:text-neutral-200"/>
              <p className="text-sm dark:text-neutral-200">MacOS</p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 hover:bg-neutral-300 rounded-sm">
              <FaWindows size={20} className="dark:text-neutral-200"/>
              <p className="text-sm dark:text-neutral-200">Windows</p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 hover:bg-neutral-300 rounded-sm">
              <FaLinux size={20} className="dark:text-neutral-200"/>
              <p className="text-sm dark:text-neutral-200">Linux</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-0.5">
            <RiMobileDownloadFill size={12} className="dark:text-neutral-200"/>
            <p className="text-xs text-neutral-500 hover:opacity-50 dark:text-neutral-200">More Download Options</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-3 w-[90%] mb-10">
        <p className="font-bold text-2xl text-center dark:text-neutral-200">Frequently Asked Questions</p>
        <Accordion sx={{background : "transparent", boxShadow: "none", border: "none", width:"100%"}} >
          <AccordionSummary expandIcon={<ExpandMoreIcon className="dark:text-binance"/>}>
            <Typography><p className="font-semibold text-sm dark:text-neutral-200">What is a cryptocurrency exchange?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-xs text-neutral-500 dark:text-neutral-200"><span className="text-binance">Cryptocurrency</span> exchanges are a digital marketplaces that enables users to buy and sell cryptocurrencies like <span className="text-binance">Bitcoin</span>,<span className="text-binance">Ethereum</span> and <span className="text-binance">Tether</span>.
              The Binance exchange is the largest crypto exchange by trade volume</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{background : "transparent", boxShadow: "none", border: "none",width:"100%"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className="dark:text-binance"/>}>
            <Typography><p className="font-semibold text-sm dark:text-neutral-200">What product does binance provide?</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-xs text-neutral-500 dark:text-neutral-200">Binance is the world's leading cryptocurrency exchange, catering to 235 million registered users in over 180 countries. With low fees and over 350 cryptocurrencies to trade, Binance is the preferred exchange to trade Bitcoin, Altcoins, and other virtual assets.</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-200 mb-5">With Binance users can:
                <ul>
                  <li className="text-xs text-neutral-500 dark:text-neutral-200">- Trade hundreds of cryptocurrencies on <span className="text-binance">Spot</span>, <span className="text-binance">Margin</span>, and <span className="text-binance">Futures</span> markets.</li>
                  <li className="text-xs text-neutral-500 dark:text-neutral-200">- Buy and sell cryptocurrencies with <span className="text-binance">Binance P2P</span>.</li>
                  <li className="text-xs text-neutral-500 dark:text-neutral-200">- Earn interest on your crypto with <span className="text-binance">Binance Earn</span>.</li>
                  <li className="text-xs text-neutral-500 dark:text-neutral-200">- Buy or earn new tokens on Binance <span className="text-binance">Launchpad</span>.</li>
                  <li className="text-xs text-neutral-500 dark:text-neutral-200">- Trade, stake, and loan NFTs on <span className="text-binance">Binance NFT</span> marketplace.</li>
                </ul>
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      <Accordion sx={{background : "transparent", boxShadow: "none", border: "none",width:"100%"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className="dark:text-binance"/>}>
            <Typography><p className="font-semibold text-sm dark:text-neutral-200">How to buy Bitcoin and other cryptocurrencies on Binance</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-xs text-neutral-500 dark:text-neutral-200">There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to <span className="text-binance">purchase crypto</span> on Binance. Before getting started, please make sure you’ve completed <span className="text-binance">Identity Verification</span> for your Binance account.</p>
            </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion sx={{background : "transparent", boxShadow: "none", border: "none",width:"100%"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className="dark:text-binance"/>}>
            <Typography><p className="font-semibold text-sm dark:text-neutral-200">How to track cryptocurrency prices</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-xs text-neutral-500 dark:text-neutral-200">The easiest way to track the latest cryptocurrency prices, trading volumes, trending altcoins, and market cap is the <span className="text-binance">Binance Cryptocurrency Directory</span>. Click on the coins to know historical coin prices, 24-hour trading volume, and the price of cryptocurrencies like <span className="text-binance">Bitcoin</span>, <span className="text-binance">Ethereum</span>, <span className="text-binance">BNB</span> and others in real-time.</p>
            </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion sx={{background : "transparent", boxShadow: "none", border: "none",width:"100%"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className="dark:text-binance"/>}>
            <Typography><p className="font-semibold text-sm dark:text-neutral-200">How to trade cryptocurrencies on Binance</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-xs text-neutral-500 dark:text-binance">You can trade hundreds of cryptocurrencies on Binance via the <span className="text-binance">Spot</span>, <span className="text-binance">Margin</span>, <span className="text-binance">Futures</span>, and <span className="text-binance">Options</span> markets. To <span className="text-binance">begin trading</span>, users need to register an account, complete identity verification, buy/deposit crypto, and start trading.</p>
            </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion sx={{background : "transparent", boxShadow: "none", border: "none",width:"100%"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon className="dark:text-binance"/>}>
            <Typography><p className="font-semibold text-sm dark:text-neutral-200">How to earn from crypto on Binance</p></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-xs text-neutral-500 dark:text-neutral-200">Users can earn rewards on more than 180+ cryptocurrencies by using one of the products offered on <span className="text-binance">Binance Earn</span>. Our platform offers dozens of digital assets like <span className="text-binance">Bitcoin</span>, <span className="text-binance">Ethereum</span>, and stablecoins.</p>
            </Typography>
          </AccordionDetails>
      </Accordion>
      </section>
      <section className="w-full bg-neutral-200 flex items-center justify-center py-8 dark:bg-[#2b3139] mb-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-4xl font-bold dark:text-neutral-200 text-center">Start earning today</p>
          <button className="py-2 px-4 rounded-sm bg-binance hover:opacity-50">Sign up now</button>
        </div>
      </section>
      <footer className="items-start justify-center gap-10  w-full sm:flex">
        <div className="footblock order-1 flex flex-wrap items-start justify-between sm:gap-5 md:gap-8 lg:gap-10 xl:gap-15 content-center md:w-[70%] lg:w-[80%] xl:w-[60%] ">
          <div className="flex flex-col items-start justify-between gap-3 ">
            <div>
              <p className="text-sm font-semibold dark:text-neutral-200">About Us</p>
            </div>
            <div className="flex flex-col items-start justify-between gap-1">
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">About</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Careers</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Announcements</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">News</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Press</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Legal</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Terms</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Privacy</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Building Trust</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Blog</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Community</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Risk Warning</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Notices</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Downloads</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Desktop Application</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold dark:text-neutral-200">Products</p>
            </div>
            <div className="flex flex-col items-start justify-between gap-1">
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Exchange</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Buy Crypto</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Pay</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Academy</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Live</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Tax</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Gift Card</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Launchpool</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Auto-Invest</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">ETH Staking</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">NFT</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">BABT</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Research</p>
              <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Charity</p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-5">
            <div className="flex flex-col items-start justify-between gap-3">
              <p className="text-sm font-semibold dark:text-neutral-200">Business</p>
              <div className="flex flex-col items-start justify-between gap-1">
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">P2P Merchant Application</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">P2Pro Merchant Application</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Listing Application</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Institutional & VIP Services</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Labs</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Binance Connect</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-3">
              <p className="text-sm font-semibold dark:text-neutral-200">Learn</p>
              <div className="flex flex-col items-start justify-between gap-1">
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Learn & Earn</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Browse Crypto Prices</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Bitcoin Price</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Ethereum Price</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Browse Crypto Price Predictions</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Bitcoin Price Prediction</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Ethereum Price Prediction</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Ethereum Upgrade (Pectra)</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Buy Bitcoin</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Buy BNB</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Buy XRP</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Buy Dogecoin</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Buy Ethereum</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Buy Tradable Altcoins</p>
              </div>
            </div>
          </div>


          <div className="flex flex-col items-start justify-between gap-5">
            <div className="flex flex-col items-start justify-between gap-3">
              <p className="text-sm font-semibold dark:text-neutral-200">Service</p>
              <div className="flex flex-col items-start justify-between gap-1">
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Affiliate</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Referral</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">BNB</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">OTC Trading</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Historical Market Data</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Trading Insight</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Proof of Reserves</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-3">
              <p className="text-sm font-semibold dark:text-neutral-200">Support</p>
              <div className="flex flex-col items-start justify-between gap-1">
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">24/7 Chat Support</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Support Center</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Product Feedback & Suggestions</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Fees</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">APIs</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Binance Verify</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Trading Rules</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Binance Airdrop Portal</p>
                <p className="text-xs text-neutral-500 hover:text-binance dark:text-neutral-200">Law Enforcement Requests</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" px-8 flex flex-col items-start justify-start gap-7 sm:order-0">
          <div>
            <p className="text-sm font-semibold dark:text-neutral-200">Community</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:grid sm:grid-cols-4 sm:grid-rows-3 sm:gap-6">
            <FaDiscord size={20} className="hover:text-binance dark:text-neutral-200"/>
            <RiTelegram2Fill  size={20} className="hover:text-binance dark:text-neutral-200"/>
            <IoLogoTiktok  size={20} className="hover:text-binance dark:text-neutral-200"/>
            <FaFacebookF size={20} className="hover:text-binance dark:text-neutral-200"/>
            <FaXTwitter  size={20} className="hover:text-binance dark:text-neutral-200"/>
            <FaRedditAlien size={20} className="hover:text-binance dark:text-neutral-200"/>
            <FaInstagram size={20} className="hover:text-binance dark:text-neutral-200"/>
            <SiCoinmarketcap size={20} className="hover:text-binance dark:text-neutral-200"/>
            <FaYoutube size={20} className="hover:text-binance dark:text-neutral-200"/>
            <IoLogoWhatsapp size={20} className="hover:text-binance dark:text-neutral-200"/>
            <AiOutlineEllipsis size={20} className="hover:text-binance dark:text-neutral-200"/>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4 sm:flex-col">
            <div className="flex items-center justify-center gap-2">
              <FaGlobe size={15} className="dark:text-neutral-200"/>
              <p className="text-xs hover:text-binance dark:text-neutral-200">English(Nigeria)</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <HiCurrencyDollar size={20} className="dark:text-neutral-200"/>
              <p className="text-xs hover:text-binance dark:text-neutral-200">USD-$</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-xs hover:text-binance dark:text-neutral-200">Theme</p>
              <CgToggleSquare size={20} className="dark:text-neutral-200"/>
            </div>
          </div>
        </div>
      </footer>
      <section>
        <p className="text-xs text-neutral-400 dark:text-neutral-200">Binance Clone&copy; 2025  Mbata Lawrence Chibuzor</p>
      </section>
    </main>
  );
}
