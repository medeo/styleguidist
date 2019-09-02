```jsx
import Button from './Button';
import Fieldset from './Fieldset';
import Input from './Input';
import Span from './Span';
<>
   <Dialog>
       <Dialog.Main>
            <form id="dialog-form" method="dialog">
                <Fieldset>
                    <label htmlFor="emailInput">
                        <Span>Email</Span>
                    </label>
                    <Input id="emailInput" />
                </Fieldset>
            </form>
        </Dialog.Main>
        <Dialog.Footer>
            <Button color="emerald" form="dialog-form" value="submit">Valider</Button>
        </Dialog.Footer>
   </Dialog>
  <Dialog.ToggleButton>Ouvrir</Dialog.ToggleButton>
</>
```
