export default function currentUser (API_URL, START, END) {

    return fetch(`${process.env.REACT_APP_BASEURL}${API_URL}?${process.env.REACT_APP_USERTOKEN}&blogId=333903&start=${START}&end=${END}&${process.env.REACT_APP_USERID}&${process.env.REACT_APP_USUARIO}`,{
        method: 'GET',
        headers: {
            "content-Type": "application/json",
            'token': sessionStorage.getItem("jwt") 
        },
        
    }).then(res=> {
        console.log(res)
        if (!res.ok) throw new Error('Response is no ok')
        return res.json()
    }).then(res=> {
        //const { jwt} = res
        return res
    })
    
}