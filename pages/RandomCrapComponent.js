import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

const RandomCrapComponent = () => {
	return (
		 <>
			 <Container>
			 <div className={'row d-flex justify-content-center m-1'}>
				 <Image
						className="d-block w-100"
						src="/invitation.jpg"
						width={800}
						height={1200}
				 />

			 </div>

			 <div className={'row d-flex justify-content-center m-1'}>
				 <Image
						className="d-block w-100"
						src="/program.jpg"
						width={800}
						height={1200}
				 />
			 </div>
			 </Container>

		 </>
	);
};

export default RandomCrapComponent;