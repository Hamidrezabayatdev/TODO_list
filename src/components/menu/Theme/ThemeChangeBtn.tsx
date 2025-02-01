export const ThemeChangeBtn = (props: { mode: string; icon: React.ReactNode }) => {
  return (
    <button className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-white rounded-lg">
      {props.icon}
      <p className="text-xl">{props.mode}</p>
    </button>
  );
};
