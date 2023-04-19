function filterCategory(filterBy, buttonClicked){

  let itemsToFilter = Array.from(document.getElementsByClassName("MangaBox"));

  for(let listItem of itemsToFilter){

    if(listItem.classList.contains(filterBy)){
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  }


  let filterButtonsArray = Array.from(document.getElementsByClassName("FilterButton"));

  for(let filterButton of filterButtonsArray){

    if(filterButton === buttonClicked){
     
      filterButton.classList.add("SelectedFilter");
    } else {

      filterButton.classList.remove("SelectedFilter");
    }
  }

}