import React from 'react'

interface MenuItemProps {
  selected: boolean;
  text: string;
  icon: React.ReactNode;
}
export const MenuItem: React.FC<MenuItemProps> = ({ selected, text, icon }: MenuItemProps) => {
  return (
    <div className={`flex items-center gap-4 p-2 pr-5 mx-3 rounded-xl cursor-pointer ${selected ? "bg-zinc-100 dark:bg-zinc-700" : ""} hover:bg-zinc-100 dark:hover:bg-zinc-700 active:bg-zinc-300 dark:active:bg-zinc-600 transition-all`}>
      <div className="w-8 h-8">{icon}</div>
      <div className="text-xl">{text}</div>
    </div>
  );
};
