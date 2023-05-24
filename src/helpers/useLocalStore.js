function useLocalStore ()  {

	const setToLocal =({ name, value }) =>  {
		console.log("Set", name, value)
		localStorage.setItem(name, value);
	};

	const getFromLocalStore = ({ name }) =>  localStorage.getItem(name);;


	const deleteFromLocalStore = ({ name }) => {
		localStorage.removeItem(name);
	}

	return  {
		setToLocal,
		getFromLocalStore,
		deleteFromLocalStore
	}
}

export default useLocalStore
