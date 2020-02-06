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

### Round variant

This is used for Font-Awesome icons.

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faInfo, faMicrophone, faVideo, faPhone, faPhoneSlash } from '@fortawesome/free-solid-svg-icons';
<div>
	<Button color="white" round={true} variant="outline" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faEllipsisV} /></Button>
	<Button color="gray" round={true} variant="outline" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faInfo} /></Button>
	<Button color="emerald" round={true} variant="outline" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faMicrophone} /></Button>
	<Button color="mustard" round={true} variant="outline" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faVideo} /></Button>
	<Button variant="outline" round={true} style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhone} /></Button>
	<Button variant="outline" round={true} color="aqua" style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhoneSlash} /></Button>
	<Button variant="outline" round={true} color="scarlett" style={{ marginRight: '2rem' }}><FontAwesomeIcon icon={faMicrophone} /></Button>
	<Button color="white" round={true}  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faEllipsisV} /></Button>
	<Button color="gray" round={true}  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faInfo} /></Button>
	<Button color="emerald" round={true} style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faMicrophone} /></Button>
	<Button color="mustard" round={true}  style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faVideo} /></Button>
	<Button  round={true} style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhone} /></Button>
	<Button color="aqua"  round={true} style={{ marginRight: '.5rem' }}><FontAwesomeIcon icon={faPhoneSlash} /></Button>
	<Button  color="scarlett" round={true}><FontAwesomeIcon icon={faMicrophone} /></Button>
</div>
```

### No border variant

Button with no border.

```jsx
<Button color="white" noborder={true} variant="outline" style={{ marginRight: '.5rem' }}>White</Button>
<Button color="gray" noborder={true} variant="outline" style={{ marginRight: '.5rem' }}>Gray</Button>
<Button color="emerald" noborder={true} variant="outline" style={{ marginRight: '.5rem' }}>Emerald</Button>
<Button color="mustard" noborder={true} variant="outline" style={{ marginRight: '.5rem' }}>Mustard</Button>
<Button variant="outline" noborder={true} style={{ marginRight: '.5rem' }}>Ocean</Button>
<Button variant="outline" noborder={true} color="aqua" style={{ marginRight: '.5rem' }}>Aqua</Button>
<Button variant="outline" noborder={true} color="scarlett">Scarlett</Button>
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
