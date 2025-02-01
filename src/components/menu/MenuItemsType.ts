import React from "react";

export interface MenuItemsType {
  [key: string]: {
    title: string;
    icon: React.ReactNode;
  };
}