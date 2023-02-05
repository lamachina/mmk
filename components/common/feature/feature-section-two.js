import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FeatureSectionTwo() {
	return (
		<div className="section bg-warning-700 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title title-large">
					<h2>Join the fusion</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon1.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Art curation and acquisition</h4>
								<p>
									We help clients discover and purchase unique pieces of art that align with their personal taste and collection goals.
								</p>
								<Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon2.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Expert authentication and appraisal</h4>
								<p>
									Our team of experts provides thorough and accurate evaluations of the authenticity and value of art pieces.
								</p>
								<Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".30s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon3.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Customized art frame and installation</h4>
								<p>
									We offer personalized placement and installation recommendations to enhance the beauty and impact of clients art collections.
								</p>
								<Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="fugu-iconbox-wrap wow fadeInUpX" data-wow-delay=".40s">
							<div className="fugu-iconbox-icon">
								<img src="/images/all-img/icon4.png" alt="" />
							</div>
							<div className="fugu-iconbox-data">
								<h4>Personalized art collection management and preservation</h4>
								<p>
									We provide tailored and professional care for clients' art collections, including storage, preservation, and insurance solutions.
								</p>
								<Link href={"/"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
