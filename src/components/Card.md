```jsx
import Span from './Span';

<div style={{ background: '#F5F7FA', padding: '1rem', margin: '-1rem' }}>
	<Card spacing="small">
        <Card.Header>
        <h1>Some title</h1></Card.Header>
            <main>
			<Span style={{ marginTop: '1rem' }}>
				Fusce sed metus efficitur enim aliquet cursus. In scelerisque, lacus non viverra ultricies,
				ipsum felis tempor quam, sed posuere odio nisl suscipit odio. Curabitur tristique
				consectetur nisl, vitae consectetur nisi mattis a.
			</Span>
			<Span style={{ marginTop: '1rem' }}>
				Mauris scelerisque est in sapien luctus, ac finibus metus luctus. Mauris in ligula eu massa
				viverra lacinia. Maecenas mattis dolor et eros ornare, hendrerit ullamcorper sem dignissim.
				Nullam commodo sed erat in vestibulum. Donec volutpat, augue ac tempus interdum, tellus
				metus lacinia purus, sed condimentum felis velit a nulla.
			</Span>
		</main>
	</Card>
	<Card style={{ marginTop: '0.5rem' }} spacing="medium">
		<main>
			<Span style={{ marginTop: '1rem' }}>
				Fusce sed metus efficitur enim aliquet cursus. In scelerisque, lacus non viverra ultricies,
				ipsum felis tempor quam, sed posuere odio nisl suscipit odio. Curabitur tristique
				consectetur nisl, vitae consectetur nisi mattis a.
			</Span>
			<Span style={{ marginTop: '1rem' }}>
				Mauris scelerisque est in sapien luctus, ac finibus metus luctus. Mauris in ligula eu massa
				viverra lacinia. Maecenas mattis dolor et eros ornare, hendrerit ullamcorper sem dignissim.
				Nullam commodo sed erat in vestibulum. Donec volutpat, augue ac tempus interdum, tellus
				metus lacinia purus, sed condimentum felis velit a nulla.
			</Span>
		</main>
	</Card>
</div>;
```

```jsx
import Button from './Button';
import Span from './Span';

<div style={{ background: '#F5F7FA', padding: '1rem', margin: '-1rem' }}>
	<Card>
		<Card.Header>
			<h1>Examen Clinique</h1>
		</Card.Header>
		<main>
			<Span>
				Nunc fermentum orci in risus congue pulvinar. Phasellus quis ultricies augue. In id
				malesuada odio. Donec enim libero, feugiat sit amet sagittis a, commodo eget leo. Nam ut
				lobortis nulla. Nulla ut hendrerit magna, ut sodales risus. Nullam nec porttitor lacus.
				Aenean tincidunt viverra metus, non placerat orci vulputate sit amet. Sed tempus felis
				velit, ac dignissim sapien egestas at. Sed et aliquam enim. Fusce nec odio ut nulla
				dignissim euismod et at lacus. Pellentesque a elementum nulla.
			</Span>
		</main>
		<Card.Footer style={{ display: 'flex', justifyContent: 'flex-end' }}>
			<Button color="gray" style={{ marginRight: '.5rem' }}>
				Annuler
			</Button>
			<Button>Terminer</Button>
		</Card.Footer>
	</Card>
</div>;
```

```jsx
import Button from './Button';
import Span from './Span';
<div style={{ background: '#F5F7FA', padding: '1rem', margin: '-1rem' }}>
	<Card>
		<main>
			<Span>
				Vestibulum pharetra magna quis sem sollicitudin scelerisque. In eleifend consequat sem at
				hendrerit. Aliquam id massa sodales sapien posuere luctus eu non purus. Praesent ultrices,
				quam at congue dignissim, diam massa mattis magna.
			</Span>
		</main>
		<Card.Footer style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'baseline' }}>
			<Span style={{ marginRight: '.5rem' }}>Nullam nec porttitor lacus.</Span>
			<Button>test</Button>
		</Card.Footer>
	</Card>
</div>;
```
