### Plain buttons

#### Enabled

```jsx
	<Button color="white" style={{ marginRight: '.5rem' }}>
		white
	</Button>
	<Button color="gray" style={{ marginRight: '.5rem' }}>
		gray
	</Button>
	<Button color="emerald" style={{ marginRight: '.5rem' }}>
		emerald
	</Button>
	<Button color="mustard" style={{ marginRight: '.5rem' }}>
		mustard
	</Button>
	<Button style={{ marginRight: '.5rem' }}>ocean</Button>
	<Button color="aqua" style={{ marginRight: '.5rem' }}>aqua</Button>
	<Button color="scarlett">scarlett</Button>
```

#### Disabled

```jsx
	<Button color="white" disabled style={{ marginRight: '.5rem' }}>
		white
	</Button>
	<Button color="gray" disabled style={{ marginRight: '.5rem' }}>
		gray
	</Button>
	<Button color="emerald"  disabled style={{ marginRight: '.5rem' }}>
		emerald
	</Button>
	<Button color="mustard" disabled style={{ marginRight: '.5rem' }}>
		mustard
	</Button>
	<Button disabled style={{ marginRight: '.5rem' }}>ocean</Button>
	<Button disabled color="aqua" style={{ marginRight: '.5rem' }}>aqua</Button>
	<Button  disabled color="scarlett">scarlett</Button>
```

### Outline variant

Outlined buttons do not have a background set.

```jsx
	<Button color="white" variant="outline" style={{ marginRight: '.5rem' }}>
		white
	</Button>
	<Button color="gray" variant="outline" style={{ marginRight: '.5rem' }}>
		gray
	</Button>
	<Button color="emerald" variant="outline" style={{ marginRight: '.5rem' }}>
		emerald
	</Button>
	<Button color="mustard" variant="outline" style={{ marginRight: '.5rem' }}>
		mustard
	</Button>
	<Button variant="outline" style={{ marginRight: '.5rem' }}>ocean</Button>
	<Button variant="outline" color="aqua" style={{ marginRight: '.5rem' }}>aqua</Button>
	<Button variant="outline" color="scarlett">scarlett</Button>
```

### Toggle variant

This is used for Font-Awesome icons.
- `toggle-primary` has a background
- `toggle-secondary` is outlined

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faInfo, faMicrophone, faVideo, faPhone, faPhoneSlash } from '@fortawesome/free-solid-svg-icons';
<div>
	<Button variant="toggle" color="white"  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faEllipsisV} /></Button>
	<Button variant="toggle" color="gray"  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faInfo} /></Button>
	<Button variant="toggle" color="emerald" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faMicrophone} /></Button>
	<Button variant="toggle" color="mustard" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faVideo} /></Button>
	<Button variant="toggle" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhone} /></Button>
	<Button variant="toggle" color="aqua" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhoneSlash} /></Button>
	<Button variant="toggle" color="aqua" disabled style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhoneSlash} /></Button>
	<Button variant="toggle" color="scarlett" style={{ marginRight: '2rem' }}><FontAwesomeIcon icon={faMicrophone} /></Button>
	<br/>	<br/>
    <Button variant="toggle-secondary" color="white"  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faEllipsisV} /></Button>
	<Button variant="toggle-secondary" color="gray"  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faInfo} /></Button>
	<Button variant="toggle-secondary" color="emerald" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faMicrophone} /></Button>
	<Button variant="toggle-secondary" color="mustard"  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faVideo} /></Button>
	<Button variant="toggle-secondary" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhone} /></Button>
	<Button variant="toggle-secondary" color="aqua"  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhoneSlash} /></Button>
	<Button variant="toggle-secondary" color="scarlett" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faMicrophone} /></Button>
	<Button variant="toggle-secondary" color="scarlett" disabled><FontAwesomeIcon icon={faMicrophone} /></Button>
</div>
```

### Tertiary variant

Button with no border.

```jsx
<Button color="white"  variant="tertiary" style={{ marginRight: '.5rem' }}>White</Button>
<Button color="gray"  variant="tertiary" style={{ marginRight: '.5rem' }}>Gray</Button>
<Button color="emerald"  variant="tertiary" style={{ marginRight: '.5rem' }}>Emerald</Button>
<Button color="mustard"  variant="tertiary" style={{ marginRight: '.5rem' }}>Mustard</Button>
<Button variant="tertiary"  style={{ marginRight: '.5rem' }}>Ocean</Button>
<Button variant="tertiary"  color="aqua" style={{ marginRight: '.5rem' }}>Aqua</Button>
<Button variant="tertiary"  color="scarlett">Scarlett</Button>
```

### Sizes

```jsx

	<Button  size="small" style={{ marginRight: '.5rem' }}>
		smaller
	</Button>
	<Button  size="medium" style={{ marginRight: '.5rem' }}>
		medium
	</Button>
	<Button size="large" style={{ marginRight: '.5rem' }}>
		large
	</Button>
```
