<script>
	import { Router, Link, Route } from "svelte-routing";
	import About from "./Pages/About.svelte";
	import Portfolio from "./Pages/Portfolio.svelte";
  import Contact from "./Pages/Contact.svelte";
  import Home from "./Pages/home.svelte";
</script>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<div class="main">
  <div class="header">
	  <Router>
    <nav>
      <ul>
       <li><img id="logo" src="code.png" alt="dawn"/></li>
       <li class="link"><Link style={"color: white; text-decoration: none;"}  to="/">Home</Link></li>
       <li class="link"><Link style={"color: white; text-decoration: none;"}  to="About">About</Link></li>
       <li class="link"><Link style={"color: white; text-decoration: none;"}  to="Portfolio">Projects</Link></li>
       <li class="link"><Link style={"color: white; text-decoration: none;"}  to="Contact">Contact</Link></li>
      </ul>
    </nav>
	<Route path="/" component="{Home}"></Route>
    <Route path="About" component="{About}" />
	<Route path="Portfolio" component="{Portfolio}" />
  <Route path="Contact" component="{Contact}" />
</Router>

	
	  
  </div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
  .header {
    font-family: 'Raleway', sans-serif;
	color: #EEEEEE;
	
  }
  
  .main{
	  height: 100vh;
	  background-color: #222831;
  }

  nav{
	text-align: center;
    padding: 1em;
	margin: 0 auto;
  }

  ul {
    list-style-type: none;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	row-gap: 150px;
  color: white;
  }
   .link{
	   padding-left:50px ;
	   cursor: pointer;
     text-decoration: none;
   }
   .link:hover{
     color: #00adb5;
     text-decoration:underline;
   }
   

  #logo{
	  width: 50px;
	  height: 50px;
  }

  @media (max-width: 600px) {
    .link {
      padding-left: 20px;
    }

  }

</style>
