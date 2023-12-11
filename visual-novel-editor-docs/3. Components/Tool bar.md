![[Tool bar desktop.png]]

```ts
interface BackgroundToolBarButtonVisible {
	addFolderButton:boolean,
	addImageButton:boolean,
	downloadImageButton:boolean,
	renameButton:boolean,
	deleteButton:boolean
}
interface CharacterdToolBarButtonVisible {
	addFolderButton:boolean,
	addCharacterButton:boolean,
	addImageButton:boolean,
	downloadImageButton:boolean,
	renameButton:boolean,
	deleteButton:boolean
}
interface SceneToolBarButtonVisible {
	addSceneButton:boolean,
	renameButton:boolean,
	deleteButton:boolean
}



const [toolBarButtonVisible, setToolBarButonVisible] = useState<BackgroundToolBarButtonVisible | CharacterdToolBarButtonVisible | SceneToolBarButtonVisible >();

```
