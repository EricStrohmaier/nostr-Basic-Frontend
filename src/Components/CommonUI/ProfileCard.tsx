import { FC } from "react";
import ProfileImage from "./ProfileImage";

interface ProfileCardProps {
  profilePicUrl: string; // URL of the profile picture
  username: string; // Username or display name
  postContent: string; // Text content of the post
  npub: string; // NIP-05 address of the user
}

const ProfileCard: FC<ProfileCardProps> = ({
  username,
  postContent,
  profilePicUrl,
  npub,
}) => {
  return (
    <div className="w-full mx-auto">
      <div className="py-4 px-2 rounded-lg">
        {/* Profile Picture */}

        <div className="flex items-center space-x-4">
          <ProfileImage
            profilePicUrl={`${profilePicUrl}`}
            username={`${username}'s profile`}
          />
          <div className="text-xl font-semibold">
            {username} <span className="text-sm font-normal ">{npub}</span>
          </div>
        </div>

        {/* Post Content */}
        <p className="mt-4 text-gray-700">{postContent}</p>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-start space-x-2">
          <button className="text-blue-500 hover:text-blue-700">Like</button>
          <button className="text-green-500 hover:text-green-700">
            Repost
          </button>
          <button className="text-gray-500 hover:text-gray-700">Comment</button>
        </div>
      </div>
      <div className="border-b-2 my-1 "></div>
    </div>
  );
};

export default ProfileCard;
