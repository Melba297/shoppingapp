
async function getdata (){
  const res = await axios.get('http://localhost:3000/getProducts');
  const data = res.data;
  data.forEach((item, i) => {
	   var imageNode = document.createElement("img");
    imageNode.setAttribute('src',item.image);
    document.getElementById("container").appendChild(imageNode);
    var node = document.createElement("P");
    var textnode = document.createTextNode('Product Name : '+ item.product_name);
    node.appendChild(textnode);
    document.getElementById("container").appendChild(node);
    var node2 = document.createElement("P");
    var textnode2 = document.createTextNode('Product Price : '+ item.price);
    node2.appendChild(textnode2);
    document.getElementById("container").appendChild(node2);
    var node3 = document.createElement("BUTTON");
    var textnode3 = document.createTextNode('Add to cart');
    node3.setAttribute('onClick',`addToCart(${item.id},'${item.product_name}')`)
    node3.appendChild(textnode3);
    document.getElementById("container").appendChild(node3);

    var node4 = document.createElement("HR");
    document.getElementById("container").appendChild(node4);

  });

}


async function addToCart(id,name){
  try{
      console.log(id);
    const res = await axios.post('http://localhost:3000/addToCart',{
      user_id : sessionStorage.getItem('user_id'),
      product_id : id,
      product_name : name
    })
    alert('Added to Cart')
  }catch{
    alert('you must login first');
    window.location.href = "/index.html";
  }
}
