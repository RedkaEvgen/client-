import {useAuthStore} from "@/store/modules/auth";

export default async function checkAuth({ router, next }) {
  const { userIsAuth } = useAuthStore();

  if(userIsAuth) {
    router.push({ name: 'Main' });
  }

  return next();
}
