import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Component = styled.div`
	font-family: 'Inter', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TabName = styled.li`
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

const TabBar = styled.ul`
	width: 100%;
	height: 3rem;
	font-family: 'Inter', sans-serif;
	background: none;
	display: flex;
	flex-direction: row;
	margin: 0;
	padding: 0;
	justify-content: ${p => p.position};
	align-items: center;
	& > ${TabName}:not(:last-child) {
		margin-right: 2rem;
	}
`;

TabName.defaultProps = {
	color: 'aqua',
};

TabName.propTypes = {
	/**
	 * the color theme for the border bottom
	 */
	color: PropTypes.oneOf(['aqua', 'ocean', 'scarlett', 'emerald', 'mustard', 'gray', 'white']),
};
const TabContent = styled.div`
	display: block;
	width: ${p => p.width};
`;

const Tab = ({ label, activeTab, onClickTabItem, index, color, size, space, bold }) => {
	let tabFocused = false;
	if (activeTab === index) tabFocused = true;
	return (
		<TabName
			bold={bold}
			space={space}
			size={size}
			color={color}
			tabFocused={tabFocused}
			onClick={onClickTabItem}
		>
			{label}
		</TabName>
	);
};

const Tabs = ({ children, color, size, border, position, width, space, bold }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.index);
	return (
		<Component>
			<TabBar border={border} space={space} position={position}>
				{children.map(child => {
					const { index, label } = child.props;
					return (
						<Tab
							bold={bold}
							space={space}
							size={size}
							color={color}
							label={label}
							key={index}
							index={index}
							activeTab={activeTab}
							onClickTabItem={() => setActiveTab(index)}
						/>
					);
				})}
			</TabBar>
			{children.map(child => {
				const { index } = child.props;
				if (index !== activeTab) return undefined;
				return (
					<TabContent key={index + 1} width={width}>
						{child.props.children}
					</TabContent>
				);
			})}
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
	width: 'auto',
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
	 * width of the children of the tab
	 */
	width: PropTypes.any,
};

export default Tabs;
