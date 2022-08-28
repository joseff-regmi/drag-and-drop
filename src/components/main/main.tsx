import { ContentDisplay } from "./content-display"
import { ContentMenu } from "./content-menu"
import { testData } from "../../data/testData"

export const Main = () => {
	return (
		<>
			<div className='container w-full h-screen p-5 bg-gray-100'>
				<div className='flex h-full w-full'>
					<div className='flex grow shadow-xl rounded-md bg-white'>
						<ContentMenu testData={testData} />
					</div>
					<div className='flex ml-10 shadow-xl w-3/4 rounded-md bg-white'>
						<ContentDisplay testData={testData} />
					</div>
				</div>
			</div>
		</>
	)
}
