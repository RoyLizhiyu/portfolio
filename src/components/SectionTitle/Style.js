import styled from "styled-components";


const SectionStyle = styled.div`
    text-align: center;

    p{
        font-family: 'RobotoMono Regular';
        font-size: 2rem;
        
    }
    h2{
        font-family: 'Montserrat Bold';
        font-size: 6rem;
        margin-top: 0.5rem;
    }


    @media only screen and ( max-width: 768px){
        p{
            font-size: 1.2rem;
        }

        h2{
            font-size: 3.6rem;
        }
    }

`

export default SectionStyle;