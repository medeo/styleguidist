import React, { useReducer, useEffect, useRef } from 'react';
import styled, {css} from 'styled-components';
import fuzzy from 'fuzzy';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, } from '@fortawesome/free-solid-svg-icons';
import Label from './Label';

const Hidden = styled.input`
	display: none;
`


const CustomInput = styled(Input.DefaultComponent)`
	flex: 1;
	border: none;
	padding:0;
`;

const Option = styled.li`
flex:1;
list-style: none;
line-height: 1.5;
${p => p.active === true && css`background: ${p.theme.cream}`}
`

const List = styled.ul`
  font-family: sans-serif;
  text-align: center;
  box-sizing: border-box;
  max-height: 10rem;
  overflow: scroll;
  width: 100%;
`;
const Div = styled.div`
  display: flex;
	border-radius: 0.25rem;
	${p => p.readOnly ? css`
			padding:0.5rem 0;
` : css`  border: 1px solid ${p => p.theme.nevada};
	padding:0.5rem 1rem;`};
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
    ${Option} {
      padding: 0.25rem .5rem;
      margin: 0.25rem .5rem;
      border-radius: .125rem;
    }
    
    
    ${Option}:hover {
      background: ${p => p.theme.cream};
      cursor: pointer;
    }
    ${Option}[aria-disabled]:hover {
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

const init = ({ value, original}) => ({
	value: value || '',
	open: false,
	current: null,
	index: null,
	filtered: original,
	original: original,
});

const reducer = (state, action) => {
	switch (action.type) {
		case 'up':
			return {
				...state,
				index: state.index > 0 ? state.index- 1 : null
			}
		case 'down':
			return {
				...state,
				index: state.index === null ? 0 : state.index < state.filtered.length - 1? state.index+1 : state.index
			}
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
			const isValueIncluded = state.filtered.map(o => o.value).includes(state.value)
			return {
				...state,
				current:
				state.index != null ? state.filtered[state.index] :
				state.value === "" ? null :
					state.filtered.length > 0 ?
						isValueIncluded === true ? state.filtered.find(o => o.value === state.value)  :
							state.filtered[0]
						: null,
				value: "",
				filtered: state.original,
				open: false,
				index: null
			};
		case 'click':
			return {
				...state,
				open: false,
				value: "",
				current: action.payload,
				filtered: state.original,
			};
		default:
			return state;
	}
};
const Select = ({ children, label, placeholder, onChange, fallback, name, readOnly, value,  defaultValue, ...rest }) => {
	const ref = useRef(null)
	const hidden = useRef(null)
	const [state, dispatch] = useReducer(
		reducer,
		{original: React.Children.map(children, c => c), value: value || defaultValue},

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

	useEffect(() => {
		if(hidden.current == null || state.current == null) {
			return
		}
		const triggerChange = Object.getOwnPropertyDescriptor(
			HTMLInputElement.prototype,
			"value"
		).set;
		const event = new Event("change", { bubbles: true, cancelable: true });
		triggerChange.call(hidden.current, state.current.props.value);
		hidden.current.dispatchEvent(event);
	}, [state.current, hidden.current])

	return (
		<Component readOnly={readOnly} onKeyDown={(e) => {
			if(e.key === "Enter") {
				dispatch({type: 'enter' })
				ref.current.blur()
			} else if (e.key ==="Escape") {
				ref.current.blur()
			} else if (e.key === "ArrowDown") {
				dispatch({type: 'down' })
			} else if (e.key === "ArrowUp") {
				dispatch({type: 'up' })
			}
		}} onBlur={() => dispatch({ type: 'blur' })}>
			<Hidden ref={hidden} type="text" name={name} defaultValue={defaultValue} onChange={onChange}/>
			<Label>{label}</Label>
			<Div readOnly={readOnly} onClick={() => dispatch({ type: 'focus' })} onFocus={() => dispatch({ type: 'focus' })}>
				{state.open === false && state.current != null ?
					React.createElement(Select.Option, {...state.current.props })
				: <CustomInput
						ref={ref}
						{...rest}
						onChange={e => dispatch({ type: 'change', payload: e.target.value })}
						value={state.value}
						type="text"
						autoComplete="off"
						placeholder={readOnly === true ? state.value !== "" ? state.value :  '–': placeholder}
						readOnly={readOnly}
			/>}
				{readOnly===false && <FontAwesomeIcon icon={faCaretDown}/>}
			</Div>
			{state.open === true && readOnly === false && (
				<List>
					{state.filtered.length > 0 ? (
						React.Children.map(state.filtered, (c, i) => {
								if (c.props.value == null) console.warn('value prop  is not set in Select option !!!', c);
								return React.cloneElement(c, { ...c.props, active: state.index === i, onMouseDown: () => onMouseDown(c) });
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


Select.Option = Option
Select.defaultProps = {
	readOnly: false,
	placeholder: "Select an option",
	fallback: "No result found"
}

export default Select;
