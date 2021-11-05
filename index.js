const accordDisplay = (e) => {
  let parentNode;
  switch (e.target.nodeName) {
    case "H2":
    case "I":
      parentNode = e.target.parentNode.parentNode;
      break;
    case "DIV":
      if (e.target.classList.contains("accordion"))
        parentNode = e.target.parentNode;
      else parentNode = e.target;
      break;
    case "P":
      parentNode = e.target.parentNode;
      break;
  }
  if (parentNode.classList.contains("active")) {
    parentNode.classList.remove("active");
  } else {
    parentNode.classList.add("active");
  }
};
