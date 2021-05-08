
// Handles The Chaning of Content Projects
var projectClassElements = document.querySelectorAll('.project-wrapper')
projectClassElements.forEach.call(projectClassElements, (item) => {
    item.onclick = function () { handleClick(item) } // Handles the project click
})
const projectDepthInfo = [ // more in depth information
    {
        name: "Coopsight",
        status: "ACTIVE",
        label: "Want to know more about Coopsight? Click here to learn more!",
        website: "https://www.coopsight.com/",
        image: "./assets/coopsight-logo.png"
    },
    {
        name: "Facebook Friends",
        status: "DEPRECIATED",
        label: "This project is unfortunately no longer active. The two main reasons is, one, because we found out the market need simply does not exist and, two, Facebook kind of threatened legal action :D",
        website: "",
        image: "./assets/icons8-teenager-male-96.png"
    },
    {
        name: "Stonks Only Go Up",
        status: "ACTIVE",
        label: "This project is currently up and running for the time being, however, it will shortly be taken down.",
        website: "http://159.65.161.168/",
        image: "./assets/meme-god.png"
    },
    {
        name: "Emerging Markets",
        status: "DEPCRECIATED",
        label: "Emerging markets was actually a benchmark for the Coopsight idea where, rather than looking directly at markets, we instead turned our focus on individual startups. Because of this, emerging markets itself is no longer publicly available but you can view its successor at Coopsight!",
        website: "https://www.coopsight.com/",
        image: "./assets/globe.png"
    },
]

// Handles the click of each project
function handleClick(item) {
    // Gets the Header Name
    const projectHeaderDocument = item.getElementsByClassName('project-header')
    const projectHeader = projectHeaderDocument[0].textContent

    // Gets the in-depth issue
    const projectExtraInfo = projectDepthInfo.find(o => o.name === projectHeader)

    // Changes the Content and styling
    const projectListWrapper = document.getElementById('project-list')
    projectListWrapper.classList.add('hide-info')
    projectListWrapper.id = ""

    // Gets the In depth place in html
    const projectInfoPlace = document.getElementById('extra-info-project-wrapper')

    projectInfoPlace.classList.remove('hide-info');
    projectInfoPlace.classList.add('show-display-inline')
    projectInfoPlace.children[0].onclick = function () { // sets the back button restore
        handleBackClick(projectListWrapper, projectInfoPlace)
    }
    document.getElementById('ei-name').textContent = projectExtraInfo.name // sets name
    document.getElementById('ei-status').textContent = projectExtraInfo.status // sets status
    document.getElementById('ei-info').textContent = projectExtraInfo.label // set info
    document.getElementById('ei-info').style.color = "#4B6163"
    document.getElementById('left-side-extra').onclick = function () {
        location.href = projectExtraInfo.website // redirect the website
    }
    if (projectExtraInfo.status === "ACTIVE") { // if the project is viewable and active
        document.getElementById('ei-status-icon').innerHTML = "&#9989;"
        document.getElementById('ei-status').style.color = "green"
    } else { // if the project is NOT viewable and active
        document.getElementById('ei-status-icon').innerHTML = "&#10060;"
        document.getElementById('ei-status').style.color = "red"
    }
    document.getElementById('right-side-img').src = projectExtraInfo.image
}

// Handles the back button
function handleBackClick(projectListWrapper, projectInfoPlace) {
    projectListWrapper.id = "project-list"
    projectListWrapper.classList.remove('hide-info')

    projectInfoPlace.classList.add('hide-info')
    projectInfoPlace.classList.remove('show-display-inline')
}