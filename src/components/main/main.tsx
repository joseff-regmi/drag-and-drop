import { useState } from "react"
import { ContentDisplay } from "./content-display"
import { ContentMenu } from "./content-menu"
import { testData } from "../../data/testData"
import { DragDropContext } from "react-beautiful-dnd"

export const Main = () => {
	const [indexes, setIndexes] = useState(testData)
	const onDropEndHandler = (results: any) => {
		if (!results.destination) {
			return
		}
		const newIndexes = Array.from(indexes)
		const [indexRecords] = newIndexes.splice(results.source.index, 1)
		newIndexes.splice(results.destination.index, 0, indexRecords)
		setIndexes(newIndexes)
	}
	return (
		<>
			<div className='container mx-auto w-full h-screen p-5 bg-gray-100'>
				<div className='flex h-full w-full'>
					<DragDropContext onDragEnd={onDropEndHandler}>
						<div className='flex grow shadow-xl rounded-md bg-white'>
							<ContentMenu testData={indexes} />
						</div>
						<div className='flex ml-10 shadow-xl w-3/4 rounded-md bg-white'>
							<ContentDisplay testData={indexes} />
						</div>
					</DragDropContext>
				</div>
			</div>
		</>
	)
}
