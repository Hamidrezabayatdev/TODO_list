export interface ISelectCategorie {
    value: string;
    label: string;
    color?: string;
}
export const categories: ISelectCategorie[] = [
  { value: "favorite", label: "مورد علاقه" },
  { value: "work", label: "کاری" },
  { value: "personal", label: "شخصی" },
];