import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Component = styled.div`
	width: 100%;
	margin: 0 1rem;
	font-family: 'Inter', sans-serif;
	display: flex;
	flex-direction: column;
`;

const TabBar = styled.ul`
	width: auto
	height: ${p => (p.space === 'large' ? '4rem' : p.space === 'small' ? '2rem' : '3rem')};
	font-family: 'Inter', sans-serif;
	background: none;
	display: flex;
	flex-direction: row;
	justify-content: ${p => p.position};
	border-bottom-style: ${props => (props.border ? 'solid' : 'none')};
	border-bottom-color: ${p => p.theme.gray};
	border-bottom-width: ${props => (props.border ? '1px' : 'none')};
`;

const TabName = styled.li`
	padding: 0.5rem 0;
	margin: ${p => (p.space === 'large' ? '0 1.5rem' : p.space === 'small' ? '0 0.5rem' : '0 1rem')};
	border-bottom-width: ${props => (props.tabFocused ? '2px' : '0px')};
	border-bottom-color: ${p => p.theme[p.color]};
	font-size: ${p => p.theme[p.size]};
	border-bottom-style: solid;
	font-weight: ${props =>
		props.tabFocused
			? !props.bold
				? props.theme.lighter
				: props.theme.bold
			: props.theme.lighter};
	list-style: none;
	&:hover {
		cursor: pointer;
	}
`;

const TabContent = styled.div`
	display: flex;
	justify-content: ${p => p.position};
`;

const Tab = ({ label, activeTab, onClickTabItem, color, size, space, bold }) => {
	let tabFocused = false;

	if (activeTab === label) tabFocused = true;

	return (
		<TabName
			bold={bold}
			space={space}
			size={size}
			color={color}
			tabFocused={tabFocused}
			onClick={() => onClickTabItem(label)}
		>
			{label}
		</TabName>
	);
};

const Tabs = ({ children, color, size, border, position, space, bold }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);
	return (
		<Component>
			<TabBar border={border} space={space} position={position}>
				{children.map(child => {
					const { label } = child.props;
					return (
						<Tab
							bold={bold}
							space={space}
							size={size}
							color={color}
							label={label}
							key={label}
							activeTab={activeTab}
							onClickTabItem={label => setActiveTab(label)}
						/>
					);
				})}
			</TabBar>
			<TabContent position={position}>
				{children.map(child => {
					const { label } = child.props;
					if (label !== activeTab) return undefined;
					return child.props.children;
				})}
			</TabContent>
		</Component>
	);
};

TabName.defaultProps = {
	color: 'aqua',
	size: 'medium',
	space: 'medium',
	bold: true,
};

TabBar.defaultProps = {
	border: false,
	space: 'medium',
	position: 'center',
};

TabContent.defaultProps = {
	position: 'center',
};

TabName.propTypes = {
	/**
	 * the color theme for the border bottom
	 */
	color: PropTypes.oneOf(['aqua', 'ocean', 'scarlett', 'emerald', 'mustard', 'gray', 'white']),

	/**
	 * The size of the button. It defines the font-size of the button.
	 * @see See [font-size property](https://www.w3schools.com/cssref/pr_font_font-size.asp)
	 */
	size: PropTypes.oneOf(['smaller', 'small', 'medium', 'large', 'larger']),
};

TabContent.propTypes = {
	/**
	 * the position of the tab
	 */
	position: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
};

export default Tabs;
