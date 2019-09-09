```jsx
import Button from './Button';
import Fieldset from './Fieldset';
import Input from './Input';
import Span from './Span';
import Dialog, {DialogProvider} from './Dialog';

<div >
<DialogProvider>
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
  <Dialog.ToggleButton color="mustard" style={{marginRight: "0.5rem"}}>Open n°1</Dialog.ToggleButton>
</DialogProvider>
<DialogProvider>
<Dialog>
       <Dialog.Main>
            <form id="dialog-form-2" method="dialog">
                <Fieldset>
                    <label htmlFor="emailInput">
                        <Span>Email 2</Span>
                    </label>
                    <Input id="emailInput" />
                </Fieldset>
            </form>
        </Dialog.Main>
        <Dialog.Footer>
            <Button color="emerald" form="dialog-form-2" value="submit">Valider</Button>
        </Dialog.Footer>
   </Dialog>
  <Dialog.ToggleButton color="scarlett" style={{marginRight: "0.5rem"}}>Open n°2</Dialog.ToggleButton>
  <Dialog.ToggleButton color="ocean">Open n°2 too</Dialog.ToggleButton>

</DialogProvider>
<div id="modal"></div>
</div>
```


## with Header
```jsx
import Button from './Button';
import Fieldset from './Fieldset';
import Input from './Input';
import Span from './Span';
import Dialog, {DialogProvider} from './Dialog';
<div>
<DialogProvider>
<Dialog>
    <Dialog.Header>
        <h1>Some Title goes here</h1> 
    </Dialog.Header>
       <Dialog.Main>
            <form id="dialog-form-2" method="dialog">
                <Fieldset>
                    <label htmlFor="emailInput">
                        <Span>Email 2</Span>
                    </label>
                    <Input id="emailInput" />
                </Fieldset>
            </form>
        </Dialog.Main>
        <Dialog.Footer>
            <Button color="emerald" form="dialog-form-2" value="submit">Valider</Button>
        </Dialog.Footer>
   </Dialog>
  <Dialog.ToggleButton color="scarlett" style={{marginRight: "0.5rem"}}>Open n°2</Dialog.ToggleButton>
  <Dialog.ToggleButton color="ocean">Open n°2 too</Dialog.ToggleButton>

</DialogProvider>
<div id="modal"></div>
</div>
```
