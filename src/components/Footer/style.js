import styled from "styled-components";

const FooterStyle = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container{
        display: flex;
        gap: 3rem;
    }

    .footerTitle{
       font-size: 3.5rem;
       margin-bottom: 1rem;
    }

    .footerParagraph{
        max-width: 500px;
        margin: 0 auto;
        font-size: 1.8rem;

    }

    .column1{
        flex: 2
    }

    .column2, .column3, .column4{
        flex: 1
    }

    .copyright{
        margin-top: 5rem;
        text-align: center;
        background-color: var(--dark-bg);
        padding: 1rem 0;
    }

    @media only screen and (max-width: 768px) {
        .container{
            flex-direction: column;
        }

        .footerParagraph{
            font-size: 1.4rem;
        }
    }
`

export default FooterStyle;