#### /[[novels]]/{novel}/[[chapters]]/{chapter}/[[scenes]]/{scene}/[[scripts]]/
```json
{
	title:string,
	paragraphs: {
		"1" : {
			backgroundImage:string,
			characters:string[],
			backgroundMusic:string,
			dialouges:{
				"1":{
					character:string,
					dialgoue:string
				}
			}
		},
		"2": {
			...
		}
	}
}
```