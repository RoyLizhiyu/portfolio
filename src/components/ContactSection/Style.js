import styled from "styled-components";

const ContactStyle = styled.div`
    padding: 5rem 0;

    .contactBanner{
        background-color: var(--deep-dark);
        border-radius: 15px;
        text-align: center;
        padding: 5rem 0;

        h2{
            font-size: 4rem;
        }


    }

    @media only screen and (max-width: 768px) {
        .contactBanner{
            h2{
                font-size: 2.8rem;
            }
        }
    }

    
`

export default ContactStyle;