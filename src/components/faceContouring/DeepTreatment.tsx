import imgMobile from "../../images/deep-treatment-mobile.png";
import imgDesktop from "../../images/deep-treatment-desktop.png";

export default function DeepTreatment() {
	return (
		<section className="px-6 py-16 max-w-desktop mx-auto">
			<h2 className="font-bold text-xl leading-8 text-center mb-4 xl:font-medium xl:text-32 xl:leading-10 xl:text-left">
				Deep Treatment
			</h2>
			<p className="mb-8">
				Ultrasound and radio frequency energy work together to target fat cells in areas such as the
				submental triangle, and collagen in the dermis, particularly around the eyes and mouth,
				providing deep tissue heating while increasing circulation. The result is tighter skin and
				improved laxity.
			</p>
			<div>
				<img src={imgMobile} alt="" className="xl:hidden" />
				<img src={imgDesktop} alt="" className="hidden xl:block" />
			</div>
		</section>
	);
}
