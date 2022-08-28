import { getColor } from "../../utils/getColor"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { testDataType } from "../../../data/testData"

export const ContentMenu = ({ testData }: { testData: testDataType[] }) => {
	return (
		<>
			<Droppable droppableId='items'>
				{(provided) => (
					<div
						className=' items w-full p-2 overflow-scroll no-scrollbar'
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{testData.map((data: testDataType, index: number) => {
							const { id, title, text, color } = data
							return (
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
							)
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</>
	)
}
