const axios =require('axios');
axios.get("https://api.apis.guru/v2/list.json")
.then((response)=>{
    console.log(response);
});