import React, { useReducer, useEffect, useRef } from 'react';
import styled from 'styled-components';
import fuzzy from 'fuzzy';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, } from '@fortawesome/free-solid-svg-icons';
import Label from './Label';


const CustomInput = styled(Input.DefaultComponent)`
	flex: 1;
	border: none;
	padding:0;
`;

const List = styled.ul`
  font-family: sans-serif;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
`;
const Div = styled.div`
  border: 1px solid ${p => p.theme.nevada};
  display: flex;
	border-radius: 0.25rem;
	padding:0.5rem 1rem;
 	align-items: center;
 	&:hover,&:focus, &:focus-within {
 		border-color: ${p => p.theme.aqua};
 	}

`;

const Component = styled.div`
  position: relative;
   &:focus, &:focus-within {
     & ${Input.DefaultComponent} {
       opacity: .5;
     }
     & ${Div} {
     
     border-bottom-left-radius: 0;
     border-bottom-right-radius: 0;
     border-bottom-width: 0 ;
     }
   }
  ${List} {
  z-index: 1;
    padding: 0.125rem 0;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    margin: 0;
    text-align: left;
    background: white;
    opacity: 1;
    display: block;
    color: black;
    border: 1px solid ${p => p.theme.aqua};
    border-top-width: 0;
    border-radius: 0 0 .25rem .25rem ;
    list-style: none;
    position: absolute;
    li {
      padding: 0.25rem .5rem;
      margin: 0.25rem .5rem;
      border-radius: .125rem;
    }
    li:hover {
      background: ${p => p.theme.cream};
      cursor: pointer;
    }
    li[aria-disabled]:hover {
    	background: inherit;
    	cursor: default;
    }
  }
  input:hover ~ ${List}, input:focus ~ ${List}, ${List}:hover {
    opacity: 1;
    display: block;
  }
  
  ${Input.DefaultComponent} {
  	position:relative;
  }
  
  ${Input}:after { 
  	content: "*";
  	position: absolute;
  	bottom:0;
  	padding:0.5rem;
  }
`;

const init = initialOptions => ({
	value: '',
	open: false,
	current: null,
	filtered: initialOptions,
	original: initialOptions,
});

const reducer = (state, action) => {
	switch (action.type) {
		case 'change':
			return {
				...state,
				filtered: fuzzy
					.filter(action.payload, state.original, {
						extract: c => c.props.value,
					})
					.map(r => r.original),
				value: action.payload,
			};
		case 'focus':
			return {
				...state,
				open: true,
			};
		case 'blur':
			return {
				...state,
				value:
					state.filtered.length > 0 ?
						state.filtered.includes(action.payload) ?
							action.payload :
							state.filtered[0].props.value
						: '',
				filtered: state.original,
				open: false,
			};
		case 'click':
			return {
				...state,
				open: false,
				current: action.payload,
				filtered: state.original,
			};
		default:
			return state;
	}
};
const Select = ({ children, label, fallback, ...rest }) => {
	const ref = useRef(null)
	const [state, dispatch] = useReducer(
		reducer,
		React.Children.map(children, c => c),
		init,
	);
	const onMouseDown = index => {
		dispatch({ type: 'click', payload: index });
	};
	useEffect(() => {
		if(state.open === true) {
			ref.current.focus()
		}
	}, [state.open])

	return (
		<Component onKeyDown={(e) => {
			console.log(e.key)
			if(e.key === "Enter") {
				ref.current.blur()
			} else if (e.key ==="Escape") {
				ref.current.blur()
			}
		}} onBlur={() => dispatch({ type: 'blur' })}>
			<Label>{label}</Label>
			<Div onClick={() => dispatch({ type: 'focus' })} onFocus={() => dispatch({ type: 'focus' })}>
				{state.open === false && state.current != null ?
					React.createElement(Select.Option, {...state.current.props })
				: <CustomInput
						ref={ref}
						{...rest}
						onChange={e => dispatch({ type: 'change', payload: e.target.value })}
						type="text"
						autoComplete="off"
			/>}
				<FontAwesomeIcon icon={faCaretDown}/>
			</Div>
			{state.open === true && (
				<List>
					{state.filtered.length > 0 ? (
						React.Children.map(state.filtered, (c, i) => {
								if (c.props.value == null) console.warn('value prop  is not set in Select option !!!', c);
								return React.cloneElement(c, { ...c.props, onMouseDown: () => onMouseDown(c) });
							},
						)
					) : (
						<li aria-disabled>{fallback}</li>
					)}
				</List>
			)}
		</Component>
	);
};

const Option = styled.li`
flex:1;
list-style: none;
line-height: 1.5;
`;

Select.Option = Option;

Select.defaultProps = {
	placeholder: "Select an option",
	fallback: "No result found"
}

export default Select;
