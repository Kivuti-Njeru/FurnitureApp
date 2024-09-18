import React from 'react'
import { Link } from 'react-router-dom'

function NavSect() {
	return (
		<>
			{/* header section strats */}
			<header className='header_section long_section px-0'>
				<nav className='navbar navbar-expand-lg custom_nav-container '>
					<Link className='navbar-brand' to='/'>
						<span>Edgecut</span>
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className> </span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<div className='d-flex mx-auto flex-column flex-lg-row align-items-center'>
							<ul className='navbar-nav  '>
								<li className='nav-item '>
									<Link className='nav-link' to='/'>
										Home <span className='sr-only'>(current)</span>
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/about'>
										{' '}
										About
									</Link>
								</li>
								<li className='nav-item active'>
									<Link className='nav-link' to='/furniture'>
										Furnitures
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/blog'>
										Blog
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/contact'>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
						{}
						<div className='quote_btn-container'>
							<Link to='/login'>
								<span>Logout</span>
								<i className='fa fa-user' aria-hidden='true' />
							</Link>
						</div>
					</div>
				</nav>
			</header>
			{/* end header section */}
		</>
	)
}

export default NavSect
