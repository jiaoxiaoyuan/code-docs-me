module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	extends: ['plugin:vue/vue3-essential', 'plugin:vue/essential', 'eslint:recommended'],
	plugins: ['vue', '@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.vue'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
	rules: {
		// http://eslint.cn/docs/rules/
		// https://eslint.vuejs.org/rules/
		// https://typescript-eslint.io/rules/no-unused-vars/
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'vue/custom-event-name-casing': 'off',
		'vue/attributes-order': 'off',
		'vue/one-component-per-file': 'off',
		'vue/html-closing-bracket-newline': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/attribute-hyphenation': 'off',
		'vue/html-self-closing': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/require-default-prop': 'off',
		'vue/no-v-model-argument': 'off',
		'vue/no-arrow-functions-in-watch': 'off',
		'vue/no-template-key': 'off',
		'vue/no-v-html': 'off',
		'vue/comment-directive': 'off',
		'vue/no-parsing-error': 'off',
		'vue/no-deprecated-v-on-native-modifier': 'off',
		'vue/multi-word-component-names': 'off',
		'no-useless-escape': 'off',
		'no-sparse-arrays': 'off',
		'no-prototype-builtins': 'off',
		'no-constant-condition': 'off',
		// 不允许在变量定义之前使⽤它们
		'no-use-before-define': 'off',
		// 禁⽤特定的全局变量
		'no-restricted-globals': 'off',
		// 禁⽌使⽤特定的语法
		'no-restricted-syntax': 'off',
		// 强制 generator 函数中 * 号周围使⽤⼀致的空格
		// 'generator-star-spacing': 'off',
		'generator-star-spacing': [2, { before: true, after: true }],
		'no-unreachable': 'off',
		'no-multiple-template-root': 'off',
		// 'no-unused-vars': 'error',
		// 禁⽌未使⽤的变量
		'no-unused-vars': 1,
		'no-v-model-argument': 'off',
		// 禁⽌词法声明 (let、const、function 和 class) 出现在 case或default ⼦句中
		'no-case-declarations': 'off',
		// 'no-console': 'error',
		'no-redeclare': 'off',
		/**
		 *  "off" 或 0 - 关闭规则
		 * "warn" 或 1 - 开启规则，使⽤警告级别的错误：warn (不会导致程序退出),
		 * "error" 或 2 - 开启规则，使⽤错误级别的错误：error (当被触发的时候，程序会退出)
		 * */
		// 必须使用 === 和 !==
		eqeqeq: 2,
		// 禁⽌ function 定义中出现重名参数
		'no-dupe-args': 2,
		// 禁⽌对象字⾯量中出现重复的 key
		'no-dupe-keys': 2,
		// 禁⽌重复的 case 标签
		'no-duplicate-case': 2,
		// 禁⽌空语句块
		'no-empty': 2,
		// 禁⽌对 catch ⼦句的参数重新赋值
		'no-ex-assign': 2,

		// 禁⽌不必要的布尔转换
		'no-extra-boolean-cast': 2,
		// 禁⽌不必要的括号
		// (a * b) + c; //报错
		'no-extra-parens': 0,
		// 强制所有控制语句使⽤⼀致的括号风格
		curly: [2, 'all'],
		// 禁⽌ catch ⼦句的参数与外层作⽤域中的变量同名
		'no-catch-shadow': 0,
		// 不允许标签与变量同名
		'no-label-var': 2,

		// 禁⽌ var 声明 与外层作⽤域的变量同名
		'no-shadow': 0,
		// 禁⽌覆盖受限制的标识符
		'no-shadow-restricted-names': 2,
		// 禁⽌将变量初始化为 undefined
		'no-undef-init': 2,
		// 禁⽌将 undefined 作为标识符
		'no-undefined': 0,

		// //////////// // 风格指南 // //////////////
		// 指定数组的元素之间要以空格隔开(, 后⾯)，   never参数：  [ 之前和 ] 之后不能带空格，  always参数：  [ 之前和 ] 之后必须带空格
		'array-bracket-spacing': [2, 'never'],
		// 禁⽌或强制在单⾏代码块中使⽤空格(禁⽤)
		'block-spacing': [1, 'never'],
		// 强制使⽤⼀致的缩进 第 ⼆ 个参数为 "tab" 时，  会使⽤tab，
		// if while function 后⾯的{必须与if在同⼀⾏，  java风格。

		'brace-style': [2, '1tbs', { allowSingleLine: true }],

		// 控制逗号前后的空格
		'comma-spacing': [2, { before: false, after: true }],
		'comma-style': [2, 'last'],
		// "SwitchCase" (默认：  0) 强制 switch 语句中的 case ⼦句的缩进⽔平
		// 以⽅括号取对象属性时，   [ 后⾯和 ] 前⾯是否需要空格, 可选参数 never, always
		'computed-property-spacing': [2, 'never'],

		// ⽤于指统⼀在回调函数中指向this的变量名，  箭头函数中的this已经可以指向外层调⽤者，
		// 应该没卵⽤了 // e.g [0,"self"] 指定只能 var that = this. self不能指向其他任何值，
		// this也不能赋值给self以外的其他值 "consistent-this": [2, "self", "that", "_self", "_that", "me", "_this"],
		// 强制使⽤命名的 function 表达式
		'func-names': 0,
		// ⽂件末尾强制换⾏
		'eol-last': 2,
		// 缩进
		indent: ['off', 2],
		// 要求或禁⽌在函数标识符和其调⽤之间有空格
		'func-call-spacing': 2,
		// 强制在对象字⾯量的属性中键和值之间使⽤⼀致的间距
		'key-spacing': [2, { beforeColon: false, afterColon: true }],
		// 要求在注释周围有空⾏ ( 要求在块级注释之前有⼀空⾏)
		'lines-around-comment': 0,
		'func-style': 0,
		// 强制回调函数最⼤嵌套深度 5层
		// 'max-nested-callbacks': [2, 5],
		'max-nested-callbacks': 0,
		// 禁⽌使⽤指定的标识符
		'id-blacklist': 0,
		// 强制标识符的最新和最⼤长度
		'id-length': 0,
		// 要求标识符匹配⼀个指定的正则表达式
		'id-match': 0,
		// 强制在 JSX 属性中⼀致地使⽤双引号或单引号
		'jsx-quotes': 0,

		// 强制在关键字前后使⽤⼀致的空格 (前后腰需要)
		'keyword-spacing': 2,

		// 强制⼀⾏的最⼤长度
		'max-len': [1, 200, { ignoreUrls: true }],
		// 强制最⼤⾏数
		'max-lines': 0,
		// 强制 function 定义中最多允许的参数数量
		// 'max-params': [1, 5],
		'max-params': 0,
		// 强制 function 块最多允许的的语句数量
		'max-statements': [1, 200],
		// 强制每⼀⾏中所允许的最⼤语句数量
		'max-statements-per-line': 0,
		// 要求构造函数⾸字母⼤写   (要求调⽤ new 操作符时有⾸字母⼤⼩的函数，  允许调⽤⾸字母⼤写的函数时没有 new 操作符。)
		'new-cap': [2, { newIsCap: true, capIsNew: false }],

		// 要求调⽤⽆参构造函数时有圆括号
		'new-parens': 2,
		// 要求或禁⽌ var 声明语句后有⼀⾏空⾏
		'newline-after-var': 0,
		// 禁⽌使⽤ Array 构造函数
		'no-array-constructor': 2,
		// 禁⽤按位运算符
		'no-bitwise': 0,
		// 要求 return 语句之前有⼀空⾏
		'newline-before-return': 0,
		// 要求⽅法链中每个调⽤都有⼀个换⾏符
		'newline-per-chained-call': 1,
		// 禁⽤ continue 语句
		'no-continue': 0,

		// 禁⽌在代码⾏后使⽤内联注释
		'no-inline-comments': 0,
		// 禁⽌ if 作为唯⼀的语句出现在 else 语句中
		'no-lonely-if': 0,
		// 禁⽌混合使⽤不同的操作符
		'no-mixed-operators': 0,
		// 禁⽌空格和 tab 的混合缩进
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		// 不允许多个空⾏
		'no-multiple-empty-lines': [2, { max: 2 }],
		// 不允许否定的表达式
		'no-negated-condition': 0,
		// 不允许使⽤嵌套的三元表达式
		'no-nested-ternary': 0,
		// 禁⽌使⽤ Object 的构造函数

		'no-new-object': 2,
		// 禁⽌使⽤⼀元操作符 ++ 和 --
		'no-plusplus': 0,

		// 禁⽌ function 标识符和括号之间出现空格
		'no-spaced-func': 2,
		// 不允许使⽤三元操作符
		'no-ternary': 0,

		// 禁⽤⾏尾空格
		'no-trailing-spaces': 2,

		// 禁⽌标识符中有悬空下划线_bar
		'no-underscore-dangle': 0,
		// 禁⽌可以在有更简单的可替代的表达式时使⽤三元操作符
		'no-unneeded-ternary': 2,
		// 禁⽌属性前有空⽩
		'no-whitespace-before-property': 2,
		// 要求或禁⽌在 var 声明周围换⾏
		'one-var-declaration-per-line': 0,
		// 要求或禁⽌在可能的情况下要求使⽤简化的赋值操作符
		'operator-assignment': 0,

		// 强制操作符使⽤⼀致的换⾏符
		'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }], // 要求或禁⽌块内填充
		'padded-blocks': 0,

		// 要求对象字⾯量属性名称⽤引号括起来
		'quote-props': 0,

		// 强制使⽤⼀致的反勾号、双引号或单引号
		quotes: [2, 'single', 'avoid-escape'],

		// 要求使⽤ JSDoc 注释
		'require-jsdoc': 0,

		// 要求或禁⽌使⽤分号⽽不是 ASI  (这个才是控制⾏尾部分号的，  )
		// semi: [1, 'always'],
		semi: 'off',

		// 强制分号之前和之后使⽤⼀致的空格
		// 'semi-spacing': [4, {before: false, after: true}],
		'semi-spacing': [1, { before: false, after: true }],

		// 要求同⼀个声明块中的变量按顺序排列
		'sort-vars': 0, // 强制在块之前使⽤⼀致的空格

		'space-before-blocks': [2, 'always'],

		// 强制在 function的左括号之前使⽤⼀致的空格
		'space-before-function-paren': 0,

		// 强制在圆括号内使⽤⼀致的空格
		'space-in-parens': [2, 'never'],
		// 要求操作符周围有空格
		'space-infix-ops': 2,

		// 强制在⼀元操作符前后使⽤⼀致的空格
		'space-unary-ops': [2, { words: true, nonwords: false }],
		// 强制在注释中 // 或 /* 使⽤⼀致的空格
		'spaced-comment': [2, 'always', { markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'] }],
		// 要求或禁⽌ Unicode BOM
		'unicode-bom': 2,
		// 要求正则表达式被括号括起来
		'wrap-regex': 0,

		// //////////// // ES6.相关 // //////////////
		// 要求箭头函数体使⽤⼤括号
		'arrow-body-style': 2,
		// 要求箭头函数的参数使⽤圆括号
		'arrow-parens': 0,
		'arrow-spacing': [2, { before: true, after: true }],

		// 禁⽌修改类声明的变量
		'no-class-assign': 2,
		// 不允许箭头功能，  在那⾥他们可以混淆的⽐较
		'no-confusing-arrow': 0,
		// 禁⽌修改 const 声明的变量
		'no-const-assign': 2,
		// 禁⽌类成员中出现重复的名称
		'no-dupe-class-members': 2,
		// 每个模块只能使⽤⼀个import

		'no-duplicate-imports': 2,
		// 禁⽌ Symbolnew 操作符和 new ⼀起使⽤
		'no-new-symbol': 2,
		// 允许指定模块加载时的进⼝
		'no-restricted-imports': 0,
		// 禁⽌在构造函数中，  在调⽤ super() 之前使⽤ this 或 super
		'no-this-before-super': 2,
		// 禁⽌不必要的计算性能键对象的⽂字
		'no-useless-computed-key': 0,
		// 要求使⽤ let 或 const ⽽不是 var
		'no-var': 1,
		// 要求或禁⽌对象字⾯量中⽅法和属性使⽤简写语法
		'object-shorthand': 0,
		// 要求使⽤箭头函数作为回调
		'prefer-arrow-callback': 0,

		// 要求使⽤ const 声明那些声明后不再被修改的变量
		'prefer-const': 0,

		// 要求在合适的地⽅使⽤ Reflect ⽅法

		'prefer-reflect': 0,

		// 要求使⽤扩展运算符⽽⾮ .apply()
		'prefer-spread': 0,

		// 要求使⽤模板字⾯量⽽⾮字符串连接
		'prefer-template': 0,

		// Suggest using the rest parameters instead of arguments
		'prefer-rest-params': 0,

		// 要求generator 函数内有 yield
		'require-yield': 2,

		// 要求或禁⽌模板字符串中的嵌⼊表达式周围空格的使⽤
		'template-curly-spacing': 1,

		// 强制在 yield* 表达式中 * 周围使⽤空格

		'yield-star-spacing': 2,
		// 强制使⽤⼀致的换⾏风格
		'linebreak-style': [2, 'unix'],

		// 其他
		'comma-dangle': 'off', // 是否允许对象中出现结尾逗号
		'no-empty-function': 2, // 禁止空函数
		'no-multi-spaces': 2, // 禁止使用多个空格
	},
};
