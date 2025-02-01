import React from 'react'

interface MenuItemProps {
  text: string;
  icon: React.ReactNode;
}
export const MenuItem: React.FC<MenuItemProps> = ({text, icon}) => {
  return (
    <div className="flex items-center gap-4 p-2 pr-5 mx-3 text-zinc-700 dark:text-zinc-100 rounded-xl">
      <div className='w-8 h-8'>{icon}</div>
      <div className='text-xl font-[Yekan]'>{text}</div>
    </div>
  );
};
