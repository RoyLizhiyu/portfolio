import styled from "styled-components";

const InfoCardStyle = styled.div`
    margin-bottom: 10rem;
    .cardTitle{
        font-size: 3.6rem;
    }

    .item{
        display: flex;
        margin-top: 4rem;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
        position: relative;
    }

    .itemDescription{
        display:flex;
        gap: 1.5rem;
        position: absolute;
        left: 18rem;
    }

    .itemName{
        font-size: 2.4rem;
    }

    .despara{
        background-color: var(--deep-dark);
        border-radius: 8px;
        padding: 1rem;

    }

    @media only screen and (max-width: 768px){
        .item{
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
        .itemDescription{

            gap: 1rem;
            position: initial;
        }
        .cardTitle{
        font-size: 2.8rem;
    }
    .itemName{
        font-size: 2rem;
    }
    }

`

export default InfoCardStyle