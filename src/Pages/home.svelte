<div class="display-intro transition">
  <div class="intro">
    <h3 class="name">-- Lucian Kallee</h3>
    <h1>Hello my name is Lucian and I'm a fullstack developer.</h1>
  </div>
  <div class="space">
    <img class="home-img" src="space.svg" alt="dawn" />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

  .display-intro {
    display: inline-flex;
  }

  .intro {
    padding: 90px;
    padding-right: 10px;
    margin-top: 50px;
    flex: 1;
  }

  .name {
    color: #00adb5;
  }

  .space {
    margin-right: 120px;
    width: 100%;
    padding: 5px;
    flex: 1;
  }

  .home-img {
   max-width: 100%;
   
  }

  .transition {
    animation-name: fadeInUp;
    animation-duration: 0.25s;
    transition-timing-function: ease-in;
    animation-fill-mode: both;
  }
  
  @keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

  @media (max-width: 900px) {
   .display-intro {
     flex-direction: column;
     background-color: #222831;
   }

   .intro {
     padding: 10px;
     margin-top: 20px;
   }

   .space {
     padding: 0px;
   }

  }


</style>
