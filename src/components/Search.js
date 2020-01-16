import React, {useState} from 'react'
import fuzzy from 'fuzzy'
import styled from 'styled-components'

import Input from './Input'
import DropDown from './DropDown';

const SearchInput = styled(Input).attrs(() => ({type: 'text'}))`
	background: transparent;
	border: none;
	font-weight: normal;

`

const Search = ({options, placeholder}) => {
	const [search, setSearch] = useState('')
	const results = fuzzy.filter(search, options)

	return options ? (
		<>
			<SearchInput
				type="text"
				id="mySearchInput"
				value={search}
				placeholder={placeholder}
				onChange={e => setSearch(e.target.value)}
			/>
			{results.map((o, i) => {
				console.log(o)
				return (
					<DropDown.ListItem value={o.original} key={i}>
						{o.string}
					</DropDown.ListItem>
				)})}
		</>
	) : null
}
export default Search

