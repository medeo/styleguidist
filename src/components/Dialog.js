import React, { useContext, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom'
import { useOnClickOutsideBoundingBox } from '../hooks';
import styled from 'styled-components';
import Button from './Button';

export const DialogContext = React.createContext();

export const DialogProvider = ({ children }) => {
	const state = useState(null);
	return <DialogContext.Provider value={state}>{typeof children === 'function' ? c => children(c) : children}</DialogContext.Provider>;
};

export const Main = styled.main`
	padding: 1rem;
	min-height: 10rem;
`;

export const Footer = styled.footer`
	background: ${p => p.theme.alabaster};
	padding: 1rem;
	display: flex;
	justify-content: flex-end;
`;

const Component = styled.dialog`
	padding: 0;
	border: none;
	background: ${p => p.theme.white};
	border-radius: 0.5rem;
	box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
	width: 50%;
	min-width: 30rem;
	position: fixed;
	top: 33%;
	transform: translateY(-50%);
	::backdrop {
		pointer-events: none;
	}
	${Footer} {
	}
`;

const Dialog = ({ dismissable, modal, children, ...rest }) => {
	const ref = useRef(null);
	const [, setDialog] = useContext(DialogContext);
	useEffect(() => {
		setDialog({ ref, modal });
	}, [ref, modal, setDialog]);

	useOnClickOutsideBoundingBox(ref, () => {
		if(dismissable === false) return
		if (!ref.current || ref.current.open === true) {
			ref.current.close('dismiss');
		}
	});
	console.log(ref.current)
	return createPortal(
		<Component ref={ref} {...rest}>
			{children}
		</Component>, document.getElementById('modal')
	);
};

const toggleDialog = (dialog, returnValue) => {
	if (!dialog.ref.current) return;
	if (dialog.ref.current.open === true) {
		dialog.ref.current.close(returnValue);
	} else {
		if (dialog.modal === true) {
			dialog.ref.current.showModal();
		} else {
			dialog.ref.current.show();
		}
	}
};

export const ToggleButton = ({ children, value, ...rest }) => {
	const [dialog] = useContext(DialogContext);
	return (
		<Button onClick={() => toggleDialog(dialog, value)} {...rest}>
			{children}
		</Button>
	);
};

ToggleButton.defaultProps = {
	value: undefined,
};

Dialog.defaultProps = {
	modal: true,
	dismissable: true
};

Dialog.Footer = Footer;
Dialog.Main = Main;
Dialog.ToggleButton = ToggleButton;

export default Dialog;
