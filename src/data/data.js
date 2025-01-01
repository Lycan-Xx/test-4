import Paystack from "../assets/paystack.svg"
import Flutterwave from "../assets/flutterwave.svg"
import Interswitch from "../assets/interswitch.svg"
import Remita from "../assets/remita.svg"

import { PiGauge } from "react-icons/pi"
import { PiFiles } from "react-icons/pi"
import { PiGear } from "react-icons/pi"
import { PiCreditCard } from "react-icons/pi"
import { PiCrownSimple } from "react-icons/pi"
import { PiSignOut } from "react-icons/pi"

import SettingsIcon from "../assets/SettingsIcon.svg"
import CreditCard from "../assets/creditcard.svg"
import LogOutIcon from "../assets/LogOutIcon.svg"
import TemplatesIcon from "../assets/TemplatesIcon.svg"
import Crown from "../assets/crown.svg"
import ProfilePic from "../assets/ProfileEllipse.svg"

import LinkedInPic from "../assets/LinkedIn.svg"
import GooglePic from "../assets/GooglePic.svg"

// export const ceevies = [
//  {
//   id: 1,
//     title: "My CVs",
//     CVs: [
//       image1,
//       image2,
//     ]
//  },
//  {
//   id: 2,
//   title: "Cover Letters",
//   CVs: [
//       image1,
//       image2,
//     ]
//  },
// ]

export const socialAccount = [
 {
  id: 1,
  acctType: "LinkedIn",
  image: LinkedInPic,
  connected: true,
 },

 {
  id: 2,
  acctType: "Google",
  image: GooglePic,
  connected: false,
 },
]

export const paymentOptions = [
 {
  id: 1,
  image: Paystack,
  gateway: "Paystack",
 },
 {
  id: 2,
  image: Flutterwave,
  gateway: "Flutterwave",
 },
 {
  id: 3,
  image: Interswitch,
  gateway: "Interswitch",
 },
 {
  id: 4,
  image: Remita,
  gateway: "Remita",
 },
]

export const links = [
 {
  id: 1,
  url: "/",
  text: "Dashboard",
  icon: PiGauge,
 },
 {
  id: 2,
  url: "/Templates",
  text: "Templates",
  icon: PiFiles
 },
 {
  id: 3,
  url: "/settings",
  text: "settings",
  icon: PiGear 
 },
 {
  id: 4,
  url: "/payment-history",
  text: "payment history",
  icon: PiCreditCard 
 },
 {
  id: 5,
  url: "/profile",
  text: "Ozzy Abel",
  icon: ProfilePic 
 },
 {
  id: 6,
  url: "/upgrade",
  text: "Upgrade Now",
  icon: PiCrownSimple
 },

 {
  id: 7,
  url: "/logOut",
  text: "Logout",
  icon: PiSignOut
 },
]

export const paymentHistory = [
 {
  id: 1,
  paymentID: " 06c1774-7f3d-46ad...90a8",
  paymentStatus: true,
  Amount: "35",
  cardType: "Visa",
  cardNumber: "1234 5678 9234 2341",
  time: {
   month: "Mar",
   year: "2022",
   hour: "12:43",
   AM: true,
  },
 },
 {
  id: 2,
  paymentID: " 06c1774-7f3d-46ad...90a8",
  paymentStatus: true,
  Amount: "35",
  cardType: "MasterCard",
  cardNumber: "1234 5678 9234 2341",
  time: {
   month: "Mar",
   year: "2022",
   hour: "12:43",
   AM: true,
  },
 },
 {
  id: 3,
  paymentID: "06c1774-7f3d-46ad...90a8",
  paymentStatus: false,
  Amount: "35",
  cardType: "MasterCard",
  cardNumber: "1234 5678 9234 2341",
  time: {
   month: "Mar",
   year: "2022",
   hour: "12:43",
   AM: true,
  },
 },
 {
  id: 4,
  paymentID: "06c1774-7f3d-46ad...90a8",
  paymentStatus: true,
  Amount: "35",
  cardType: "MasterCard",
  cardNumber: "1234 5678 9234 2341",
  time: {
   month: "Mar",
   year: "2022",
   hour: "12:43",
   AM: true,
  },
 },
 {
  id: 5,
  paymentID: "06c1774-7f3d-46ad...90a8",
  paymentStatus: true,
  Amount: "35",
  cardType: "Visa",
  cardNumber: "1234 5678 9234 2341",
  time: {
   month: "Mar",
   year: "2022",
   hour: "12:43",
   AM: true,
  },
 },
 {
  id: 6,
  paymentID: "06c1774-7f3d-46ad...90a8",
  paymentStatus: false,
  Amount: "35",
  cardType: "MasterCard",
  cardNumber: "1234 5678 9234 2341",
  time: {
   month: "Mar",
   year: "2022",
   hour: "12:43",
   AM: true,
  },
 },
 {
  id: 7,
  paymentID: "06c1774-7f3d-46ad...90a8",
  paymentStatus: false,
  Amount: "35",
  cardType: "MasterCard",
  cardNumber: "1234 5678 9234 2341",
  time: {
   month: "Mar",
   year: "2022",
   hour: "12:43",
   AM: true,
  },
 },
]
