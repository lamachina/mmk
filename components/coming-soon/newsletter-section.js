export default function NewsletterSection() {
	return (
		<div className="fugu-newsletter">
			<form
				action="https://formspree.io/f/xwkjvgye"
				method="POST"
			>
				<input type="email" name="email" placeholder="Enter your email" required />
				<button type="submit" id="fugu-submit-btn">
					Get Notified
				</button>
				<p>We do not share your information with any third party & no spam</p>
			</form>
		</div>
	);
}
