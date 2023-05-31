import {useAuthStore} from "@/store/modules/auth";

export default async function checkAdmin({ next }) {
  // const { isAdmin } = useAuthStore();

  // if(!isAdmin) next('/main');
  next();
}
