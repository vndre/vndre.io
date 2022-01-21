import { render } from 'preact'
import { App } from './app'

import '@picocss/pico/css/pico.fluid.classless.min.css'
import 'minireset.css'
import './index.css'

render(<App />, document.getElementById('app'))
