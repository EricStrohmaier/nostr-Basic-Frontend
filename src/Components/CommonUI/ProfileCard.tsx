import { FC } from "react";
import ProfileImage from "./ProfileImage";
import FeaturedCard from "./FeaturedCard";

interface ProfileCardProps {
  profilePicUrl: string; // URL of the profile picture
  username: string; // Username or display name
  postContent: string; // Text content of the post
  npub: string; // NIP-05 address of the user
  featuredPost?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  username,
  postContent,
  profilePicUrl,
  npub,
  featuredPost,
}) => {
  return (
    <div className="w-full mx-auto">
      <div className="py-3 px-2 rounded-lg">
        {/* Profile Picture */}

        <div className="flex items-center space-x-4">
          <ProfileImage
            profilePicUrl={`${profilePicUrl}`}
            alt={`${username}'s profile`}
            username={username}
            npub={npub}
          />
        </div>

        {/* Post Content */}
        <p className="mt-2 text-gray-700 mb-4">{postContent}</p>
        {featuredPost && (
          <div className=" border-2 rounded-lg m-2  ">
            <FeaturedCard
              profilePicUrl={`${profilePicUrl}`}
              // alt={"featuredPost.username"}
              username={"featuredPost.username"}
              npub={"featuredPost.npub"}
              postContent={featuredPost}
            />
          </div>
        )}

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
