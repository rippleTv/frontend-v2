import styled from 'styled-components';

const Span = styled.span`
	display: block;
	width: 0%;
	height: 2px;
	background: #000;
	position: relative;
	top: -1px;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const Input = styled.input`
	width: 100%;
	border: 0;
	outline: none;
	border-bottom: 1px solid #969292;
	color: #000;
	font-size: 14px;
	padding: 10px 0;

	&:focus + ${Span}, &:active + ${Span} {
		width: 100%;
	}

	&::placeholder {
		color: #969292;
	}
`;

const InputGroup = styled.div`
	margin-bottom: 30px;
`;

const CustomInput = ({ ...props }) => {
	return (
		<InputGroup>
			<Input {...props} />
			<Span />
		</InputGroup>
	);
};

export { CustomInput as Input };
