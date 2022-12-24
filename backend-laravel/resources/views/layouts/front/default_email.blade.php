<!DOCTYPE html>
<html>

<head>

	<!-- Basic -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title>Mail</title>	
	<!-- Web Fonts  -->
	<link id="googleFonts" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CRoboto+Slab:300,400,700,900&display=swap" rel="stylesheet" type="text/css">

	<!-- Vendor CSS -->
	<link rel="stylesheet" href="{{ asset('assets/front/vendor/fontawesome-free/css/all.min.css')}}">	
	@yield('head_page')

	<style>
		
		.header-style{
			background-color: powderblue;
			border-bottom: 2px solid black;
			height: 100px;
			width: 100%;
		}
		.container{
			width: 80%;
			margin: 0 auto;
		}
		.container-logo{
			padding-top: 27px;
		}
		.logo-image{
			width:100px !important; 
		}
		.header-time{
			float: right;
		}
	</style>
</head>

<body>	
	<div>
		<div class="header-style">
			<div class="container container-logo">
				<img class="logo-image"  src="{{ asset('/assets/admin/img/logo.png') }}" alt="">
				<label class="header-time" for="">{{ \Carbon\Carbon::now()->format("d/m/Y H:i") }}</label>
				<div style="clear: both"></div>
			</div>
		</div>
		<div class="container" style="padding-top:20px; ">
			@yield('content')        
		</div>
	</div>
</body>

</html>