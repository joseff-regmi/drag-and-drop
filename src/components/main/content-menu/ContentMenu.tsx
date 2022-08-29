import { Droppable } from "react-beautiful-dnd"
import { dataType } from "../../../data/testData"
import { DraggableContent } from "./draggable-content"

export const ContentMenu = ({ data }: { data: dataType[] }) => {
	return (
		<>
			<Droppable droppableId='items'>
				{(provided) => (
					<div
						className=' items w-full p-2 overflow-scroll no-scrollbar'
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{data.map((datum: dataType, index: number) => {
							const { id, title, text, color } = datum
							return (
								<DraggableContent
									key={id}
									index={index}
									id={id}
									title={title}
									text={text}
									color={color}
								/>
							)
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</>
	)
}
