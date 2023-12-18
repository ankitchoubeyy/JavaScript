function getData(dataId, getNextData) {
    setTimeout(()=>{
        console.log("data: ",dataId); 
        if(getNextData){
            getNextData();
        }
    },3000)
}

// callback hells : nested callback is known as callBack hell.
getData(12, () => {
    getData(13, ()=> {
        getData(14, ()=>{
            getData(5)
        })
    })
});