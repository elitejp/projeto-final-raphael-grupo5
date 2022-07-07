import { Container } from "./styles";

const Button = ({ children, notPrimary = false, isGray = false, ...rest }) => {
  return (
    <Container notPrimary={notPrimary} isGray={isGray} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
