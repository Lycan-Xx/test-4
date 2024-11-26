import React from "react"
import { Link } from "react-router-dom"
import HeadingSubtitle from "../HeadingSubtitle"
import AccountStatus from "../AccountStatus"
import AISparkle from "../../assets/AISparkle.svg"
import AccountInformation from "../AccountInformation"
import SocialAccounts from "../SocialAccounts"

const Settings = () => {
 return (
  <main>
   <HeadingSubtitle
    heading={"Settings."}
    subtitle={"Choose one of these template to build your CV."}
   />
   <AccountStatus
    heading={"Account Stautus"}
    subtitle={
     "You are currently on a free plan which is why you can't use some features. Upgrade to premium to have access to premium features."
    }
    button={true}
   />
   <AccountInformation />
   <SocialAccounts />
  </main>
 )
}

export default Settings
