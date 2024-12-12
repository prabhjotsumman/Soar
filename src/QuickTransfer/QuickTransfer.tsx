import { ICONS } from "../assets/icons/icons";
import AvatarCard from "../components/AvatarCard/AvatarCard";
import Icon from "../components/Icon/Icon";

import user1 from "../assets/users/user1.png";
import user2 from "../assets/users/user2.png";
import user3 from "../assets/users/user3.png";
import { useState } from "react";

const QuickTransfer = () => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="w-full xs:max-w-[445px] md:max-w-[445px] sm:max-w-[445px] xl:max-w-[445px]">
      <div className="bg-white py-8 rounded-3xl mt-4">
        <div className="flex flex-row justify-between items-center">
          <AvatarCard name="Livia" designation="CEO" picture={user1} selected />
          <AvatarCard
            name="Randy Press"
            designation="Director"
            picture={user2}
          />
          <AvatarCard name="WorkMan" designation="Designer" picture={user3} />
          <Icon icon={ICONS.CHEVRON} altName="Chevron" />
        </div>
        <div className="flex items-center">
          <p className="text-purple text-base xs:pl-3 sm:pl-6 md:pl-6">
            Write Amount
          </p>
          <div className="relative ml-3 xs:ml-8 s:ml-8 md:ml-8 xl:ml-8">
            <input
              className="h-12 text-purple bg-screen-gray pl-5 xs:px-8 sm:px-8 md:px-8 xl:px-8 rounded-3xl"
              aria-label="enter amount to send"
            />
            <button
              aria-label="Send money"
              className={`bg-black text-white rounded-full pl-5 pr-4 py-1 absolute right-0 h-full hover:bg-slate-800 ${
                effect ? "animate-bounce" : " "
              }`}
              onClick={() => {
                setEffect(true);
                setTimeout(() => setEffect(false), 600);
              }}
              onAnimationEnd={() => setEffect(false)}
            >
              <div className="flex items-center" aria-label="Send button">
                Send
                <Icon icon={ICONS.VECTOR} altName="vector" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
