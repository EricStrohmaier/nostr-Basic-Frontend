import { FC, HTMLProps } from "react";

interface ProfileImageProps extends HTMLProps<HTMLDivElement> {}

const ProfileImage: FC<ProfileImageProps> = ({ className }) => {
  // Combine the default class and any additional class passed as props
  const classes = `w-[58px] h-fit p-2 m-2 ${className || ""}`;

  return (
    <div className={classes}>
      <div className="rounded-full w-12 h-12 bg-gray-400 mx-auto"></div>
    </div>
  );
};

export default ProfileImage;
