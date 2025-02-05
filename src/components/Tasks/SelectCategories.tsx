import Select, { MultiValue, StylesConfig } from "react-select";
import { useEffect, useState } from "react";
import { ISelectCategorie } from "./ISelectCategories";

interface SelectCategoriesProps {
  setNewTaskInputCategories: (categories: string[]) => void;
}

export const SelectCategories = ({ setNewTaskInputCategories }: SelectCategoriesProps) => {
  const categories: ISelectCategorie[] = [
    { value: "Favorite", label: "مورد علاقه", color: "gold" },
    { value: "Work", label: "کاری", color: "blue" },
    { value: "Personal", label: "شخصی", color: "green" },
  ];

  function handleCategries(selectedOption: MultiValue<ISelectCategorie> | null) {
    setNewTaskInputCategories(selectedOption?.map((option) => option.value) || []);
  }

  // Detect if dark mode is enabled and update when class changes
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  // Custom styles with Tailwind colors
  const customStyles: StylesConfig<ISelectCategorie, true> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: isDarkMode ? "#27272a" : "#ffffff", // Dark gray in dark mode, white in light mode
      border: "none",
      color: isDarkMode ? "#fafafa" : "#3f3f46",
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: isDarkMode ? "#27272a" : "#ffffff",
      color: isDarkMode ? "#fafafa" : "#3f3f46",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected
        ? isDarkMode
          ? "black" // Darker blue in dark mode
          : "#ffffff" // Normal blue in light mode
        : isFocused
        ? isDarkMode
          ? "#3f3f46"
          : "#e4e4e7"
        : isDarkMode
        ? "#27272a"
        : "#ffffff",
      color: isDarkMode ? "#e4e4e7" : "#3f3f46",
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: isDarkMode ? "#3f3f46" : "#f4f4f5",
      color: isDarkMode ? "#fafafa" : "#3f3f46",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: isDarkMode ? "#fafafa" : "#3f3f46",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: isDarkMode ? "#fafafa" : "#3f3f46",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
  };

  return (
    <div>
      <Select isSearchable options={categories} onChange={handleCategries} isMulti placeholder="انتخاب دسته بندی" styles={customStyles} className="w-full" />
    </div>
  );
};
