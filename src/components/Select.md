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
            <option>abc</option>
            <option>bcde</option>
            <option>cde</option>
            <option>def</option>
            <option>efg</option>
            <option>fgh</option>
            <option>ghi</option>
            <option>hij</option>
            <option>ijk</option>
            <option>jkl</option>
            <option>mmmmmmmmmmmmmmm</option>
            <option>iiiii iiiii iiiii</option>
            <option value="2">tsttests</option>
        </Select>
    </form>
</div>
```
