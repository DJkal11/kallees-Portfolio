<script>
	import { Router, Link, Route } from "svelte-routing";
	import About from "./Pages/About.svelte";
	import Portfolio from "./Pages/Portfolio.svelte";
  import Home from "./Pages/home.svelte";
</script>

<div class="main">
  <div class="header">
	  <Router>
    <nav>
      <ul>
       <li><img id="logo" src="code.png" alt="dawn"/></li>
       <li class="link"><Link style={"color: white; text-decoration: none;"}  to="/">Home</Link></li>
       <li class="link"><Link style={"color: white; text-decoration: none;"}  to="Portfolio">Portfolio</Link></li>
       <li class="link"><Link style={"color: white; text-decoration: none;"}  to="About">About</Link></li>
      </ul>
    </nav>
	<Route path="/" component="{Home}"></Route>
    <Route path="About" component="{About}" />
	<Route path="Portfolio" component="{Portfolio}" />
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
     color: white;
   }

  #logo{
	  width: 50px;
	  height: 50px;
  }


</style>
