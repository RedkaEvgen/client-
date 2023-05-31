import {useProductsStore} from "@/store/modules/products";

export default function loadProducts({ next }) {
  const { getAllProducts } = useProductsStore();
  getAllProducts();
  next()
}
