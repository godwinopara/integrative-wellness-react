import Recognition from "../shared/Recognition";

export default function WomensHealthRecognition() {
	return (
		<div className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6 my-20">
			<Recognition recognition="Awards & Distinctions" />
			<Recognition recognition="Associates of Dr. Loliya" />
			<Recognition recognition="In The Community" />
			<Recognition recognition="Articles From Dr. Loliya" />
		</div>
	);
}
