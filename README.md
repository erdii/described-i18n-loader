# described-18n-loader

A webpack 1 & 2 loader for i18n json bundles that look like this:

```JSON
{
	"conf": {
		"title": {
			"desc": "Title for config screen",
			"text": "Configuration"
		}
	},

	"app": {
		"title": {
			"desc": "The app window title",
			"text": "MyApp"
		}
	},

	"nav": {
		"button": {
			"home": {
				"desc": "Navbar button for the app's homescreen",
				"text": "Home"
			},
			"about": {
				"desc": "Navbar button for the app's about screen",
				"text": "About"
			}
		}
	},

	"another": {
		"pure": {
			"key": "Pure key"
		}
	}
}
```

The loader will parse the json and replace the objects with their `text` property value or leave the string like in `another.pure.key`.

The output looks like this (just minified):

```JSON
module.exports = {
	"conf.title": "Configuration",
	"app.title": "MyApp",
	"nav.button.home": "Home",
	"nav.button.about": "About",
	"another.pure.key": "Pure Key"
};
```
