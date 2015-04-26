<footer>
		<div class="container">
		<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 form-footer clearfix">
			<h3 class="footer_contact">CONTACT US</h3>
			<form>
				<input type="text" class="form-control" placeholder="NAME" />
				<input type="text" class="form-control"placeholder="CONTACT NUMBER"/>
				<input type="text" class="form-control"placeholder="E-MAIL" />
				<textarea class="form-control"placeholder="COMMENTS" ></textarea>
				<input type="submit" value="SEND" class="action-btn-footer btn btn-primary"/> 
			</form>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 address-block clearfix">
			<img src="img/about-img.png" class="inline-block"/><h3>Greenish (India) Trades Pvt. Ltd.</h3>
			<p class="address-content">New no 35 Old no 15, 
			Santhome High Road,	Mylapore, Chennai-600004</p>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 social-icons-block">
			<div class="row col-lg-12 social-icons">
				<img src="img/soc-f.png"/>
				<img src="img/soc-t.png"/>
				<img src="img/soc-g.png"/>
			</div>
			<div class="row col-lg-12 contacts">
				<p>		Mobile: +(91)-960010199.9941111000</p>
				<p>	Phone: +91-44-24672095</p>
				<p>	Fax: +91-44-24670669</p>
				<p>	Customer Care: 9600101999</p>
				<p>	Email: greenishindiacare@gmail.com</p>
				
			</div>
		</div>
	</div>
	</footer>
        <script src="js/vendor/jquery-1.11.2.min.js"></script>
		<script src="js/vendor/owl.carousel.min.js"></script>
		<script src="js/vendor/jquery.bxslider.min.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
          /*  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview'); */
        </script>
		<script>
	$(document).ready(function(){
		$(".collapse-icon i").click(function(){
			console.log("hi");
			console.log($(this).next(".menu-collapse"));
			$(this).next(".menu-collapse").css("display","block");
		});
	
	})
</script>

    </body>
</html>