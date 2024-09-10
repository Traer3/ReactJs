import styled from "styled-components";

const Title = styled.h1`
    color: palevioletred;
    font-size: 24px;
    text-align: center;
`;

export default function StyledComponentsSSR(){
    return (
        <div>
            <Title>Welcom to Server-Side Rendering with Styled Components!</Title>
        </div>
    );
}



