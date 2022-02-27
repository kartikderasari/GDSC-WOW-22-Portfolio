// Initialise Cloud Firestore
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
const db = getFirestore();

// Call the function to fetchData from Firebase
fetchFirestoreData();

// Function to fetch Data from Cloud Firestore
function fetchFirestoreData() {
  // Fetch a single document
  getDocs(collection(db, "userInfo")).then((data) => {
    showUserData(data.docs[0].data());
  });

  // Fetch multiple documents from a collection in a sorted manner
  const experienceQuery = query(
    collection(db, "experience"),
    orderBy("companyName")
  );
  getDocs(experienceQuery).then((data) => {
    let expData = [];
    data.docs.forEach((doc) => expData.push(doc.data()));
    showExperienceData(expData);
  });

  // Fetch multiple documents from a collection
  getDocs(collection(db, "projects")).then((docs) => {
    let projectData = [];
    docs.forEach((doc) => projectData.push(doc.data()));
    showProjectData(projectData);
  });

  // Fetch multiple documents from a collection
  getDocs(collection(db, "blogs")).then((docs) => {
    let blogsData = [];
    docs.forEach((doc) => blogsData.push(doc.data()));
    showBlogsData(blogsData);

    document.getElementById("spinner").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  });
}

// Function to show User data on the DOM
function showUserData(data) {
  // Primary User data
  document.getElementById("title").innerHTML = data.name;
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("designation").innerHTML = data.designation;
  document.getElementById("bio").innerHTML = data.bio;
  document.getElementById("whatIDo").innerHTML = data.whatIDo;
  document.getElementById("profileImage").src = data.profileImageURL;
  document.getElementById("secondaryImage").src = data.secondaryImageURL;

  // Social Links
  document.getElementById("mail").href = `mailto:${data.email}`;
  document.getElementById("facebook").href = data.facebook;
  document.getElementById("instagram").href = data.instagram;
  document.getElementById("linkedin").href = data.linkedin;
  document.getElementById("twitter").href = data.twitter;
}

// Function to show Experience data on the DOM
function showExperienceData(data) {
  data.forEach((exp) => {
    document.getElementById(
      "experience-container"
    ).innerHTML += `<div class="experience-card row">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <img src="${exp.logoURL}" alt="" class="experience-image rounded-circle">
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
                <a href="${exp.companyURL}" target="_blank"><h4>${exp.designation}</h4></a>
                <p>${exp.companyName}</p>
            </div>
        </div>`;
  });
}

// Function to show Blogs data on the DOM
function showBlogsData(data) {
  let index = 0;
  data.forEach((blog) => {
    index++;
    document.getElementById(
      "blogs-container"
    ).innerHTML += `<div class="experience-card row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <h4>${blog.name}</h4>
              <button type="button" class="btn btn-primary btn-sm mt-2" data-bs-toggle="modal"
                data-bs-target="#exampleModal${index}">
                View More
              </button>
            </div>
          </div>

          <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel${index}">${blog.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ${blog.description}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>`;
  });
}

// Function to show Projects data on the DOM
function showProjectData(data) {
  data.forEach((project) => {
    document.getElementById("project-container").innerHTML += `
            <div class="project-card">
              <h4>${project.name}</h4>
              <p>${project.description}</p>
              <p>${project.techStack}</p>
              <a href="${project.githubURL}" target="_blank" class="btn btn-primary">Visit here</a>
            </div>
        `;
  });
}
