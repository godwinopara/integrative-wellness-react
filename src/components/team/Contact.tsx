export default function Contact() {
	return (
		<section className="flex justify-center text-center py-14 px-6 xl:px-0">
			<div className="bg-gray1 py-9 px-6 md:px-24 rounded-lg">
				<h2 className="text-xl font-bold md:text-3xl xl:text-32 xl:font-medium leading-10 mb-6">
					Contact Us
				</h2>
				<p className="max-w-4xl mx-auto mb-8">
					Lorem ipsum dolor sit amet consectetur. Tristique ullamcorper tincidunt elementum luctus
					cursus ligula. Pulvinar fermentum in consectetur non suspendisse eget elementum
				</p>
				<div className="flex flex-col justify-center gap-y-5 md:gap-y-0 md:gap-x-5 md:flex-row">
					<button className="openModal min-w-[250px] py-4 block px-8 bg-dark3 text-white leading-6">
						Schedule A Consultation
					</button>
				</div>
			</div>
		</section>
	);
}
