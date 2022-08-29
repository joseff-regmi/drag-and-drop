type color = "pink" | "blue" | "green" | "red"
export interface dataType {
	id: string
	title: string
	text: string
	color: color
}
export const testData: dataType[] = [
	{ id: "1", title: "Birthday", text: "Happy Birthday", color: "pink" },
	{ id: "2", title: "Marriage", text: "congratulation", color: "blue" },
	{ id: "3", title: "Success Event", text: "We need party !!!", color: "red" },
	{ id: "4", title: "Graduation", text: "Now what next ???", color: "green" },
]
