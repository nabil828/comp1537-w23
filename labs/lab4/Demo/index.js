function addFn() {
  console.log("addFn called");
  x = jQuery("#operand1").val()
  y = jQuery("#operand2").val()
  result = Number(x) + Number(y)
  // console.log(result);
  jQuery("#result").html(result)
}

function setup() {
  console.log("setup called");
  jQuery("#addBtn").click(addFn)
  // jQuery("#subBtn").click(subFn)
  // jQuery("#mulBtn").click(mulFn)
  // jQuery("#divBtn").click(divFn)
}

jQuery(document).ready(setup)