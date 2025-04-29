export interface TabBarProps {
  data: itemProp[];
  selectedTab: itemProp;
  setSelectedTab: (item: itemProp) => void;
}

export interface itemProp {
  id: number;
  title: string;
}
