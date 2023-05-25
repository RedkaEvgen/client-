import {computed, reactive} from "vue";
import {defineStore} from "pinia";
import axios from "@/services/axios";
import useLocalStore from "@/helpers/useLocalStore";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore('auth', () => {
	const state = reactive({
		userData: null
	});

  const { getFromLocalStore } = useLocalStore();

  const secureToken = computed(() => getFromLocalStore({name: 'auth_secure_token'}));

	const user = computed(() => state.userData);
	const userIsAuth = computed(() => Boolean(state.userData));
	const isAdmin = computed(() => {
		if(!state.userData) return false;

		return state.userData.role === 'admin';
	});

	const { setToLocal, deleteFromLocalStore } = useLocalStore();
  const router = useRouter();

	async function singIn ({ email, password }) {
		try{
			const response = await axios.post('/auth/login', { email, password });
			state.userData = response.data;
			setToLocal({name: 'auth_secure_token', value: response?.data?.token});
      await router.push('/main');
		} catch(e) {
			console.error('Помилка Авторизації')
		}
	}

	async function singUp (data) {
		try{
			const response = await axios.post('/auth/register', data )
      console.log("RegisterData", response)
			state.userData = response.data.userData;
      await setToLocal({name: 'auth_secure_token', value: response?.data?.token});
      await router.push('/main');
    } catch(e) {
			console.error('Помилка Реєстрування')
		}
	}
  async function loginByToken() {
    try {
      const response = await axios.get('/auth/me', {
        headers: {
          Authorization: 'Bearer ' + secureToken.value
        }});

      state.userData = response.data;
    } catch(e) {
      console.error('Помилка Авторизації')
    }

  }

	async function logout() {
		state.userData = null;
		deleteFromLocalStore({name: 'auth_secure_token'})
	}

	return {
		user,
		userIsAuth,
		isAdmin,
		singIn,
		singUp,
    loginByToken,
		logout
	}
})


// TEst Data
// email
// 		:
// 		"roshenka@test.us"
// fullName
// 		:
// 		"Петро Порошенко"
// password
// 		:
// 		"12345Root"
