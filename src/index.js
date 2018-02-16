// /src/index.js -> entry file

// libs
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// redux store
import store from './store'

// components
import Me from './Me'

const RootComponent = (
	<Provider store={ store }>
		<Me />
    </Provider>
)

render(RootComponent, document.getElementById('_Me'));
