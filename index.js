const accordDisplay = (e) => {
  let parentNode;
  switch (e.target.nodeName) {
    case "H2":
    case "I":
      parentNode = e.target.parentNode.parentNode;
      break;
    case "DIV":
    case "P":
      parentNode = e.target.parentNode;
  }
  if (parentNode.classList.contains("active")) {
    parentNode.classList.remove("active");
  } else {
    parentNode.classList.add("active");
  }
};
