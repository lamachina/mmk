import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function ContentWithPhotoSection() {
	return (
		<div className="section bg-warning-200 fugu-section-padding2 z-index">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="fugu-apps-thumb" id="rotatetwo">
							<img
								className="wow fadeInUpX"
								data-wow-delay=".10s"
								src="/images/all-img/mocup1.png"
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="fugu-default-content large-content">
							<h2>Explore a collection of exclusive pieces</h2>
							<p>
								From paintings to sculptures and beyond, each work of art in this collection represents a
								masterpiece of creativity and craftsmanship. Discover the beauty, rarity, and exceptional quality of <span className="spantxt-blue">MMK</span>'s selection.
							</p>
							<p>
								Experience the finest in modern art and antiquities.
							</p>
							<div className="fugu-btn-wrap">
								<Link href={"contact"} legacyBehavior>
									<a className="fugu-btn">Get Started</a>
								</Link>
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
