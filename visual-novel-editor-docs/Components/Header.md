![[Header desktop.png]]
### State
```ts
const EDITOR_MENU_ITEMS:string[] = ["장면","배경","인물","게시"];

const EDITOR_MENU_ITEM_SCENE = 0;
const EDITOR_MENU_ITEM_BACKGROUND = 1;
const EDITOR_MENU_ITEM_CHARACTER = 2;
const EDITOR_MENU_ITEM_PUBLISH = 3;

const [selectedEditorMenuItem, setSelectedEditorMenuItem] = useState<number>(-1);

const EDITOR_PREVIEW_MENU_ITEMS:string[] = ["미리보기", "전체화면", " 숨기기"];

const EDITOR_VIEW_MENU_PREVIEW = 0;
const EDITOR_VIEW_MENU_FULLSCREEN = 1;
const EDITOR_VIEW_MENU_INVISIBLE = 2;

const [selectedEditorViewMenuItem, setSelectedEditorViewMenuItem] = useState<number>(-1);

```