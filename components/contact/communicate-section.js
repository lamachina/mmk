/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function CommunicateSection() {
	return (
		<div className="section bg-warning-300 fugu-section-padding3">
			<div className="container">
				<div className="fugu-section-title">
					<h2>Want communicate directly?</h2>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap4 wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu-iconbox-icon4">
								<img src="/images/all-img/contact/icon1.png" alt="" />
							</div>
							<div className="fugu-iconbox-data4">
								<h4>Diggers</h4>
								<p>Come to search for the best piece currently available with us</p>
								<Link href={"#"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fugu-iconbox-wrap4 wow fadeInUpX" data-wow-delay=".10s">
							<div className="fugu-iconbox-icon4">
								<img src="/images/all-img/contact/icon2.png" alt="" />
							</div>
							<div className="fugu-iconbox-data4">
								<h4>Help & Support</h4>
								<p>Reach us anytime if needed. Our team is here to solve all issues</p>
								<Link href={"#"} legacyBehavior>
									<a className="fugu-icon-btn">
										Discover More <img src="/images/svg/arrow-black-right.svg" alt="" />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
						<div className="fugu-iconbox-wrap4 wow fadeInUpX" data-wow-delay=".20s">
							<div className="fugu-iconbox-icon4">
								<img src="/images/all-img/contact/icon3.png" alt="" />
							</div>
							<div className="fugu-iconbox-data4">
								<h4>Ask Question</h4>
								<p>Dont be shy, we would be glad to answer your questions</p>
								<Link href={"#"} legacyBehavior>
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
