```jsx noeditor
import Span from './Span';
<div style={{ backgroundColor: '#F5F7FA', display: 'flex', justifyContent: 'center' }}>
	<Table>
		<thead>
			<tr>
				<th>patient</th>
				<th>âge</th>
				<th>genre</th>
				<th>dernière visite</th>
			</tr>
		</thead>
		<tbody>
			<tr role="button">
				<td style={{ display: 'flex', flexDirection: 'column' }}>
					<Span weight="bold">Dubon Julien</Span>
					<Span color="scarlett" size="small">
						Une action est requise sur ce dossier →
					</Span>
				</td>
				<td>41 ans</td>
				<td>homme</td>
				<td>30 janvier 2019</td>
			</tr>
			<tr>
				<td style={{ display: 'flex', flexDirection: 'column' }}>
					<Span weight="bold">Jimmy John</Span>
					<Span color="nevada" size="small">
						Aucune action disponible
					</Span>{' '}
				</td>
				<td>2 mois</td>
				<td>femme</td>
				<td>30 janvier 2019</td>
			</tr>
			<tr>
				<td style={{ display: 'flex', flexDirection: 'column' }}>
					<Span weight="bold">Rolps jack</Span>
					<Span color="nevada" size="small">
						Aucune action disponible
					</Span>{' '}
				</td>
				<td>83 ans</td>
				<td>homme</td>
				<td>8 janvier 2019</td>
			</tr>
			<tr>
				<td style={{ display: 'flex', flexDirection: 'column' }}>
					<Span weight="bold">albinet céline</Span>
					<Span color="nevada" size="small">
						Aucune action disponible
					</Span>{' '}
				</td>
				<td>22 ans</td>
				<td>femme</td>
				<td>8 janvier 2019</td>
			</tr>
			<tr>
				<td style={{ display: 'flex', flexDirection: 'column' }}>
					<Span weight="bold">Noreply Juliette</Span>
					<Span color="nevada" size="small">
						Aucune action disponible
					</Span>
				</td>
				<td>22 ans</td>
				<td>femme</td>
				<td>7 janvier 2019</td>
			</tr>
		</tbody>
	</Table>
</div>;
```
