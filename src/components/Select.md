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
        <Select style={{marginTop: '1rem'}} label="How do you say Hello?" onChange={e => console.log(e.target.options)}>
            <option value="">Pick your option</option>
            <option value="hello">Hello</option>
            <option value="bonjour">bonjour</option>
            <option value="hola">hola</option>
            <option value="salut">salut</option>
            <option value="epale">epale</option>
            <option value="guten tag">guten tag</option>
            <option value="que tal">que tal</option>
            <option value="hey">hey</option>
        </Select>
    </form>
</div>
```
