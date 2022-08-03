"use strict";

//selecting classes $ IDs

const menu1List = document.querySelectorAll(".menu-1__list");
const menu2List = document.querySelectorAll(".menu-2__list");
const angleRight = document.querySelector(".angle__right");
const angleDown = document.querySelector(".angle__down");
const menu3List = document.querySelectorAll(".menu-3__list");
const menu4List = document.querySelectorAll(".menu-4__list");
// const innerInnerList = document.querySelector('.inner__inner__list')
// const innerInnerParent = document.querySelector('.inner__inner__parent')

menu1List.forEach((navItem) => {
  //   const navItemLink = navItem.querySelector("a");
  // console.log(navItemLink);
  navItem.addEventListener("click", (event) => {
    const arrayOfNodes = Array.from(menu1List); // convert nodeList to array
    // console.log(listToArray);
    const elementToReduceHeight = arrayOfNodes.filter(
      (node) => node !== navItem
    );

    elementToReduceHeight.forEach((node) => {
      const innerSubList = node.querySelector(".menu-3");
      if (innerSubList) {
        innerSubList.parentElement.style.height = `${34}px`;
      }
      node.style.height = `${34}px`;
    });

    // console.log(elementToReduceHeight);
    // const currentItem = event.currentTarget
    const currentItem = navItem;
    console.log(navItem.querySelector('.menu-3'));
    // console.log(navItem);
    const currentItemChild = currentItem.querySelector(".menu-2");
    if (!currentItemChild) return;

    const childHeight = currentItemChild.clientHeight;
    const parentHeight = currentItem.clientHeight;
    const initialHeight = 34;

    if (parentHeight === initialHeight) {
      currentItem.style.height = `${childHeight + parentHeight}px`;
      // angleDown.style.display = "inline";
      angleRight.style.display = "none";
    } else {
      currentItem.style.height = `${initialHeight}px`;
      angleDown.style.display = "none";
    }
  });
});

menu2List.forEach(($listItems2) => {
  $listItems2.addEventListener("click", (e) => {
    e.stopPropagation();
    // const arrayOfNodes = Array.from(subList); // convert nodeList to array
    // // console.log(listToArray);
    // const notCurrentTargetElement = arrayOfNodes.filter(
    //   (node) => node !== e.currentTarget
    // );

    // notCurrentTargetElement.forEach((node) => {
    //   const inner__inner__list = node.querySelector(".inner__inner__list");
    //   if (inner__inner__list) {
    //     inner__inner__list.parentElement.style.height = `${34}px`;
    //   }
    // node.style.height = `${34}px`;
    // });

    //////matthew
    // const arrayOfNodes = Array.from(menu2List);

    // const elementToReduceHeight = arrayOfNodes.filter(
    //   (node) => node !== $listItems2
    // );

    // elementToReduceHeight.forEach((node) => {
    //   const innerSubList = node.querySelector(".menu-3");
    //   if (innerSubList) {
    //     innerSubList.parentElement.style.height = `${34}px`;
    //   }
    //   node.style.height = `${34}px`;
    // });

    //matthew


    const $innerSubList = $listItems2.querySelector(".menu-3");
    if (!$innerSubList) return;

    const currentItemHeight = $listItems2.clientHeight;
    const innerSubListHeight = $innerSubList.clientHeight;
    const initialHeight = 34;
    const $parentElement = $listItems2.parentElement.parentElement;
    const parentElementHeight = $parentElement.clientHeight;

    // console.log(currentItemHeight === initialHeight);
    if (currentItemHeight === initialHeight) {
      const newSubListHeight = initialHeight + innerSubListHeight;
      $listItems2.style.height = `${newSubListHeight}px`;
      $parentElement.style.height = `${
        parentElementHeight + innerSubListHeight
      }px`;
    } else {
      $listItems2.style.height = `${initialHeight}px`;
      $parentElement.style.height = `${
        parentElementHeight - innerSubListHeight
      }px`;
    }
  });
});

menu3List.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    console.log("matt");
    event.stopPropagation();

    const innerSubSubList = currentItem.querySelector(".menu-4");
    console.log(innerSubSubList);
    const initial = 34;
    if (!innerSubSubList || !currentItem) {
      const listWithInnerInnerSubList = Array.from(subSubList).filter(
        (node) => !!node.querySelector(".menu-4")
      );
      console.log(listWithInnerInnerSubList);
      listWithInnerInnerSubList.forEach((subNode) => {
        const subNodeHeight = subNode.clientHeight;
        console.log(subNode.parentElement.parentElement);
        if (subNodeHeight === 34) return;

        console.log("list-3", subNodeHeight);
        
        subNode.style.height = `${34}px`;

        console.log("lastChild", subNode.lastElementChild.clientHeight);
        const subNodeParentListHeight =
          subNode.parentElement.parentElement.clientHeight;
        const inner__inner__list__height =
          subNode.lastElementChild.clientHeight;
        subNode.parentElement.parentElement.style.height = `${
          subNodeParentListHeight - inner__inner__list__height
        }px`;
      });
      return;
    }
    const innerInnerListHeight = innerSubSubList.clientHeight;
    console.log(innerInnerListHeight);
    const parentHeight = currentItem.clientHeight;
    //  const grandParent = currentItem.parentElement.clientHeight
    const total = currentItem.parentElement.parentElement;
    const totalHeight = total.clientHeight;

    if (parentHeight === initial) {
      currentItem.style.height = `${innerInnerListHeight + initial}px`;
      total.style.height = `${totalHeight + innerInnerListHeight}px`;
    } else {
      currentItem.style.height = `${initial}px`;
      total.style.height = `${totalHeight - innerInnerListHeight}px`;
    }
  });
});

menu4List.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
// innerInnerParent.addEventListener('click',function(){
//   innerInnerList.classList.toggle('show')
//   console.log('matthew');
// })

// listItems.addEveantListener('click', function(e){
//     let current =  e.currentTarget
//     if(current.chi)
// })
