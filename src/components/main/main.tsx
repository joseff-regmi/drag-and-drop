import { useState } from "react";
import { ContentDisplay } from "./content-display";
import { ContentMenu } from "./content-menu";
import { testData as data } from "../../data/testData";
import { DragDropContext } from "react-beautiful-dnd";

export const Main = () => {
	const [indexes, setIndexes] = useState(data);
	const onDropEndHandler = (results: any) => {
		console.log(results, "results");
		if (!results.destination) {
			return;
		}
		console.log(indexes, "indexes");
		const newIndexes = Array.from(indexes);
		console.log(newIndexes, "newIndexes");
		const [indexRecords] = newIndexes.splice(results.source.index, 1);
		console.log(indexRecords, " Index records");

		newIndexes.splice(results.destination.index, 0, indexRecords);
		setIndexes(newIndexes);
	};
	return (
		<>
			<div className="container mx-auto w-full h-screen p-5 bg-gray-100">
				<div className="flex flex-col h-full w-full">
					<DragDropContext onDragEnd={onDropEndHandler}>
						<div className="flex grow shadow-xl rounded-md bg-white">
							<ContentMenu data={indexes} />
						</div>
						<div className="flex mt-10 w-full shadow-xl rounded-md bg-white">
							<ContentDisplay data={indexes} />
						</div>
					</DragDropContext>
				</div>
			</div>
		</>
	);
};
