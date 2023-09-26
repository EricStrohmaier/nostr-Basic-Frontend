import { FC, HTMLProps } from "react";

interface ProfileImageProps extends HTMLProps<HTMLDivElement> {
  profilePicUrl: string;
  username: string;
}

const ProfileImage: FC<ProfileImageProps> = ({
  className,
  profilePicUrl,
  username,
}) => {
  // Combine the default class and any additional class passed as props
  const classes = `w-12 h-fit  ${className || ""}`;

  return (
    <div className={classes}>
      <div className="rounded-full w-12 h-12 bg-gray-400">
        <img
          src={profilePicUrl}
          alt={`${username}'s profile`}
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
