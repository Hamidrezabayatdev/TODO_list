import Select, { MultiValue } from 'react-select';
import { ISelectCategorie } from './ISelectCategories';
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
    console.log(selectedOption);
    setNewTaskInputCategories(selectedOption?.map((option) => option.value) || []);
  }

  return (
    <div>
      <Select isSearchable options={categories} onChange={handleCategries} isMulti className="" placeholder="انتخاب دسته بندی" />
    </div>
  );
};
