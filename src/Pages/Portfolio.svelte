<script>
</script>

<div class="Project">
  <div class="collection">
    <h3 class="title">-- Projects</h3>
    <h1>Look at my applications.</h1>
  </div>
  <div class="apps">
    <div class="app-item">
      <img class="app-image " src="blog.png" alt="app" />
      <h3 class="project-name">Blog Website</h3>
      <h4 class="project-description">Reactjs, Firebase</h4>
    </div>

    <div class="app-item">
      <img class="app-image" src="ChatApp.png" alt="app" />
      <h3 class="project-name">Chat App</h3>
      <h4 class="project-description">Nextjs, Chat-engine.io</h4>
    </div>

    <div class="app-item">
      <img class="app-image" src="weather.png" alt="app" />
      <h3 class="project-name">Weather App</h3>
      <h4 class="project-description">Nodejs, Ejs</h4>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
  .Project {
    font-family: "Raleway", sans-serif;
    color: #eeeeee;
    background-image: url("/rocket-space.svg");
    background-repeat: no-repeat;
    background-size:cover;
  }

  .collection {
    padding: 90px;
    padding-top: 20px;
  }

  .title {
    color: #00adb5;
  }

  .apps{
      display: flex;
      flex-direction: row;

  }

  .app-item{
     margin-left: 50px;
     margin-right: 100px;
     text-align: center;
     background-color: white;
     border-radius: 7%;
     color: black;
     padding-bottom: 30px;
  }

  .app-image{
      width: 100%;
      height: 70%;
      border-radius: 5%;
  }

  .project-name{
  font-weight: bolder;  
  }

  .project-description {
      font-weight: 100;
      color: grey;
  }

</style>
