import { FC } from "react";
import ActionButton from "./CommonUI/ActionButton";
import Button from "./CommonUI/Button";
import ProfileCard from "./CommonUI/ProfileCard";

interface DisplayFeedProps {}

const DisplayFeed: FC<DisplayFeedProps> = () => {
  return (
    <div className="max-w-6xl w-full p-3">
      <div className="h-screen bg-gray-100 rounded-[40px] border-gray-200 border-2">
        <div className="flex flex-col justify-center items-center w-full h-full p-2">
          <div className="my-4 w-[90%] h-fit rounded-[20px] flex">
            <div className="w-full h-full flex justify-between">
              <ActionButton
                title={"TIME: 12:30 "}
                style={"bg-gray-50 hover:shadow-none shadow-none"}
              />

              <div className="flex space-x-2">
                <ActionButton title={"edit feed"} />
                <ActionButton title={"saved"} />
                <ActionButton title={"explore"} />
                <ActionButton title={"learn more"} />
              </div>
            </div>
          </div>
          <div className="p-2 w-[90%] h-[90%] rounded-[20px] flex border-2">
            <div className="w-full h-fit">
              FEED COMES HERE
              <ProfileCard
                profilePicUrl={
                  "https://avatars.githubusercontent.com/u/25105806?v=4"
                }
                username={"Eric STroh"}
                postContent={"Tester test mr testinger"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFeed;
