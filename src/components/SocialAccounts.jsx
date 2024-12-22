import AccountStatus from "./AccountStatus"
import { socialAccount } from "../data/data"

const SocialAccounts = () => {
 return (
  <main className="flex flex-col border-[1px] border-gray-300 border-dashed rounded-[16px] mt-[40px]">
   <AccountStatus
    heading={"Social Accounts."}
    subtitle={"Add/Remove your social accounts."}
    button={false}
    bgColor="bg-white"
   />
   <div className="rounded-[16px] bg-white py-[24px] px-[32px] flex flex-col mx-auto justify-center align-middle w-full">
    {socialAccount.map((item) => {
     const { id, acctType, image, connected } = item
     return (
      <div
       key={id}
       className="flex flex-row justify-between items-center md:h-[56px] border-b-[1px] border-gray-100 py-[12px] font-poppins text-base lg:text-[20px]"
      >
       <div className="flex flex-row items-center justify-center">
        <img src={image} alt="" />
        <p className="pl-2 text-greytext ">{acctType}</p>
       </div>
       <p className="text-primary font-lato text-base font-bold md:text-[20px] cursor-pointer">
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
