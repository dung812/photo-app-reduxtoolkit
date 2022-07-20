import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';
import clsx from 'clsx'

function Header() {
  return (
	 <header className="header">
		<Container>
			<Row className="justify-content-between">
				<Col xs="auto">
					{/* <a 
						className="header__link header__title"
						href="http://www.nguyenthanhdung.tk/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Redux project
					</a> */}
					<NavLink
						className="header__link font-weight-bold"
						to="/photos"
					>
						Redux project
					</NavLink>
				</Col>

				<Col xs="auto">
					<NavLink
						className="header__link"
						to="/sign-in"
					>
						Sign In
					</NavLink>
				</Col>
			</Row>
		</Container>
	 </header>
  )
}

export default Header;