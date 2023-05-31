import {useAuthStore} from "@/store/modules/auth";
import useLocalStore from "@/helpers/useLocalStore";

export default function tokenAuth({ next }) {
  const { getFromLocalStore } = useLocalStore();
  const { userIsAuth, loginByToken } = useAuthStore();
  const token = getFromLocalStore({ name: 'auth_secure_token' })
  if(token && !userIsAuth) {
    loginByToken();
  }

  next()
}
