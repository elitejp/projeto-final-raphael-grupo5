import styled from "styled-components";

export const StyledCardCare = styled.li`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  padding: 3px;
  border: 2px solid var(--primary100);
  border-radius: 10px;

  .img-review {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    p {
      font-size: 10px;
    }
  }

  .full-detatils {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .name-address {
      h2 {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .details {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btn-price {
      display: flex;
      gap: 10px;
      align-items: center;

      h2 {
        font-size: 16px;
      }
    }
  }

  .modal-date{    
    /* width: 88%; */
  }
`;
