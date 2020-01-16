### DropDown

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import List from './List';
import Search from './Search';
dom.watch();

const countryOptions = [
	{ key: "af", value: "af", flag: "af", text: "Afghanistan" },
	{ key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
	{ key: "al", value: "al", flag: "al", text: "Albania" },
	{ key: "dz", value: "dz", flag: "dz", text: "Algeria" },
	{ key: "as", value: "as", flag: "as", text: "American Samoa" },
	{ key: "ad", value: "ad", flag: "ad", text: "Andorra" },
	{ key: "ao", value: "ao", flag: "ao", text: "Angola" },
	{ key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
	{ key: "ag", value: "ag", flag: "ag", text: "Antigua" },
	{ key: "ar", value: "ar", flag: "ar", text: "Argentina" },
	{ key: "am", value: "am", flag: "am", text: "Armenia" },
	{ key: "aw", value: "aw", flag: "aw", text: "Aruba" },
	{ key: "au", value: "au", flag: "au", text: "Australia" },
	{ key: "at", value: "at", flag: "at", text: "Austria" },
	{ key: "az", value: "az", flag: "az", text: "Azerbaijan" },
	{ key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
	{ key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
	{ key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
	{ key: "bb", value: "bb", flag: "bb", text: "Barbados" },
	{ key: "by", value: "by", flag: "by", text: "Belarus" },
	{ key: "be", value: "be", flag: "be", text: "Belgium" },
	{ key: "bz", value: "bz", flag: "bz", text: "Belize" },
	{ key: "bj", value: "bj", flag: "bj", text: "Benin" }
];

<div style={{ display: 'flex' }}>
	<DropDown variant="bottom"> 
		<DropDown.Toggle>Dropdown action</DropDown.Toggle>
		<DropDown.Menu>
            <Search options={countryOptions} />
		</DropDown.Menu>
	</DropDown>
</div>
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
