function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, b, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  console.log(a);
  b = div.getElementsByTagName("b");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }

  }
   
  for (i = 0; i < b.length; i++) {
    if (b[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      b[i].style.display = "";
    } else {
      b[i].style.display = "none";
      }
    }

  }
