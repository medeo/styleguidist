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
        <Select defaultValue="female" label="Genre readonly">
            <Select.Option value="male">Homme</Select.Option>
            <Select.Option value="female">Femme</Select.Option>
            <Select.Option value="other">Autre</Select.Option>
        </Select>
    </form>
</div>
```
