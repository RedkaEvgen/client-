import {useAuthStore} from "@/store/modules/auth";

export default async function loadProducts({ router, next }) {
  const { isAdmin } = useAuthStore();

  if(!isAdmin) router.push('/')

	return next();
}
