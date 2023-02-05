/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function AboutSection() {
	return (
		<div className="fugu-about-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-7 col-lg-6">
						<div className="fugu-about-thumb" >
							<img
								style={{ borderRadius: "20%" }}
								className="wow fadeInLeft"
								data-wow-delay=".10s"
								src="/images/all-img/about/about-thumb1.png"
								alt=""
							/>
							{/* <div className="fugu-about-thumb2">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".30s"
									src="/images/all-img/about/about-thumb2.png"
									alt=""
								/>
							</div> */}
						</div>
					</div>
					<div className="col-xl-5 col-lg-6 col-md-11 d-flex align-items-center">
						<div className="fugu-default-content">
							<h2>The story behind our companys beginnings and our mission</h2>
							<p>
								MMK was founded in 2023 with the mission to innovate the world of art collecting and appreciation.

							</p>
							<p>
								The founder, L. Maillard-Konzett, saw an opportunity to bring a new approach to the art world,
								one that would connect art lovers from around the world and provide access to the best pieces of art, regardless of location or background.
							</p>
							<p>
								By putting the focus on the love of transmission and the connection between people,
								rather than solely on the monetary aspect, Maison Maillard Konzett has become a hub for a new generation of art enthusiasts.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
