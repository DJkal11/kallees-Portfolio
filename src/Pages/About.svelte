<script>
</script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">


<div class="About-me">
  <div class="About">
    <h3 class="title">-- About Me</h3>
    <h1>
      I enjoy making applications and learning new skills in the tech industry.
    </h1>
    <i class="fab fa-js-square"></i>
    <i class="fab fa-node"></i>
    <i class="fab fa-css3-alt"></i>
    <i class="fab fa-bootstrap"></i>
    <i class="fab fa-react"></i>
  </div> 
  <div class="coding">
    <img class="about-img" src="coding.svg" alt="dawn" />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
  .About-me {
    font-family: "Raleway", sans-serif;
    color: #eeeeee;
    display: inline-flex;
    justify-content: space-between;
  }

  .About {
    padding: 90px;
    margin-top: 30px;
    flex: 1;
  }

  .coding {
    margin-right: 120px;
    flex: 1;
    
  }

  .about-img{
    
    max-width: 100%;
    
  }

  .title {
    color: #00adb5;
  }
  
  .fab {
    font-size: 5rem;
  }

  @media (max-width: 1000px){
    .About-me{
      flex-direction: column;
      background-color: #222831;
    }

    .About {
      padding: 10px;
     margin-top: 20px;
    }

  }

</style>
