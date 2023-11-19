function openpage(a){
    let localPag = document.getElementById("Document");
    let pag = new XMLHttpRequest()
  
    pag.onreadystatechange = () => {
      if (pag.readyState = 4 && pag.status == 200) {
        localPag.innerHTML = pag.response
      }
    }
    pag.open(`GET`, `../${a}.html`);
    pag.send()
  }
  
  