<section class="main-section">
<div class="row" id="slider">
	<dl class="tabs vertical" data-tab>
		<dd>
			<a class="tab_a" href="#panel-1">
				<span class="bold">Product</span> 
				<span class="normal">Selector</span>
			</a>
		</dd>
		<dd class="active">
			<a class="tab_a" href="#panel-2">
				<span class="bold">Temperature </span>
				<span class="normal">Controlled </span>
				<span class="normal">Packaging</span>
			</a>
		</dd>
		<dd>
			<a class="tab_a" href="#panel-3">
				<span class="bold">Human &amp; Animal</span>
				<span class="normal">Health</span>				
			</a>
		</dd>
		<dd>
			<a class="tab_a" href="#panel-4">
				<span class="bold">Sample </span>
				<span class="normal">Transport</span>
			</a>
		</dd>
	</dl>
	<div class="tabs-content">
		<div class="content" id="panel-1">
			<a href="http://intelsius.com/product">
				<img src="http://intelsius.com/wp-content/uploads/2015/01/12476-intelsius-homepage-slider-1.jpg" alt="Product Selector" />
			</a>
		</div>
		<div class="content active" id="panel-2">
			<a href="http://intelsius.com/temperature-controlled-packaging-and-cold-chain-solutions">
				<img src="http://intelsius.com/wp-content/uploads/2015/01/12476-intelsius-homepage-slider-2.jpg" alt="Temperature Controlled Packaging and Cold Chain Solutions" />
			</a>
		</div>
		<div class="content" id="panel-3">
			<a href="http://intelsius.com/human-veterinary-health">
				<img src="http://intelsius.com/wp-content/uploads/2015/01/12476-intelsius-homepage-slider-3.jpg" alt="Human and Animal Health" />
			</a>
		</div>
		<div class="content" id="panel-4">
			<a href="http://intelsius.com/sample-transport">
				<img src="http://intelsius.com/wp-content/uploads/2015/01/12476-intelsius-homepage-slider-4.jpg" alt="Sampel Transport" />
			</a>
		</div>
	</div>
</div>


	<script>

				var maxTabs = 4;
			
				setInterval(function(){
					
					var set = false;
					//
					$('.tab_a').each(function(){
						
						if($(this).parent().hasClass('active') && !set)
						{
							var href = $(this).attr('href').split('-');
							var i = parseInt(href[1]) + 1;
							
							if(i > maxTabs)
								i = 1;
							
							
							$(this).parent().removeClass('active');
							$($(this).attr('href')).removeClass('active');
														
							$('a[href="#panel-'+i+'"]').parent().addClass('active');
							$('#panel-' + i).addClass('active');
							
							set = true;
							
						}
						
						
					});
					
				}, 5000);

	</script>
<div class="clear"></div>

<div class="row">
	<div class="small-12 medium-8 large-8 column" id="content">	
			       <h2>Welcome</h2>
	       <p>Intelsius is a forward-thinking company that offers a comprehensive and innovative range of temperature controlled packaging solutions to meet the unique and demanding challenges of the global cold chain and life sciences industry.</p>
<p>We pride ourselves in creating intelligent packaging that is environmentally sustainable and regulatory compliant.</p>
<p>Patient safety is always at the forefront of our product development and ensuring our customers&#8217; products and samples arrive at their destination with their integrity intact is paramount.</p>
			</div>

	<div class="small-12 medium-4 large-4 column">
		<span>			<div class="textwidget"><p class="testi">We will do all we can to protect life’s most precious cargo.</p></div>
		</span>	</div>	
</div><!-- TO BE CONVERTED TO WIDGET -->		
		<div id="widgets" class="row">
			<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-3">
				<li class="op-trans">
					<a href="http://intelsius.com/resources">
						<img src="http://intelsius.com/wp-content/themes/intelsius_v2/images/resource-centre.png" alt="Resource Center">
					</a>
				</li>
				<li class="op-trans">
					<a href="http://intelsius.com/accreditations">
						<img src="http://intelsius.com/wp-content/themes/intelsius_v2/images/accreditations-and-certifications.png" alt="Accreditations and Certifications">
					</a>
				</li>
				<li class="op-trans">
					<a href="http://intelsius.com/technical-services/validationqualification">
						<img src="http://intelsius.com/wp-content/themes/intelsius_v2/images/intelsius-qualified-partner.png" alt="Qualified Partner">
					</a>
				</li>
				<li class="op-trans">
					<a href="http://intelsius.com/meet-the-team/">
						<img src="http://intelsius.com/wp-content/themes/intelsius_v2/images/meet-the-team.png" alt="Meet our team!">
					</a>
				</li>
				<li class="op-trans">
					<a href="http://intelsius.com/services/technology-driven-testing-atmos">
						<img src="http://intelsius.com/wp-content/themes/intelsius_v2/images/atmos.png" alt="ATMOS">
					</a>
				</li>
				<li class="op-trans">
					<a href="http://intelsius.com/global-manufacturing/">
						<img src="http://intelsius.com/wp-content/themes/intelsius_v2/images/global-manufacturing.png" alt="Global Manufacturing">
					</a>
				</li>
			</ul>
		</div>
<!-- TO BE CONVERTED TO WIDGET -->		

<div class="row">
<!-- Begin News section -->
	<div id="news">
		<div class="small-12 medium-6 large-6 column">
			<h2><a href=http://intelsius.com/category/news/>Latest News</a></h2>				    <strong>Monday, April 13, 2015</strong> <br>
				    <p>	
				    	INTELSIUS  CHINA, at the Cold Chain China Conference in Shanghai<br>
				    	<a href="http://intelsius.com/intelsius-china-at-the-cold-chain-china-conference-in-shanghai" rel="bookmark" title="Permanent Link to INTELSIUS  CHINA, at the Cold Chain China Conference in Shanghai"><strong>More...</strong></a>
				    </p>
				    				    <strong>Monday, February 2, 2015</strong> <br>
				    <p>	
				    	Intelsius Discusses In-Country Distribution  At IQPC Cool Chain Europe<br>
				    	<a href="http://intelsius.com/intelsius-discusses-in-country-distribution-at-iqpc-cool-chain-europe" rel="bookmark" title="Permanent Link to Intelsius Discusses In-Country Distribution  At IQPC Cool Chain Europe"><strong>More...</strong></a>
				    </p>
				    				    <strong>Monday, February 2, 2015</strong> <br>
				    <p>	
				    	Intelsius Brings Cavalier Logistics On Board as  First North American Intelsius Qualified Partner<br>
				    	<a href="http://intelsius.com/intelsius-brings-cavalier-logistics-on-board-as-first-north-american-intelsius-qualified-partner" rel="bookmark" title="Permanent Link to Intelsius Brings Cavalier Logistics On Board as  First North American Intelsius Qualified Partner"><strong>More...</strong></a>
				    </p>
				    		</div>
	</div>
<!-- End News section -->
<!-- Begin Blog section -->
	<div class="small-12 medium-5 large-5 column" id="blog">
		
			<h2><a href="http://intelsius.com/category/blog">Blog</a></h2>				    <strong>Wednesday, April 9, 2014</strong> <br>
				    <p>	
				    	Meet An Employee &#8211; Steve Healy<br>
				    	<a href="http://intelsius.com/meet-an-employee-steve-healy" rel="bookmark" title="Permanent Link to Meet An Employee &#8211; Steve Healy"><strong>More...</strong></a>
				    </p>
				    				    <strong>Monday, March 17, 2014</strong> <br>
				    <p>	
				    	Intelsius Introduces the PharmaTherm R in Luxembourg<br>
				    	<a href="http://intelsius.com/intelsius-introduces-the-pharmatherm-r-in-luxembourg-2" rel="bookmark" title="Permanent Link to Intelsius Introduces the PharmaTherm R in Luxembourg"><strong>More...</strong></a>
				    </p>
				    				    <strong>Monday, February 24, 2014</strong> <br>
				    <p>	
				    	Meet An Employee &#8211; David Johnson<br>
				    	<a href="http://intelsius.com/meet-an-employee-david-johnson" rel="bookmark" title="Permanent Link to Meet An Employee &#8211; David Johnson"><strong>More...</strong></a>
				    </p>
				    			
	</div>

<!-- End Blog section -->
</div>
