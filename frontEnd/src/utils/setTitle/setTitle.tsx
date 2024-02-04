export const setTitle = (title: string) => {
	if (title) {
		document.title = `${title} | Eco-Music`
	} else {
		document.title = 'Eco-Music'
	}
}
