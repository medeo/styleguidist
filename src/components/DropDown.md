### DropDown

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import List from './List';
dom.watch();

<div style={{ display: 'flex' }}>
	<DropDown variant="bottom" onChange={v => console.log(v)}> 
		<DropDown.Toggle>Dropdown input</DropDown.Toggle>
		<DropDown.Menu>
            <DropDown.ListItem value="code">
                Some action
            </DropDown.ListItem>
            <DropDown.ListItem value="test">
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
<div style={{ display: 'flex' }}>
	<DropDown variant="left" >
		<DropDown.KebabButton color="gray"/>
		<DropDown.Menu>
                <DropDown.ListItem value="test">
                    Some other action
                </DropDown.ListItem>
			     <DropDown.ListItem value="test">
                    Some  action
                </DropDown.ListItem>
		</DropDown.Menu>
	</DropDown>
</div>;
```


### Split DropDown

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import List from './List';
dom.watch();
<div style={{ display: 'flex' }}>
	<DropDown >
		<DropDown.SplitToggle color="mustard">Primary action</DropDown.SplitToggle>
		<DropDown.Menu>
                <DropDown.ListItem value="test">
                    Some action
                </DropDown.ListItem>
			     <DropDown.ListItem value="test-2">
                    Some other action
                </DropDown.ListItem>
		</DropDown.Menu>
	</DropDown>
</div>;
```
