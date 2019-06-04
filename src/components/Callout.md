```jsx noeditor
import Span from './Span';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

dom.watch();
<Callout variant="warning" show-alert id="alert" role="alert" paddingHeader="26.5rem">
	<aside>
		<FontAwesomeIcon
			className="iconExclamationCircle"
			icon={faExclamationCircle}
			style={{ paddingRight: '0.5rem' }}
		/>
	</aside>
	<header>
		<Span weight="bold">Attention</Span>
	</header>
	<main>
		<Span size="small" weight="lighter">
			Veuillez saisir le nom du patient ou sinon vous risquez de ne plus le suivre. Il est important
			de remplir ce champ.
		</Span>
	</main>
</Callout>;
```
