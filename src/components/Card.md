```jsx
<div style={{ background: '#F5F7FA', padding: '1rem', margin: '-1rem' }}>
	<Card>
		<main>
			<span> Juste un main </span>
		</main>
	</Card>
</div>
```

```jsx
import Button from './Button';
import { CardHeader } from './Card';
<div style={{ background: '#F5F7FA', padding: '1rem', margin: '-1rem' }}>
	<Card>
		<CardHeader>
			<h1> mesures d'aujourd'hui</h1>
			<span> Les données prises à partir des appareils connectés s’ajouteront automatiquement</span>
		</CardHeader>
		<main>
			<span> Lundi 30 janvier</span>
			<span> mesure prise par Colette</span>
		</main>
		<footer style={{ display: 'flex', justifyContent: 'flex-end' }}>
			<Button>Bouton de test qui fait rien</Button>
		</footer>
	</Card>
</div>;
```

```jsx
import Button from './Button';
<div style={{ background: '#F5F7FA', padding: '1rem', margin: '-1rem' }}>
	<Card>
		<main>
			<span> Sans header </span>
			<span> mesure prise par Colette</span>
		</main>
		<footer>
			<span>ajouter les données manuellement</span>
			<Button>test</Button>{' '}
		</footer>
	</Card>
</div>;
```
