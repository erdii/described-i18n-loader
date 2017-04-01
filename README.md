# described-18n-loader

A webpack 1 & 2 loader for i18n json bundles that look like this:

```JSON
{
	"conf.title": {
		"desc": "Title for config screen",
		"text": "Configuration",
	},

	"app.title": {
		"desc": "The app window title",
		"text": "MyApp",
	},

	"nav.button.home": {
		"desc": "Navbar button for the app's homescreen",
		"text": "Home",
	},

	"nav.button.about": {
		"desc": "Navbar button for the app's about screen",
		"text": "About",
	},

	...
}
```

The loader will parse the json and strip the desc key from the emitted json.
