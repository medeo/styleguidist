```jsx
<div>
	<Select onChange={e => console.log(e.target.options)} label="Genre" >
        <option>test</option>
        <option value="2">tsttests</option>
    </Select>
</div>
```

## with defaultValue
```jsx
import Span from './Span';
import Input from './Input';

const selectOptions = ['hello', 'bonjour', 'hola', 'salut', 'epale', 'guten tag', 'que tal', 'yo', 'hey'];

<div>
    <form onSubmit={e => console.log(e)}>    
        <Select defaultValue="female" label="Genre readonly" readOnly>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
            <option value="other">Autre</option>
        </Select>
        <Select selectOptions={selectOptions} defaultValue="bonjour" style={{marginTop: '1rem'}} label="How do you say Hello?" onChange={e => console.log(e.target.options)}>
            {selectOptions.map(o => <option value={o}>{o}</option>)}
        </Select>
    </form>
</div>
```
