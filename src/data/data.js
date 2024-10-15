import Paystack from "../assets/paystack.svg"
import Flutterwave from "../assets/flutterwave.svg"
import Interswitch from "../assets/interswitch.svg"
import Remita from "../assets/remita.svg"

import DashboardIcon from "../assets/DashboardIcon.svg"
import SettingsIcon from "../assets/SettingsIcon.svg"
import LogOutIcon from "../assets/LogOutIcon.svg"
import Crown from "../assets/crown.svg"
import ProfilePic from "../assets/X.svg"

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
  text: "home",
  icon: <DashboardIcon />,
 },
 {
  id: 2,
  url: "/team",
  text: "team",
  icon: <SettingsIcon />,
 },
 {
  id: 3,
  url: "/projects",
  text: "projects",
  icon: <LogOutIcon />,
 },
 {
  id: 4,
  url: "/calendar",
  text: "calendar",
  icon: <Crown />,
 },
 {
  id: 5,
  url: "/documents",
  text: "documents",
  icon: <ProfilePic />,
 },
]