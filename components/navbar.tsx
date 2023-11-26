import { UserButton } from "@clerk/nextjs";

import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        {isPro ?
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0 p-0.5 rounded-full">
            <UserButton afterSignOutUrl="/" />
          </div>
          :
          <div className="bg-primary p-0.5 rounded-full">
            <UserButton afterSignOutUrl="/" />
          </div>
        }
      </div>
    </div>
  );
}

export default Navbar;