// export const getColor = (color: string) => {
// 	return `bg-${color}-200`
// }

export const getColor = (color: string) => {
	if (color === "pink") {
		return "bg-pink-200"
	} else if (color === "blue") {
		return "bg-blue-200"
	} else if (color === "green") {
		return "bg-green-200"
	} else if (color === "red") {
		return "bg-red-200"
	}
}
