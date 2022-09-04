import { Droppable } from "react-beautiful-dnd";
import { dataType } from "../../../data/testData";
import { DraggableContent } from "./draggable-content";

export const ContentMenu = ({ data }: { data: dataType[] }) => {
	return (
		<>
			<Droppable droppableId="items">
				{(provided) => (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						className=" items w-full  flex-row  flex p-2 overflow-x-scroll no-scrollbar"
					>
						{data.map((datum: dataType, index: number) => {
							const { id, title, text, color } = datum;
							return (
								<DraggableContent
									key={id}
									index={index}
									id={id}
									title={title}
									text={text}
									color={color}
								/>
							);
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</>
	);
};
