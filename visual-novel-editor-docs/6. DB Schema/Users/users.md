#### /[[users]]/
```json
{
	userId:string,
	oauthProviderIds:{
		naver:string,
		kakao:string,
		google:string,
		twitter:string
	},
	displayName:string,
	imageURL:string,
	isLocked:string,
	isAdult:boolean,
	balance: {
		bonus:number,
		charged:number
	},
}
```