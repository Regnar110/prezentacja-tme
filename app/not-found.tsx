import Link from 'next/link'
import './not-found.css'

export default function NotFound() {
	return (
		<section className="page_404">
				<div className="container">
					<div className="row">	
						<div className="col-sm-12  flex flex-col justify-center items-center">
							<div className="four_zero_four_bg w-3/5">
								<h1 className="font-bold text-center ">404</h1>
							</div>
							
							<div className="contant_box_404 flex justify-center items-center">
								<Link href="/" className="link_404" prefetch={false}>Go to Home</Link>
							</div>
						</div>
					</div>
				</div>
		</section>
	)
  }