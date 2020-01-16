import React, {useState, useEffect} from 'react'
import Input from './Input'
import DropDown from './DropDown';

const Search = ({options}) => {
	const [searchInput, setSearchInput] = useState('')
	const [optionState, setOptionState] = useState(options)

	// useEffect(() => {
	//
	// }, [])
	console.log(searchInput, 'STATE')
	console.log(options, 'OPTIONS')
	const searchHandler = () => {
		const filteredOption = optionState.filter(o => o.text.toLowerCase() === searchInput.toLowerCase())


		// const option = optionState

		// console.log(option, 'OPTION')
		// for (let i = 0; i < option.length; i++) {
		// 	const txtValue = option[i].text
		//
		// 	if (txtValue.toUpperCase().indexOf(searchInput.toUpperCase()) > -1) {
		// 		console.log('if')
		// 		option[i].text
		// 	} else {
		// 		console.log('else')
		// 		option[i].text
		// 	}
		// }
		if (filteredOption.length > 0) {
			console.log('inside', filteredOption)
			setOptionState(filteredOption)
		} else {
			setOptionState(options)
		}
		console.log(filteredOption, 'FILTERED OPTION')
	}

	return optionState ? (
		<div id="myDropdownMenu">
			<Input
				type="text"
				placeholder="Search..."
				id="mySearchInput"
				value={searchInput} onChange={e => setSearchInput(e.target.value)}
				onKeyUp={searchHandler} />
			{optionState.map((option, i) => (
				<DropDown.ListItem value="code" key={i}>
					{option.text}
				</DropDown.ListItem>
			))}
		</div>
	) : null
}

export default Search
