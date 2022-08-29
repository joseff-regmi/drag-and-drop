import { getColor } from "../../../utils/getColor"
import { dataType } from "../../../../data/testData"

interface dataTypes extends dataType {
	index: number
}

export const SingleContent = ({ id, color, title, index, text }: dataTypes) => {
	return (
		<>
			<div
				key={id}
				className={`shadow-lg ${getColor(
					color,
				)} h-98 border-2 border-px solid mt-5 rounded-md p-5`}
			>
				<span>{index + 1}.</span>
				<span>{title}</span>
				<div className='flex text-6xl w-full h-full items-center justify-center'>
					{text}
				</div>
			</div>
		</>
	)
}
