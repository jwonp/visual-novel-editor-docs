```json
{
	title:string,
	isAdult:boolean,
	chapters: {
		"1" : {
			title:string,
			scenes: {
				"1": {
					title:string,
					scripts: {
						title:string,
						paragraphs: {
							"1" : {
								background:string,
								characters:string[],
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