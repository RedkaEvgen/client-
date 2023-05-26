import {useProductsStore} from "@/store/modules/products";

export default async function loadProducts({ next }) {
  const { getAllProducts } = useProductsStore();

  getAllProducts()

	return next();
}
