async function getdata (){
  const res = await axios.get('http://localhost:3000/getCartItems?id='+sessionStorage.getItem('user_id'));
  const data = res.data;
  console.log(data);
  data.forEach((item, i) => {
    var node = document.createElement("P");
    var textnode = document.createTextNode('Product Name : '+ item.product_name);
    node.appendChild(textnode);
    document.getElementById("container").appendChild(node);
    var node3 = document.createElement("BUTTON");
    var textnode3 = document.createTextNode('Checkout');
    node3.setAttribute('onClick',`addToBill(${item.product_id})`)
    node3.appendChild(textnode3);
    document.getElementById("container").appendChild(node3);

    var node4 = document.createElement("HR");
    document.getElementById("container").appendChild(node4);

  });

}


async function addToBill(id){
  try{
    console.log(id);
    const res = await axios.post('http://localhost:3000/addToBill',{
      user_id : sessionStorage.getItem('user_id'),
      product_id : id
    })
    alert('Item will be delivered, Thanks for shopping with us');
    window.location.href = "/shopping.html";
  }catch{
    alert('you must login first');
    window.location.href = "/index.html";
  }
}
