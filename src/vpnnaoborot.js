class vpnnaoborot{
    constructor(){
        this.api = "https://extension-api.naoinfrastructure.com"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async request_password(email){
    let req=await fetch(`${this.api}/request_password`,{method:"POST",headers: this.headers,body:JSON.stringify({"email":email})});
        return req.json();
    }
    async validate_password(email,password){
    let req=await fetch(`${this.api}/validate_password`,{method:"POST",headers: this.headers,body:JSON.stringify({"email":email,"password":password})});
        return req.json();
    }
}
module.exports = {vpnnaoborot};