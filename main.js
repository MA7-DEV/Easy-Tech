const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
} else {
  scrollToTopBtn.style.display = "none";
}
};

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function ma(event) {
  event.preventDefault()
  let x1 = document.getElementById("name").value
  let x2 = document.getElementById("mail").value
  let x4 = document.getElementById("txt1").value
  if (x1==""||x2==""||x4=="") {
    alert("must Enter  all fields")
  }
  else if (x2.indexOf("@")===-1 || x2.indexOf(".")===-1) {
    alert("must  Enter  valid mail")
  }
  else if (x4.length<30||x4.length>300) {
    alert(" must Enter  between 10 and 40 characters")

  }
  else{
    alert("mail sent")
  }
  frm.reset()
}

let frm = document.getElementById("frm")
frm.addEventListener("submit" , ma)
