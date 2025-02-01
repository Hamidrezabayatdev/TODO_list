import React from "react";
interface ProfileProps {
  name: string;
  photo: string;
  date: string;
}
export const Profile: React.FC<ProfileProps> = ({ name, photo, date }) => {
  return (
    <div>
      <div className="flex items-center gap-4 mt-16 mb-14 pr-2 mx-3 text-zinc-900">
        <img src={photo} className="w-24 h-24 rounded-full"/>
        <div className="flex flex-col">
          <div className="text-xl font-[Yekan] font-bold">{name}</div>
          <div className="text-xl font-[Yekan] font-bold">{date}</div>
        </div>
      </div>
    </div>
  );
};
