export interface ISelectCategorie {
    value: string;
    label: string;
    color?: string;
}
export const categories: ISelectCategorie[] = [
  { value: "Favorite", label: "مورد علاقه" },
  { value: "Work", label: "کاری" },
  { value: "Personal", label: "شخصی" },
];