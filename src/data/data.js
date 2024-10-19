import Paystack from "../assets/paystack.svg"
import Flutterwave from "../assets/flutterwave.svg"
import Interswitch from "../assets/interswitch.svg"
import Remita from "../assets/remita.svg"

import DashboardIcon from "../assets/DashboardIcon.svg"
import SettingsIcon from "../assets/SettingsIcon.svg"
import LogOutIcon from "../assets/LogOutIcon.svg"
import TemplatesIcon from "../assets/TemplatesIcon.svg"
import Crown from "../assets/crown.svg"
import ProfilePic from "../assets/ProfileEllipse.svg"

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
  icon: DashboardIcon,
 },
 {
  id: 2,
  url: "/Templates",
  text: "Templates",
  icon: TemplatesIcon,
 },
 {
  id: 3,
  url: "/settings",
  text: "settings",
  icon: SettingsIcon,
 },
 {
  id: 4,
  url: "/upgrade",
  text: "calendar",
  icon: Crown,
 },
 {
  id: 5,
  url: "/documents",
  text: "documents",
  icon: ProfilePic,
 },
 {
  id: 6,
  url: "/logOut",
  text: "Logout",
  icon: LogOutIcon,
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
