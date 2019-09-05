import React, { useState } from 'react';
import { DialogContext } from '../components/Dialog';

// has been moved to its own file because it was failing during build.
// mixins folder is omitted by styleguidist so this is why it placed here.
// TODO: move some other place as it is not a mixin
export const DialogProvider = ({ children }) => {
	const state = useState(null);
	if (typeof children === 'function') {
		return <DialogContext.Provider value={state}>{c => children(c)}</DialogContext.Provider>;
	}
	return <DialogContext.Provider value={state}>{children}</DialogContext.Provider>;
};
