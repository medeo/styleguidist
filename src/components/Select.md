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
<div>
    <form onSubmit={e => console.log(e)}>    
        <Select defaultValue="female" label="Genre readonly" readOnly>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
            <option value="other">Autre</option>
        </Select>
        <Select defaultValue="2" style={{marginTop: '1rem'}} label="Genre" onChange={e => console.log(e.target.options)}>
            <option>test</option>
            <option value="2">tsttests</option>
        </Select>
    </form>
</div>
```
