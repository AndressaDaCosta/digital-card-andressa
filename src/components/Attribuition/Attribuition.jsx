import styled from 'styled-components';

const AttribuuitionContainer = styled.div`
	font-size: 14px;
	margin-block: 16px;
`;

export const Attribuition = () => {
	return (
		<AttribuuitionContainer>
			<span>
				Coded by{' '}
				<a
					href="https://github.com/AndressaDaCosta"
					target="_blank"
					rel="noopener noreferrer">
					Andressa Da Costa
				</a>
			</span>
		</AttribuuitionContainer>
	);
};
