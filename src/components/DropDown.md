### DropDown

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import List from './List';
dom.watch();

<div style={{ display: 'flex', height: '10rem' }}>
	<DropDown
		variant="dropDown"
		color="darkCream"
		backgroundList="white"
		backgroundColor="white"
		role="button"
		tabIndex="1"
		style={{ marginRight: '1rem', height: '2.5rem', width: '18.75rem' }}
	>
		<span>Text</span>
		<FontAwesomeIcon className="iconChevron" icon={faChevronDown} />
		<List items={['text', 'text', 'text']}>
			{(item, i) => (
				<li style={{ height: '2.5rem' }} key={i} role="button">
					{item}
				</li>
			)}
		</List>
	</DropDown>
	<DropDown
		variant="dropDown"
		color="darkCream"
		backgroundList="black"
		backgroundColor="black"
		role="button"
		tabIndex="1"
		style={{ marginRight: '1rem', height: '2.5rem', width: '18.75rem' }}
	>
		<span>Text</span>
		<FontAwesomeIcon className="iconChevron" icon={faChevronDown} />
		<List items={['text', 'text', 'text']}>
			{(item, i) => (
				<li style={{ height: '2.5rem' }} key={i} role="button">
					{item}
				</li>
			)}
		</List>
	</DropDown>
</div>;
```

### DropSide

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import List from './List';
dom.watch();
<div style={{ height: '4rem' }}>
	<DropDown variant="dropSide" role="button" tabIndex="1">
		<FontAwesomeIcon className="iconEllipsisV" icon={faEllipsisV} />
		<List items={['Text', 'Text']}>
			{(item, i) => (
				<li key={i} role="button">
					{item}
				</li>
			)}
		</List>
	</DropDown>
</div>;
```
