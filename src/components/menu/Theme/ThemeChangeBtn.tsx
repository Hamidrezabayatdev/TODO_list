export const ThemeChangeBtn = (props: { mode: string; icon: React.ReactNode, isDark: boolean}) => {
  // function handleThemeBtn() {
  //   if (props.mode === "dark") {
  //     if 
  // }
  return (
    <button className={`flex items-center justify-center gap-2 w-full py-2 px-4 ${props.isDark && props.mode === "dark" ? "bg-zinc-800" : !props.isDark && props.mode === "light" ? "bg-zinc-100" : props.isDark && props.mode === "light" ? "" : ""} rounded-lg`}>
      {props.icon}
      <p className="text-xl">{props.mode === "dark" ? "تاریک" : "روشن"}</p>
    </button>
  );
};
