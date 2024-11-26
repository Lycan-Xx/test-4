import AccountStatus from "./AccountStatus"
import { socialAccount } from "../data/data"

const SocialAccounts = () => {
 return (
  <main className="flex flex-col ">
   <AccountStatus
    heading={"Social Accounts."}
    subtitle={"Add/Remove your social accounts."}
    button={false}
   />
   <div className="flex flex-col">
    {socialAccount.map((item) => {
     const { id, acctType, image, connected } = item
     return (
      <div key={id} className="flex flex-row justify-between items-center">
       <div className="flex flex-row items-center justify-center">
        <img src={image} alt="" />
        <p className="pl-2">{acctType}</p>
       </div>
       <p className="text-primary font-lato">
        {connected ? "Connect" : "Disconnect"}
       </p>
      </div>
     )
    })}
   </div>
  </main>
 )
}

export default SocialAccounts
