```jsx
import Span from './Span';
<div>
	<Span
		color="nevada"
		weight="bold"
		size="small"
		style={{ textTransform: 'uppercase', marginBottom: '0.5rem' }}
	>
		Antécédents
	</Span>
	<List items={['AVK/Hypertension', 'Scoliose']}>
		{(item, i) => (
			<li key={i}>
				<Span>{item}</Span>
			</li>
		)}
	</List>
</div>;
```

```jsx
import Span from './Span';
<div>
	<Span
		color="nevada"
		weight="bold"
		size="small"
		style={{ textTransform: 'uppercase', marginBottom: '0.5rem' }}
	>
		Antécédents
	</Span>
	<List items={['AVK/Hypertension', 'Scoliose']} variant="decimal">
		{(item, i) => (
			<li key={i}>
				<Span>{item}</Span>
			</li>
		)}
	</List>
</div>;
```

```jsx
import Span from './Span';
<div>
	<Span
		color="nevada"
		weight="bold"
		size="small"
		style={{ textTransform: 'uppercase', marginBottom: '0.5rem' }}
	>
		Antécédents
	</Span>
	<List items={['AVK/Hypertension', 'Scoliose']} variant="bullet">
		{(item, i) => (
			<li key={i}>
				<Span>{item}</Span>
			</li>
		)}
	</List>
</div>;
```
