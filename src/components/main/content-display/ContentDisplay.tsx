import { getColor } from "../../utils/getColor"

export const ContentDisplay = ({ testData }: any) => {
	return (
		<>
			<div className='h-full overflow-scroll w-full p-5 no-scrollbar'>
				{testData.map((data: any, index: number) => {
					const { id, title, text, color } = data
					return (
						<div
							key={id}
							className={`shadow-lg ${getColor(
								color,
							)} h-98 border-2 border-px solid mt-5 rounded-md p-5`}
						>
							<span>{index + 1}.</span>
							<span>{title}</span>
							<div className='flex text-4xl w-full h-full items-center justify-center'>
								{text}
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
