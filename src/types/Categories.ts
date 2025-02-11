export interface ISelectCategorie {
  value: string;
  label: string;
}
export const categories: ISelectCategorie[] = [
  { value: "favorite", label: "مورد علاقه" },
  { value: "work", label: "کاری" },
  { value: "personal", label: "شخصی" },
  {value: "money", label:"مالی"}
];
