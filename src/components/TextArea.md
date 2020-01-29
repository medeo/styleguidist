```js
import Form from './Form';
<Form onSubmit={e => e.preventDefault()}>
    <Form.Row>

        <TextArea rows="4" label="textarea without defaultValue"/>
    </Form.Row>
    <Form.Row>
        <TextArea required label="required textarea"/>
    </Form.Row>
    <Form.Row>
        <TextArea label="textarea with number of row set" defaultValue="This is a textarea with 2 rows" rows="2" />
    </Form.Row>
    <Form.Row>
        <TextArea rows="4" readOnly label="textarea read-only" value="This is a readOnly textarea with 4 rows. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim, neque ut porta maximus, lectus diam eleifend ante, at gravida quam ante in sapien. Morbi orci magna, dignissim laoreet dictum quis, scelerisque at dolor. Maecenas ac orci lobortis, bibendum nisl luctus, auctor ante. Vestibulum auctor quam ac erat ullamcorper, non porttitor mauris aliquam. Donec fermentum mattis elit, id feugiat dolor consequat quis. Donec feugiat dictum neque, sit amet bibendum libero consequat congue. Nullam mattis purus a vulputate malesuada. Suspendisse id elementum purus, sed tempus ligula. Nullam tincidunt nec dolor vitae iaculis. Nulla convallis quam sit amet mollis malesuada. In sed vestibulum massa, in ornare justo. Duis aliquam vehicula quam lobortis cursus. Pellentesque nulla nulla, pharetra et luctus a, cursus sed libero. Aliquam iaculis purus sit amet orci tincidunt, et rhoncus magna placerat."/>
    </Form.Row>
     <Form.Row>
        <TextArea disabled rows="4" label="Disabled textarea" value="This is a readOnly textarea with 4 rows. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim, neque ut porta maximus, lectus diam eleifend ante, at gravida quam ante in sapien. Morbi orci magna, dignissim laoreet dictum quis, scelerisque at dolor. Maecenas ac orci lobortis, bibendum nisl luctus, auctor ante. Vestibulum auctor quam ac erat ullamcorper, non porttitor mauris aliquam. Donec fermentum mattis elit, id feugiat dolor consequat quis. Donec feugiat dictum neque, sit amet bibendum libero consequat congue. Nullam mattis purus a vulputate malesuada. Suspendisse id elementum purus, sed tempus ligula. Nullam tincidunt nec dolor vitae iaculis. Nulla convallis quam sit amet mollis malesuada. In sed vestibulum massa, in ornare justo. Duis aliquam vehicula quam lobortis cursus. Pellentesque nulla nulla, pharetra et luctus a, cursus sed libero. Aliquam iaculis purus sit amet orci tincidunt, et rhoncus magna placerat."/>
    </Form.Row>
</Form>
```

