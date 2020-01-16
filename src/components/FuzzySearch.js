import React from 'react'
import styled from 'styled-components'

import Input from './Input'

const SearchInput = styled(Input)`
`

const FuzzySearch = ({placeholder, list, id, children}) => {
	return (
		<>
			<SearchInput list={list} id={id} name={id} placeholder={placeholder} />
			<datalist id={list}>
				{children}
			</datalist>
			</>
			)
}

export default FuzzySearch
