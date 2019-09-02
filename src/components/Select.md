```jsx
<div>
	<Select onChange={e => console.log(e)}>
        <option>test</option>
        <option value="2">tsttests</option>
    </Select>
</div>
```

## with defaultValue
```jsx
import Span from './Span';

<div>
   	<Select defaultValue="female">
        <option value="male">Homme</option>
        <option value="female">Femme</option>
        <option value="other">Autre</option>
    </Select>
	<Select defaultValue="2" style={{marginTop: '1rem'}}>
        <option>test</option>
        <option value="2">tsttests</option>
    </Select>
</div>
```
