```js
import Label from './Label'
import Form from './Form';
import Select from './Select';
<Form>
    <Form.Row>
      <Input label="Input with defaultValue" defaultValue="defaultValue" />
      <Input label="Input without defaultValue" />
    </Form.Row>
    <Form.Row>
      <Input label="Input alone in row" defaultValue="useful for address" />
    </Form.Row>
    <Form.Row>
      <Input label="Required input" defaultValue="defaultValue" required />
      <Input label="Disabled input" disabled />
    </Form.Row>
  <Form.Row>
      <Input label="Invalid input" type="email" defaultValue="wrong value" />
      <Input label="Disabled input" disabled />
    </Form.Row>
    <Form.Row>
      <Label>Le patient fume t'il ?</Label>
      <div style={{ display: "flex"}}>
        <Input label="Réponse A" name="name" id="rep1" type="radio" value="1" label="Oui" />
        <Input label="Réponse B" name="name" id="rep2" type="radio" value="2" label="Non" defaultChecked />
      </div>
    </Form.Row>
    <Form.Row>
        <Select id="country" label="Genre" defaultValue="Homme">
          <Select.Option value="Homme">Homme</Select.Option>
          <Select.Option value="Femme">Femme</Select.Option>
        </Select>
        <Input label="Disabled input" disabled />
      </Form.Row>
</Form>
```

```js
import Label from './Label'
import Form from './Form';
import Select from './Select';
<Form>
    <Form.Row>
      <Input label="Nom" name="name" defaultValue="Doe" readOnly/>
      <Input label="Prénom" name="given" readOnly/>
    </Form.Row>
    <Form.Row>
      <Input label="Adresse" name="name" defaultValue="12 rue Douze" readOnly/>
    </Form.Row>
    <Form.Column>
      <Label>Le patient fume t'il ?</Label>
      <div style={{ display: "flex"}}>
        <Input label="Réponse A" name="name" id="rep1" type="radio" value="1" label="Oui" readOnly/>
        <Input label="Réponse B" name="name" id="rep2" type="radio" value="2" label="Non" defaultChecked readOnly/>
      </div>
    </Form.Column>
    <Form.Row>
    <Select label="Genre" value="Homme"  readOnly>
      <option value="Homme">Homme</option>
      <option value="Femme">Femme</option>
    </Select>
  </Form.Row>
</Form>
```

```js
import Form from './Form';
<Form onSubmit={e => e.preventDefault()}>
    <Form.Row>
      <Input label="Input required" name="name" required/>
      <Input label="Input required of type email" name="given" type="email" required/>
    </Form.Row>
    <Form.Row>
      <Input label="Invalid input of type email" defaultValue="invalid email" name="given" type="email"/>
    </Form.Row>
    <Form.Row>
      <Input label="Input required and read-only" name="name" value="John" required readOnly/>
      <Input label="Input read-only" name="given" type="email" value="dev@medeo.care" readOnly/>
    </Form.Row>
    <Form.Row>
      <Input label="Input required and disabled" name="name" value="John" required disabled/>
      <Input label="Input disabled" name="given" type="email" value="dev@medeo.care" disabled/>
    </Form.Row>
</Form>
```
