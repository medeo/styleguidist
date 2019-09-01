### DropDown

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import List from './List';
dom.watch();

<div style={{ display: 'flex' }}>
	<DropDown
		variant="dropDown"
		color="darkCream"
		role="button"
	> 
		<DropDown.Toggle>Dropdown input</DropDown.Toggle>
		<DropDown.Menu>
				<DropDown.ListItem>
					Some action
				</DropDown.ListItem>
                <DropDown.ListItem>
					Some other action
				</DropDown.ListItem>
		</DropDown.Menu>
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
