import BreadcrumbOne from "../components/common/breadcrumb/breadcrumb-one";
import ContactFormSection from "../components/contact/contact-form-section";
import CommunicateSection from "./../components/contact/communicate-section";
import MapSection from "./../components/contact/map-section";

export default function Contact() {
	const location = {
		address: "Maison MK.",
		lat: 48.87037435,
		lng: 2.316068734550804,
	};

	return (
		<>
			<BreadcrumbOne title="Get in touch" />
			<ContactFormSection />
			<CommunicateSection />
			<MapSection location={location} zoomLevel={17} />
		</>
	);
}
