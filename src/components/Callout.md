```jsx noeditor
import Span from './Span';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

dom.watch();
<Callout show-alert id="alert" role="table" style={{ width: '40.6rem', height: '5.5rem' }}>
	<div style={{ width: '40.6rem', height: '0.20rem' }} />
	<Span size="small" weight="bold">
		<FontAwesomeIcon
			className="iconExclamationCircle"
			icon={faExclamationCircle}
			style={{ paddingRight: '0.5rem' }}
		/>
		Attention
	</Span>
	<Span size="small" weight="lighter">
		Veuillez saisir le nom du patient ou sinon vous risquez de ne plus le suivre. Il est important
		de remplir ce champ.
	</Span>
</Callout>;
```
