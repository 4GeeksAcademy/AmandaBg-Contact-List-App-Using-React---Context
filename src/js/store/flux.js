const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
					users: [
					]		
		},
		actions: {
					// Use getActions to call a function within a fuction

					//function to get all the initial contacts from the API
					getInicialContacts: () => {
						//get the store
						const store = getStore();
						
						setStore({ users: [{
							name: "Amanda",
							email: "amanda@example.com",
							phone: "87651234",
							address: "Moravia"
						}] });
					},

					//function to add a new contact
					addContact: (newContact) => {
						//get the store
						const store = getStore();
						const contact = store.users.concat(newContact);

						//reset the global store
						setStore({ users: contact });
						
					},

					//function that allows to update contacts
					update: (index, newContact) => {
						const store = getStore();
					console.log(index, newContact)
						const contact = store.users.map((c, i) => {
							if (index == i) {
								c = newContact
							}
							return c
						});

					console.log("test", contact)
						setStore({ users: contact });
					},

					//function that allows to delete an item with to determined index
					delete: (index) => {
						//get the store
						const store = getStore();

						const contact = store.users.filter((c, i) => {
							return index !== i
						});
						console.log(index)

						//reset the global store
						setStore({ users: contact });
					}
		}
	}
}

export default getState;



// exampleFunction: () => {
// 	getActions().changeColor(0, "green");
// },
// loadSomeData: () => {
// 	/**
// 		fetch().then().then(data => setStore({ "foo": data.bar }))
// 	*/
// },
// changeColor: (index, color) => {
// 	//get the store
// 	const store = getStore();

// 	//we have to loop the entire demo array to look for the respective index
// 	//and change its color
// 	const demo = store.demo.map((elm, i) => {
// 		if (i === index) elm.background = color;
// 		return elm;
// 	});

// 	//reset the global store
// 	setStore({ demo: demo });
// }
// }
// }