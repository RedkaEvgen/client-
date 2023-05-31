import {useAuthStore} from "@/store/modules/auth";

export default function checkAuth({ next }) {
  const { userIsAuth } = useAuthStore();

  if(userIsAuth) {
    next({ name: 'Main' });
  }

  next();
}
