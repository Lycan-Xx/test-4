import Paystack from "../assets/paystack.svg"
import Flutterwave from "../assets/flutterwave.svg"
import Interswitch from "../assets/interswitch.svg"
import Remita from "../assets/remita.svg"



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