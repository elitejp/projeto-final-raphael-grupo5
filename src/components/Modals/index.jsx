import { StyledCreateModal } from "./styles";

function CreateModal({ children }) {
  return (
    <StyledCreateModal>
        <div className="content-box">{children}</div>
      </StyledCreateModal>
  );
}

export default CreateModal;
