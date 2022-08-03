"use strict";

const menu1 = document.querySelectorAll(".menu-1__list");
const menu2 = document.querySelectorAll(".menu-2__list");
const menu3 = document.querySelectorAll(".menu-3__list");
const menu4 = document.querySelectorAll(".menu-4__list");

menu4.forEach((menu4List) => {
  menu4List.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// menu1.forEach((menu1List) => {
//   menu1List.addEventListener("click", function (e) {
//     e.stopPropagation();
//     const hasDataOpen = e.currentTarget.dataset.open;
//     closeOpenedSiblings(e.currentTarget, menu1);
//     if (!hasDataOpen) return;
//     if (hasDataOpen === "true") {
//       closeList(e.currentTarget);
//       return;
//     }
//     openList(e.currentTarget);
//   });
// });

// menu2.forEach((menu2List) => {
//   menu2List.addEventListener("click", function (e) {
//     e.stopPropagation();
//     const hasDataOpen = e.currentTarget.dataset.open;
//     closeOpenedSiblings(e.currentTarget, menu2);
//     if (!hasDataOpen) return;
//     if (hasDataOpen === "true") {
//       closeList(e.currentTarget);
//       return;
//     }
//     openList(e.currentTarget);
//   });
// });

// menu3.forEach((menu3List) => {
//   menu3List.addEventListener("click", function (e) {
//     e.stopPropagation();
//     const hasDataOpen = e.currentTarget.dataset.open;
//     closeOpenedSiblings(e.currentTarget, menu3);
//     if (!hasDataOpen) return;
//     if (hasDataOpen === "true") {
//       closeList(e.currentTarget);
//       return;
//     }
//     openList(e.currentTarget);
//   });
// });
function addListFuction(listItems) {
  listItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      const currentTarget =e.currentTarget
      const hasDataOpen = currentTarget.dataset.open;
      closeOpenedSiblings(currentTarget);
      if (!hasDataOpen) return;
      if (hasDataOpen === "true") {
        closeList(currentTarget);
        return;
      }
      openList(currentTarget);
    });
  });
}

[menu1, menu2, menu3].forEach((menu) => addListFuction(menu));
const openList = function (node) {
  // angleRight.classList.remove('close')
  const icon= node.querySelector('.angle__right')
  if (node.dataset.open === "true") return;
  const nodechildheight = node.querySelector("ul").clientHeight;
  const nodeHeight = node.clientHeight;
  node.style.height = `${nodechildheight + nodeHeight}px`;
  icon.classList.add('show')
  node.dataset.open = "true";
  addHeightToParent(node, nodechildheight);
};

const closeList = function (node) {
  const icon= node.querySelector('.angle__right')
  if (node.dataset.open === "false") return;
  const nodechildheight = node.querySelector("ul").clientHeight;
  const nodeHeight = node.clientHeight;
  node.style.height = `${nodeHeight - nodechildheight}px`;
  icon.classList.remove('show')
  console.log(
    "close",
    nodeHeight,
    nodechildheight,
    nodeHeight - nodechildheight
  );
  node.dataset.open = "false";
  removeHeightFromParent(node, nodechildheight);
  removeHeightFromChildren(node);

};

const closeOpenedSiblings = function (currentNode) {
  const allNode = currentNode.parentElement.querySelector("[data-open='true']");
  console.log(allNode);
  if (allNode) {
    closeList(allNode);
  }
  //   const siblingNodes = Array.from(allNode).filter(
  //     (node) => node !== currentNode
  //   );
  //   const [openedSibling] = siblingNodes.filter(
  //     (sibling) => sibling.dataset.open === "true"
  //   );
  //   // works right
  //   if (openedSibling) {
  //     console.log("opened siblings", openedSibling);
  //   }
};

const addHeightToParent = function (node, height) {
  //   console.log(node);
  if (!node.parentElement.parentElement.dataset.open) return;
  const parentHeight = node.parentElement.parentElement.clientHeight;
  node.parentElement.parentElement.style.height = `${parentHeight + height}px`;
  addHeightToParent(node.parentElement.parentElement, height);
};

const removeHeightFromChildren = function (node, height) {
  // console.log(node);
  if (!node.dataset.open) return;
  const children = node.querySelectorAll("[data-open='true']");
  console.log("children", children);
  children.forEach((child) => {
    child.dataset.open = "false";
    child.style.height = `${34}px`;
  });
};

const removeHeightFromParent = function (node, height) {
  // console.log("p", height);
  if (!node.parentElement.parentElement.dataset.open) return;
  console.log(node,height++);
  const $parentElement = node.parentElement.parentElement;
  // console.log($parentElement);
  const parentHeight = $parentElement.clientHeight;
  $parentElement.style.height = `${parentHeight - height}px`;
  // console.log("calc h", height, parentHeight, parentHeight - height);
  return removeHeightFromParent($parentElement, height);
};
