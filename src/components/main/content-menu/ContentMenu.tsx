import { getColor } from "../../utils/getColor"

export const ContentMenu = ({ testData }: any) => {
	console.log(getColor("white"))

	return (
		<>
			<div className='w-full p-2 overflow-scroll no-scrollbar'>
				{testData.map((data: any, index: number) => {
					return (
						<div
							key={data.id}
							className={`p-2 ${getColor(
								data.color,
							)} h-52 rounded-md mt-9 border border-solid border-gray-200 shadow-xl`}
						>
							<span>{data.id}.</span>
							<span>{data.title}</span>
							<div>{data.text}</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
