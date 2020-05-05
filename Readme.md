# Material Index

System Info Viewer for chromebooks, that used [Chrome Extension API](https://developer.chrome.com/extensions/api_index) and develop by [Angular](https://angular.io/).

![Screen_Index_Landscape](https://github.com/crocutai/Material-Index/blob/master/screenshots/Screenshot_Index_Landscape.png)

# Installation

Build from repository :

```
git clone https://github.com/crocutai/Material-Index.git
ng build new-tab
ng build options-page
copy "src/background.script.js" and "scr/manifest.json" to "dist"
```

Install in Chrome :

- Enable `Developer Mode` in `chrome://extensions`
- `Load unpacked extension...` and select `dist`
- Enable `Permissions` in `option page`

![Screen_Options_Page](https://github.com/crocutai/Material-Index/blob/master/screenshots/Screenshot_Options_Page.png)

# Todo

- [ ] Effective file structure
- [ ] [system.storage](https://developer.chrome.com/extensions/system_storage)
- [ ] Work with [chrome.processes](https://developer.chrome.com/extensions/processes) API
- [ ] More customize function, eg: search engine, weather
