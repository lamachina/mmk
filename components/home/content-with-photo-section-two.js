/* eslint-disable @next/next/no-img-element */

export default function ContentWithPhotoSectionTwo() {
	return (
		<div className="section bg-warning-100 fugu-section-padding z-index">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div
							className="fugu-apps-thumb fugu-apps-thumb2"
							id="rotatethree"
							style={{ transform: "rotate(0deg)" }}
						>
							<img
								className="wow fadeInUpX"
								data-wow-delay=".10s"
								src="/images/all-img/mocup2.png"
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>Master your Art Collection</h2>
							<p>
								Effortlessly manage your art desires in 3 simple steps...
							</p>
							<div className="fugu-icon-list2">
								<ul>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/download.svg" alt="" />
										</div>
										<h4>Organize</h4>
										<p>Download important information about your collection, including résumés, reviews, and quotations.</p>
									</li>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/link.svg" alt="" />
										</div>
										<h4>Connect</h4>
										<p>Network with other art enthusiasts and share your collections with galleries, artists, and experts in the field.</p>
									</li>
									<li>
										<div className="fulo-list-icon">
											<img src="/images/svg/lightning-bolt.svg" alt="" />
										</div>
										<h4>Build</h4>
										<p>Confidently buy and sell art pieces that align with your goals.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu-shape3">
				<img src="/images/shape/shape2.png" alt="" />
			</div>
		</div>
	);
}
