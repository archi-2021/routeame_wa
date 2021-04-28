import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    margin-bottom: 20px; 

    input {
      margin-top: 8px;
    }
  }
`