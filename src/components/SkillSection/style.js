import styled from "styled-components";

const SkillStyle = styled.div`
    padding: 10rem 0;

    .skillItems{
        display: flex;
        margin-top: 5rem;
        gap: 10rem;
        justify-content: space-between;

        .a{
            flex: 1;
        }

    }

    @media only screen and (max-width: 768px){
        .skillItems{
            flex-direction: column;
            gap: 5rem;
            max-width: 350px;
            margin: 0 auto;

        }
    }

`

export default SkillStyle;