export default {
    result(req){
        return new Promise((resole ,reject) => {
            req.then(res =>{
                const data = res.data
                if(data){
                    resole(data.result)
                }else{
                    resole(data)
                }
            }).catch(err => {
                console.log('network err')
              })
        })
    }
}