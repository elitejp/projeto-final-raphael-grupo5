import { StyledCreateModal } from "./styles";

function CreateModal({ children, className }) {
  return (
    <StyledCreateModal className={className}>
      <div className="content-box">{children}</div>
    </StyledCreateModal>
  );
}

export default CreateModal;
