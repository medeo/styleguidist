### DropDown

```jsx
import {fa-chevron-down } from 'font-awesome'
<div style={{ display: 'flex' }}>
	<DropDown color="darkCream" backgroundColor="white" style={{ marginRight: '1rem' }}>
		<button style={{ height: '2.5rem', width: '18.75rem' }}>Text</button>
	</DropDown>
	<DropDown color="white" backgroundColor="black">
		<button style={{ height: '2.5rem', width: '18.75rem' }}>
			Text<i class={fa-chevron-down} />
		</button>
	</DropDown>
</div>
```
