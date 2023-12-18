```json
{
	title:string,
	isAdult:boolean,
	lastEditedTime:timestamp,
	chapters: {
		"1" : {
			title:string,
			view:number,,
			like:number,
			scenes: {
				"1": {
					title:string,
					scripts: {
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
				},
				"2": {
					...
				}
			}
		},
		"2": {
			...
		}
	}
}
```