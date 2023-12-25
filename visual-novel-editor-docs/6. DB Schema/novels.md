```json
{
	title:string,
	authorUserId:string,
	isAdult:boolean,
	lastEditedTime:timestamp,
	// collection
	chapters: {
		"1" : {
			title:string,
			view:number,
			like:number,
			// collection
			scenes: {
				"1": {
					title:string,
					//collection
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