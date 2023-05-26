import {useAuthStore} from "@/store/modules/auth";

export default async function checkAdmin({ router, next }) {
  const { isAdmin } = useAuthStore();

  if(!isAdmin) router.push('/');
	return next();
}
