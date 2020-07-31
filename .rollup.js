import pkg from './package.json'
import babel from '@rollup/plugin-babel'

export default {
	...pkg.rollup,
	plugins: [
		babel()
	],
	onwarn(warning, warn) {
		if (warning.code !== 'UNRESOLVED_IMPORT') warn(warning)
	}
}
