<script>
</script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">


<div class="Contact-me transition">
  <div class="Contact">
    <h3 class="title">-- Contact Me</h3>
    <h1>
      Lets work together.
    </h1>
    <a href="mailto:luciankallee@gmail.com" class="contact-btn">Let's Talk</a>
    <h3 class="social-item"><i class="fab fa-linkedin"></i> <a class="social-link" href="https://www.linkedin.com/in/lucian-kallee-24893519a"> Lucian Kallee</a></h3>
    <h3 class="social-item"><i class="fab fa-github-square"></i> <a class="social-link" href="https://github.com/DJkal11"> DJkal11</a></h3>
  </div>
  <div class="coding">
    <img class="contact-img" src="re-launch space.svg" alt="dawn" />
  </div>
 
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
  .Contact-me {
    font-family: "Raleway", sans-serif;
    color: #eeeeee;
    display: inline-flex;
  }

  .Contact {
    padding: 90px;
    margin-top: 20px;
    flex: 1;
  }

  .coding {
    flex: 1;
  }

  .title {
    color: #00adb5;
    margin: 0px;
  }

  .contact-img{
      max-width: 100%;
      
  }

  .contact-btn{
      padding: 10px 20px 10px 20px;
      background-color: #00adb5;
      color: white;
      border: 1px solid #00adb5;
      border-radius: 7%;
      text-decoration: none;
  }
  .contact-btn:hover {
    background-color: #00e2ee;
  }

  .social-item {
      margin-top: 50px;
      
  }
  .social-item:hover {
      color: #00e2ee;
  }

  .social-link{
    text-decoration: none;
      color: white;
  }
  .social-link:hover {
    color: #00e2ee;
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

  @media (max-width: 600px) {
   .Contact-me {
       flex-direction: column;
       background-color: #222831;
   }

   .Contact {
    padding: 20px;
    margin-top: 10px;
   }

   

  }

</style>