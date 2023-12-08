![[Novel item desktop.png]] 
### Props
- [[NovelItemProps]]
```json  
// 연재 중
{
	title:"소설 제목 1",
	coverImageURL:"https://...",
	publish:{
		// 모든 챕터의 like, view의 합
		like:402,
		view:10327
	},
	lastEditedTime:{
		year:2023,
		month:10,
		date:28,
		hour:11,
		minute:35
	}
}
// 연재 전
{
	title:"소설 제목 1",
	coverImageURL:"https://...",
	lastEditedTime:{
		year:2023,
		month:10,
		date:28,
		hour:11,
		minute:35
	}
}
```

### onClick
```ts
link to "/edit/scene"
```