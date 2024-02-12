import Partners from "../components/shared/Partners";
import WomensHealthCard from "../components/womenshealth/WomensHealthCard";
import WomensHealthCard2 from "../components/womenshealth/WomensHealthCard2";
import WomensHealthHero from "../components/womenshealth/WomensHealthHero";
import WomensHealthRecognition from "../components/womenshealth/WomensHealthRecognition";
import MainLayout from "../layouts/MainLayout";

export default function WomensHealth() {
	return (
		<MainLayout>
			<WomensHealthHero />
			<WomensHealthCard />
			<WomensHealthCard2 />
			<WomensHealthRecognition />
			<Partners />
		</MainLayout>
	);
}