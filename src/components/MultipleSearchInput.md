```js
import Label from './Label'
import Form from './Form';
import Select from './Select';
<Form onSubmit={e => e.preventDefault()}>
    <Form.Row>
      <MultipleSearchInput label="coucou" defaultDatalist={['toto']} />
    </Form.Row>
</Form>
```
