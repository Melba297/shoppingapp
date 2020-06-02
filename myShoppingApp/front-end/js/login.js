async function login(){
  try{
    const user = document.getElementById('email').value;
    const response = await axios.get(`http://localhost:3000/login?email=${user}`);
    sessionStorage.setItem("user_id",response.data.id);
    console.log(sessionStorage.getItem("user_id"));
    window.location.href = "/shopping.html";
  }catch(e){
    alert('user name or password is wrong');
    console.log(e.response);
  }

}
