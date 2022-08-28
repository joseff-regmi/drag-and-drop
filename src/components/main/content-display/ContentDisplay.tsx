import { getColor } from "../../utils/getColor"

export const ContentDisplay = ({ testData }: any) => {
	return (
		<>
			<div className='h-full overflow-scroll w-full p-5 no-scrollbar'>
				{testData.map((data: any, index: number) => {
					return (
						<div
							key={data.id}
							className={`shadow-lg ${getColor(
								data.color,
							)} h-98 border-2 border-px solid mt-5 rounded-md p-5`}
						>
							<span>{data.id}.</span>
							<span>{data.title}</span>
							<div className='flex text-4xl w-full h-full items-center justify-center'>
								{data.text}
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
