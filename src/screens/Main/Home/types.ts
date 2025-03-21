export interface MiniProductsProps {
  item: {
    id: number;
    image: any;
    title: string;
    description: string;
    category: string;
    rating: {
      rate: number;
    };
  };
}
