# vpnnaoborot
JavaScript library for vpn-naoborot.online
# main
```js
async function main(){
    const {vpnnaoborot} = require('./vpnnaoborot');
    const vpn= new vpnnaoborot();
    let req=await vpn.request_password("email")
    console.log(req)
}
main()
```
