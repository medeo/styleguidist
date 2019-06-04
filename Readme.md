# CODESANDBOX

// TODO

# ROLLUP

Rollup permet la creation de la librairie, elle expose juste chaque composant ES.


# YARN LINK

Pendant la phase de developpement il faut utiliser la fonctionnalité de [**link**](https://yarnpkg.com/fr/docs/cli/link).

```bash
yarn link
```
Puis dans le projet ou on importe les composants

```bash
yarn link @medeo/component
```




Ensuite il suffit d'importer les composants dans les fichiers .jsx

```jsx harmony
import React from 'react'
import { Button } from '@medeo/component'

const test = () => <div><Button>coucou</Button></div>
/* ...etc */
```
