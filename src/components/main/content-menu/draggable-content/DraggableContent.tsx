import { Draggable } from "react-beautiful-dnd"
import { dataType } from "../../../../data/testData"
import { getColor } from "../../../utils/getColor"

interface dataTypes extends dataType {
	index: number
}

export const DraggableContent = ({
	id,
	title,
	text,
	color,
	index,
}: dataTypes) => {
	return (
		<>
			<Draggable draggableId={id} key={id} index={index}>
				{(dragged) => (
					<div
						{...dragged.draggableProps}
						{...dragged.dragHandleProps}
						ref={dragged.innerRef}
						className={`p-2 ${getColor(
							color,
						)} h-52 rounded-md mt-9 border border-solid border-gray-200 shadow-xl`}
					>
						<span>{index + 1}.</span>
						<span>{title}</span>
						<div className='w-full text-2xl h-full flex items-center justify-center pb-5'>
							{text}
						</div>
					</div>
				)}
			</Draggable>
		</>
	)
}
