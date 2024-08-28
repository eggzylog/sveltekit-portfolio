import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const benokTheme: CustomThemeConfig = {
	name: 'benok-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #eb4f1f
		'--color-primary-50': '252 229 221', // #fce5dd
		'--color-primary-100': '251 220 210', // #fbdcd2
		'--color-primary-200': '250 211 199', // #fad3c7
		'--color-primary-300': '247 185 165', // #f7b9a5
		'--color-primary-400': '241 132 98', // #f18462
		'--color-primary-500': '235 79 31', // #eb4f1f
		'--color-primary-600': '212 71 28', // #d4471c
		'--color-primary-700': '176 59 23', // #b03b17
		'--color-primary-800': '141 47 19', // #8d2f13
		'--color-primary-900': '115 39 15', // #73270f
		// secondary | #daa25e
		'--color-secondary-50': '249 241 231', // #f9f1e7
		'--color-secondary-100': '248 236 223', // #f8ecdf
		'--color-secondary-200': '246 232 215', // #f6e8d7
		'--color-secondary-300': '240 218 191', // #f0dabf
		'--color-secondary-400': '229 190 142', // #e5be8e
		'--color-secondary-500': '218 162 94', // #daa25e
		'--color-secondary-600': '196 146 85', // #c49255
		'--color-secondary-700': '164 122 71', // #a47a47
		'--color-secondary-800': '131 97 56', // #836138
		'--color-secondary-900': '107 79 46', // #6b4f2e
		// tertiary | #b2e93a
		'--color-tertiary-50': '243 252 225', // #f3fce1
		'--color-tertiary-100': '240 251 216', // #f0fbd8
		'--color-tertiary-200': '236 250 206', // #ecface
		'--color-tertiary-300': '224 246 176', // #e0f6b0
		'--color-tertiary-400': '201 240 117', // #c9f075
		'--color-tertiary-500': '178 233 58', // #b2e93a
		'--color-tertiary-600': '160 210 52', // #a0d234
		'--color-tertiary-700': '134 175 44', // #86af2c
		'--color-tertiary-800': '107 140 35', // #6b8c23
		'--color-tertiary-900': '87 114 28', // #57721c
		// success | #f525ca
		'--color-success-50': '254 222 247', // #fedef7
		'--color-success-100': '253 211 244', // #fdd3f4
		'--color-success-200': '253 201 242', // #fdc9f2
		'--color-success-300': '251 168 234', // #fba8ea
		'--color-success-400': '248 102 218', // #f866da
		'--color-success-500': '245 37 202', // #f525ca
		'--color-success-600': '221 33 182', // #dd21b6
		'--color-success-700': '184 28 152', // #b81c98
		'--color-success-800': '147 22 121', // #931679
		'--color-success-900': '120 18 99', // #781263
		// warning | #5f1d93
		'--color-warning-50': '231 221 239', // #e7ddef
		'--color-warning-100': '223 210 233', // #dfd2e9
		'--color-warning-200': '215 199 228', // #d7c7e4
		'--color-warning-300': '191 165 212', // #bfa5d4
		'--color-warning-400': '143 97 179', // #8f61b3
		'--color-warning-500': '95 29 147', // #5f1d93
		'--color-warning-600': '86 26 132', // #561a84
		'--color-warning-700': '71 22 110', // #47166e
		'--color-warning-800': '57 17 88', // #391158
		'--color-warning-900': '47 14 72', // #2f0e48
		// error | #ecd8a3
		'--color-error-50': '252 249 241', // #fcf9f1
		'--color-error-100': '251 247 237', // #fbf7ed
		'--color-error-200': '250 245 232', // #faf5e8
		'--color-error-300': '247 239 218', // #f7efda
		'--color-error-400': '242 228 191', // #f2e4bf
		'--color-error-500': '236 216 163', // #ecd8a3
		'--color-error-600': '212 194 147', // #d4c293
		'--color-error-700': '177 162 122', // #b1a27a
		'--color-error-800': '142 130 98', // #8e8262
		'--color-error-900': '116 106 80', // #746a50
		// surface | #58554d
		'--color-surface-50': '230 230 228', // #e6e6e4
		'--color-surface-100': '222 221 219', // #dedddb
		'--color-surface-200': '213 213 211', // #d5d5d3
		'--color-surface-300': '188 187 184', // #bcbbb8
		'--color-surface-400': '138 136 130', // #8a8882
		'--color-surface-500': '88 85 77', // #58554d
		'--color-surface-600': '79 77 69', // #4f4d45
		'--color-surface-700': '66 64 58', // #42403a
		'--color-surface-800': '53 51 46', // #35332e
		'--color-surface-900': '43 42 38' // #2b2a26
	}
};
