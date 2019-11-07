```js
import Label from './Label'
import Form from './Form';
import Select from './Select';
<Form>
    <Form.Row>
      <Input label="Nom" name="name" defaultValue="Doe" />
      <Input label="Prénom" name="given" />
    </Form.Row>
    <Form.Row>
      <Input label="Adresse" name="name" defaultValue="12 rue Douze" />
    </Form.Row>
    <Form.Row>
      <Label>Le patient fume t'il ?</Label>
      <div style={{ display: "flex"}}>
        <Input label="Réponse A" name="name" id="rep1" type="radio" value="1" label="Oui" />
        <Input label="Réponse B" name="name" id="rep2" type="radio" value="2" label="Non" defaultChecked />
      </div>
    </Form.Row>
    <Form.Row>
    <Select label="Genre" >
      <option value="test">Homme</option>
      <option value="test">Femme</option>
    </Select>
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
    <Form.Row>
      <Label>Le patient fume t'il ?</Label>
      <div style={{ display: "flex"}}>
        <Input label="Réponse A" name="name" id="rep1" type="radio" value="1" label="Oui" readOnly/>
        <Input label="Réponse B" name="name" id="rep2" type="radio" value="2" label="Non" defaultChecked readOnly/>
      </div>
    </Form.Row>
    <Form.Row>
    <Select label="Genre" readOnly>
      <option value="test">Homme</option>
      <option value="test">Femme</option>
    </Select>
  </Form.Row>
</Form>
```
