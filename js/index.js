//CRUD SYSTEM

var productNameInput=document.getElementById("productName")
var productPriceInput=document.getElementById("productPrice")
var productAdsInput=document.getElementById("productAds")
var productTaxesInput=document.getElementById("productTaxes")
var productDiscountInput=document.getElementById("productDiscount")
var productCountInput=document.getElementById("productCount")
var productCategoryInput=document.getElementById("productCategory")
var productSearchItem=document.getElementById("searchItem")
var addProductBtn=document.getElementById("addBtn")
var addUpdate=document.getElementById("addUpdate")

var total=document.getElementById("Total")


function sum(){

    if(productPriceInput.value != ''){
        var number=(+productPriceInput.value + +productAdsInput.value+ +productTaxesInput.value) - +productDiscountInput.value
        total.innerHTML=number;
        total.style.background='#040'
    }else{
        total.innerHTML='';
        total.style.background='#DC3545'
    }

}



var productArr=[]

    if(localStorage.getItem("productContainer")!==null){

        productArr= JSON.parse(localStorage.getItem("productContainer"))
           
        displayData()
    }


function addProduct(){

 if(validationName()==true&&validationCount()==true&&validationCategory()==true){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        ads:productAdsInput.value,
        taxes:productTaxesInput.value,
        discount:productDiscountInput.value,
        count:productCountInput.value,
        category:productCategoryInput.value,
    }

    productArr.push(product);

    localStorage.setItem("productContainer",JSON.stringify(productArr))

    displayData()
    
    clearForm()
    
} 
 
}


function displayData(){
    var box=""
    for( var i = 0 ; i<productArr.length  ; i++ ){
        box+=`
        <tr>
                <td>${i}</td>
                <td>${productArr[i].name}</td>
                <td>${productArr[i].price}</td>
                <td>${productArr[i].ads}</td>
                <td>${productArr[i].taxes}</td>
                <td>${productArr[i].discount}</td>
                <td>${productArr[i].count}</td>
                <td>${productArr[i].category}</td>
                <td>
                    <button onclick="setUpdate(${i})" class="btn btn-warning">Update</button>
                    <button onclick="deleteItem(${i})" class="btn btn-danger">delete</button>
                </td>
            </tr>
        `
    }

    document.getElementById("dataItem").innerHTML=box

}


function clearForm(){
    productNameInput.value=null
    productPriceInput.value=null
    productAdsInput.value=null
    productTaxesInput.value=null
    productDiscountInput.value=null
    productCountInput.value=null
    productCategoryInput.value=null
}


function deleteItem(index){
    productArr.splice( index ,1 )
    localStorage.setItem("productContainer",JSON.stringify(productArr))
    displayData()
    
}


function searchItem(){
    var term = productSearchItem.value;

    var box="";
    for( var i = 0 ; i<productArr.length  ; i++ ){
        if(productArr[i].name.toLowerCase().includes(term.toLowerCase())){
            box+=`
        <tr>
                <td>${i}</td>
                <td>${productArr[i].name}</td>
                <td>${productArr[i].price}</td>
                <td>${productArr[i].ads}</td>
                <td>${productArr[i].taxes}</td>
                <td>${productArr[i].discount}</td>
                <td>${productArr[i].count}</td>
                <td>${productArr[i].category}</td>
                <td>
                    <button onclick="setUpdate(${i})" class="btn btn-warning">Update</button>
                    <button onclick="deleteItem(${i})" class="btn btn-danger">delete</button>
                </td>
            </tr>
        `
        }
    }

    document.getElementById("dataItem").innerHTML=box
    

}


function validationName(){
    var text=productNameInput.value;
    var regex=/^[A-Z][a-z]{3,8}$/
    var mg=document.getElementById("msgName")
    if(regex.test(text)==true){
        productNameInput.classList.add("is-valid")
        productNameInput.classList.remove("is-invalid")
        mg.classList.add("d-none")
        return true
    }
    else{
        productNameInput.classList.add("is-invalid")
        productNameInput.classList.remove("is-valid")
        mg.classList.remove("d-none")
        return false
    }
}



// function validationPrice(){
//     var text=productPriceInput.value;
//     var regex=/^[1-9][0-9]{2,5}$/
//     if(regex.test(text)==true){
//         productPriceInput.classList.add("is-valid")
//         productPriceInput.classList.remove("is-invalid")
//         return true
//     }
//     else{
//         productPriceInput.classList.add("is-invalid")
//         productPriceInput.classList.remove("is-valid")
//         return false
//     }
// }


// function validationAds(){
//     var text=productAdsInput.value;
//     var regex=/^[1-9][0-9]{1,3}$/
//     if(regex.test(text)==true){
//         productAdsInput.classList.add("is-valid")
//         productAdsInput.classList.remove("is-invalid")
//         return true
//     }
//     else{
//         productAdsInput.classList.add("is-invalid")
//         productAdsInput.classList.remove("is-valid")
//         return false
//     }
// }


// function validationTaxes(){
//     var text=productTaxesInput.value;
//     var regex=/^[1-9][0-9]{1,3}$/
//     if(regex.test(text)==true){
//         productTaxesInput.classList.add("is-valid")
//         productTaxesInput.classList.remove("is-invalid")
//         return true
//     }
//     else{
//         productTaxesInput.classList.add("is-invalid")
//         productTaxesInput.classList.remove("is-valid")
//         return false
//     }
// }



// function validationDiscount(){
//     var text=productDiscountInput.value;
//     var regex=/^[1-9][0-9]{1,3}$/
//     if(regex.test(text)==true){
//         productDiscountInput.classList.add("is-valid")
//         productDiscountInput.classList.remove("is-invalid")
//         return true
//     }
//     else{
//         productDiscountInput.classList.add("is-invalid")
//         productDiscountInput.classList.remove("is-valid")
//         return false
//     }
// }



function validationCount(){
    var text=productCountInput.value;
    var regex=/^[1-9][0-9]{1,3}$/
    var mg=document.getElementById("msgCount")
    if(regex.test(text)==true){
        productCountInput.classList.add("is-valid")
        productCountInput.classList.remove("is-invalid")
        mg.classList.add("d-none")
        return true
    }
    else{
        productCountInput.classList.add("is-invalid")
        productCountInput.classList.remove("is-valid")
        mg.classList.remove("d-none")
        return false
    }
}


function validationCategory(){
    var text=productCategoryInput.value;
    var regex=/^(TV|Mobile|Screens|Electronic)$/i;
    var mg=document.getElementById("msgCategory")

    if(regex.test(text)==true){
        productCategoryInput.classList.add("is-valid")
        productCategoryInput.classList.remove("is-invalid")
        mg.classList.add("d-none")
        return true
    }
    else{
        productCategoryInput.classList.add("is-invalid")
        productCategoryInput.classList.remove("is-valid")
        mg.classList.remove("d-none")
        return false
    }
}

//Update

function setUpdate(index){
    productNameInput.value=productArr[index].name
    productPriceInput.value=productArr[index].price
    productAdsInput.value=productArr[index].ads
    productTaxesInput.value=productArr[index].taxes
    productDiscountInput.value=productArr[index].discount
    productCountInput.value=productArr[index].count
    productCategoryInput.value=productArr[index].category


    addProductBtn.classList.add("d-none")

    addUpdate.classList.remove("d-none")

    arr=index
}


function updateProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        ads:productAdsInput.value,
        taxes:productTaxesInput.value,
        discount:productDiscountInput.value,
        count:productCountInput.value,
        category:productCategoryInput.value,
    }

    productArr.splice( arr , 1 , product);

    localStorage.setItem("productContainer",JSON.stringify(productArr))

    displayData()
    
    clearForm()
}