import {useAuthStore} from "@/store/modules/auth";
import useLocalStore from "@/helpers/useLocalStore";

export default async function tokenAuth({ next }) {
  const { getFromLocalStore } = useLocalStore();
  const { loginByToken } = useAuthStore();
  const token = getFromLocalStore({ name: 'auth_secure_token' })
  if(token) {
    await loginByToken();
  }

  next()
}
