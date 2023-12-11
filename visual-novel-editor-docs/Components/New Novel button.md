![[New Novel button desktop.png]]

### onClick
```ts
Request {
	POST "/api/novel" 
	body = {
		"userId": user_id,
		"title": novel_title
	}
	config = {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	}
},
state mutate
```

