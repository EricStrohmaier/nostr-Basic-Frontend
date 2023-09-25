import { FC } from "react";

interface ProfileCardProps {
  profilePicUrl: string; // URL of the profile picture
  username: string; // Username or display name
  postContent: string; // Text content of the post
}

const ProfileCard: FC<ProfileCardProps> = ({
  profilePicUrl,
  username,
  postContent,
}) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-4 rounded-lg">
      {/* Profile Picture */}
      <div className="flex items-center space-x-4">
        <img
          src={profilePicUrl}
          alt={`${username}'s profile`}
          className="w-12 h-12 rounded-full"
        />
        <span className="text-xl font-semibold">{username}</span>
      </div>

      {/* Post Content */}
      <p className="mt-4 text-gray-700">{postContent}</p>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-between">
        <button className="text-blue-500 hover:text-blue-700">Like</button>
        <button className="text-green-500 hover:text-green-700">Repost</button>
        <button className="text-gray-500 hover:text-gray-700">Comment</button>
      </div>
    </div>
  );
};

export default ProfileCard;
