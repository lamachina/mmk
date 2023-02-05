/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function FaqHomeOne() {
	return (
		<div className="section bg-warning-700 fugu-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 position-relative">
						<div className="fugu-default-content large-content">
							<h2>Join the MMK Community</h2>
							<p>
								Whether you are a seasoned art collector or just starting out,
								our community is open to anyone with the motivation and confidence to join.
							</p>

							<Link href={"/contact"} legacyBehavior>
								<a className="fugu-faq-btn">Want to know more? Contact us here</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-5 offset-lg-2">
						<div className="fugu-accordion-wrap">
							<div className="fugu-accordion-item">
								<h4>A Global Network of Enthusiasts</h4>
								<p>
									Our team is comprised of passionate art lovers from all over the world who are always on the move,
									exploring the latest art scenes. Find us in hotspot cities like
									Paris, New York, Dubai, Singapore or Vienna.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>A Wide Range of Art Choices</h4>
								<p>
									At MMK, we offer a diverse range of art options to suit every taste and preference,
									whether you're a beginner in art collecting or an experienced collector.
								</p>
							</div>
							<div className="fugu-accordion-item">
								<h4>Diversity at the Heart of Our Culture</h4>
								<p>
									We believe that a diverse team of experts from different backgrounds and perspectives enhances the art experience
									and brings new and fresh visions to the table.
									Our team is a testament to this, and we are proud to celebrate diversity at the heart of our culture.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
