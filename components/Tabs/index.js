// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

{
  /* <div class="tabs">
    <div class="topics">
      <span class="title">TRENDING TOPICS:</span>
    </div>
  </div> */
}

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response);
    // console.log(typeof response.data);
    response.data.topics.forEach(item => {
      const aTab = Tab(item);
      tabsEntryPoint.appendChild(aTab);
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

function Tab(info) {
  const newTab = document.createElement("div"),
    Topics = document.createElement("div"),
    TabTitle = document.createElement("span");

  TabTitle.textContent = info;

  newTab.classList.add("tabs");
  Topics.classList.add("topics");
  TabTitle.classList.add("title");

  newTab.appendChild(Topics);
  Topics.appendChild(TabTitle);

  return newTab;
}

const tabsEntryPoint = document.querySelector(".tabs");
