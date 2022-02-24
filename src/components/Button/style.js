import styled from "styled-components";



const Style = styled.div`
    margin-top: 2rem;
    .button{
        background-color: ${(props)=> props.outline? 'transparent': 'var(--gray-1)'};
        font-size: 2.2rem;
        padding: 0.7em 2em;
        border-radius: 8px;
        display: inline-block;
        color: ${(props) => props.outline ? 'var(--gray-1)' : 'var(--deep-dark)' };
        border: 2px solid var(--gray-1);
        text-align: center;



    }


    @media only screen and (max-width: 768px){

        .button{
            font-size: 1.8rem;
        }
    }

`




export default Style