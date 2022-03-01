var button=document.querySelector(".button")
button.addEventListener('click',function (){
    fetch("https://fakestoreapi.com/products")
    .then(response=> response.json() )
    .then(data=>{
        var x="";
        console.log(data)
        data.forEach(product => {
            x+=`
            <div class="col-lg-3 align-items-center text-center ml-1 mb-5">

            <img src="${product.image}" alt="">
            

            </div>

            `
            // var picture=product.image
            // picture.addEventListener('click',function(){
            // console.log("kliklendi")
            // })
        });
        document.getElementById('product').innerHTML=x;
    })
    .catch(err=>console.log("Error"))
})




let upload=document.querySelector('.upload')
let table=document.getElementById('table')


upload.onclick=function(){
    this.nextElementSibling.click();
     
}
upload.nextElementSibling.onchange=function(event){
for(let file of event.target.files){
    const reader= new FileReader();
    reader.onloadend=function(e){
        let tr=document.createElement('tr')
        let tdimg=document.createElement('td')
        let tdname=document.createElement('td')
        let tdsize=document.createElement('td')


        let img=document.createElement('img')
        img.setAttribute('src',e.target.result)

        tdimg.appendChild(img);
        tdname.innerText=file.name;
        tdsize.innerText= Math.floor(file.size / 1024) + "MB";
        tr.appendChild(tdimg)
        tr.appendChild(tdname)
        tr.appendChild(tdsize)

        table.appendChild(tr)
 
    }
    reader.readAsDataURL(file)
}
document.querySelector('table').classList.remove('d-none')

}
   
    
    
