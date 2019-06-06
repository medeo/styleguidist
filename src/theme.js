import { modularScale } from 'polished/lib/index';
/**
 * la palette de couleur propose que les variantes de base des couleurs.
 * si il est nécessaire de rajouter des variantes plus claires ou plus sombres
 * il faut se servir des outils darken et lighten de polished directement dans le composant.
 * c.f. le composant de bouton qui utilise lighten pour les :hover et :focus.
 *
 * Les noms des couleurs ont été choisi arbitrairement dans l'unique but d'avoir des noms plus cools et moins boring.
 * @see See [https://polished.js.org/docs/#lighten]
 */
const palette = {
	//text colors
	ebony: '#1F2933',
	nevada: '#616E7C',
	cream: '#EBEBEB',
	// primary colors
	aqua: '#1FB6FF',
	ocean: '#0967D2',
	alabaster: '#F5F7FA',
	// secondary colors
	gray: '#9AA5B1',
	white: '#fff',
	black: '#040404',
	// supporting colors
	emerald: '#57DA92',
	mustard: '#F7B029',
	scarlett: '#E12D39', // thx juju
};

/**
 * les font-sizes sont générées à partir d'une échelle.
 * @see See [https://polished.js.org/docs/#modularscale]
 */

const fontSizes = {
	large: modularScale(1, '1em', 'majorThird'),
	medium: modularScale(0, '1em', 'majorThird'),
	small: modularScale(-1, '1em', 'majorThird'),
};

/**
 *  les spacing devraient s'utiliser de la sorte:
 * 	p => p.theme.spacing[p.spacing]
 */
const spacing = {
	small: '0.5rem',
	medium: '1rem',
	large: '2rem',
};

/**
 * Les font-weights sont définis en se servant de la police Inter.
 * sur le fichier .css d'import on peut voir les equivalences numeriques et mot-clés.
 * i.e. bold === 600.
 *
 * @see See [https://rsms.me/inter/inter.css]
 */
const fontWeights = {
	bold: 600,
	normal: 500,
	lighter: 400,
};

/**
 * Le theme est généré ici à l'aide de différentes propriétés.
 * La construction du thème est très inspirée par le fonctionnement de bootstrap où un
 * fichier variables contient l'ensemble des variables permettant de customiser le theme.
 * Le thème doit s'utiliser de la manière suivante:
 *
 * const MyComponent = styled.div`
 * 		someCssProp: ${p => p.theme[p.someCssProp]}
 * 		etc...
 * `
 *
 * Si cette écriture est pas clair il suffit de regarder le fonctionnement des composants
 * buttons qui sont assez complets.
 *
 * Enfin comme pour un pré-processeur sass on a juste à ajouter chaque partie dans le thème
 * et hop c'est good.
 *
 * @see See [https://github.com/twbs/bootstrap/blob/master/scss/_variables.scss]
 *
 */
const theme = {
	...palette,
	...fontSizes,
	...fontWeights,
	spacing,
};

export default theme;
