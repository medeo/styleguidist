import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Component = styled.div`
	width: 100%;
	margin: 0 1rem;
	font-family: 'Inter', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TabBar = styled.ul`
	width: 100%;
	height: 3rem;
	font-family: 'Inter', sans-serif;
	background: none;
	display: flex;
	flex-direction: row
	justify-content: center;
	align-items: center;
`;

const TabName = styled.li`
	padding: 0.5rem 0;
	margin: 0 1rem;
	border-bottom-width: ${props => (props.tabFocused ? '2px' : '0px')};
	border-bottom-color: ${p => p.theme[p.color]};
	border-bottom-style: solid;
	font-weight: ${props => (props.tabFocused ? props.theme.bold : props.theme.lighter)};
	list-style: none;
	&:hover {
		cursor: pointer;
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

const TabContent = styled.div``;

const Tab = ({ label, activeTab, onClickTabItem, color }) => {
	let tabFocused = false;

	if (activeTab === label) tabFocused = true;

	return (
		<TabName color={color} tabFocused={tabFocused} onClick={() => onClickTabItem(label)}>
			{label}
		</TabName>
	);
};

const Tabs = ({ children, color }) => {
	const [activeTab, setActiveTab] = useState(children[0].props.label);

	return (
		<Component>
			<TabBar>
				{children.map(child => {
					const { label } = child.props;
					return (
						<Tab
							color={color}
							label={label}
							key={label}
							activeTab={activeTab}
							onClickTabItem={label => setActiveTab(label)}
						/>
					);
				})}
			</TabBar>
			<TabContent>
				{children.map(child => {
					const { label } = child.props;
					if (label !== activeTab) return undefined;
					return child.props.children;
				})}
			</TabContent>
		</Component>
	);
};

export default Tabs;
