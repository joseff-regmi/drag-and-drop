import { dataType } from "../../../data/testData"
import { SingleContent } from "./single-content"

export const ContentDisplay = ({ data }: { data: dataType[] }) => {
	return (
		<>
			<div className='h-full overflow-scroll w-full p-5 no-scrollbar'>
				{data.map((datum: dataType, index: number) => {
					const { id, title, text, color } = datum
					return (
						<SingleContent
							key={id}
							index={index}
							id={id}
							title={title}
							text={text}
							color={color}
						/>
					)
				})}
			</div>
		</>
	)
}
