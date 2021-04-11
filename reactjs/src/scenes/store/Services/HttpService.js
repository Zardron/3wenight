class HttpService{
    url = "http://qweasdfasd.000webhostapp.com/public/";
    
    
    postData = async(item ,added_url) =>{
    let requestOptions = {
        method:'POST',
        headers:{'Authorization':"*",
         'Content-type':'Application/json',
    },
    
    body:JSON.stringify(item)
    
    }
    
    return fetch(this.url+"/"+added_url, requestOptions).then(
        response=>response.json());
    }
    
    
    getData = async(added_url) =>{
        let requestOptions = {
            method:'GET',
            headers:{
            'Authorization': "*",
             'Content-type':'application/json',
             'Access-Control-Request-Method' : 'GET/POST/OPTIONS',
        }
        }
        
        return fetch(this.url+"/"+added_url, requestOptions).then(
            response=>response.json());
    }
    
    
    
    }
    
    
    export default HttpService;
    
    
    
    
    
    
    
    
    