import styled from "styled-components";

const AboutStyle = styled.div`
    padding: 10rem 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .aboutTexts, .aboutImg{
        ${'' /* this makes flex-grow become 1. which makes the two flex items evenly divide the spaces in flex box. */}
        flex: 1;  

    }

    .aboutTexts{

        .sectionTitle{
            text-align: left;
        }
        
        h2{
            text-align: left;
        }


        .para{
            margin-left: 0;
            margin-top: 2rem;
        }




        .aboutSectionBtns{
            display: flex;
            justify-content: flex-start;
            gap: 2rem;
            margin-top: 2rem;
        }

    }

    .aboutImg{
        border: 2px solid var(--gray-1);
    }

    ${'' /* on tablets */}
    @media only screen and (max-width: 950px) {

        .aboutTexts{
            flex: 4;
        }

        .aboutImg{
            flex: 3;
        }

    }

    ${'' /* on phones */}
    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            text-align: center;

        }

        .aboutTexts{

        h2{
            text-align: center;
            }
        p{
            text-align: center;
            }

        .aboutSectionBtns{
            flex-direction: column;
            gap: 0rem;

            a{
                width: 100%;
            }

            }

        }

        .aboutImg{
            margin-top: 3rem;
        }



    }


`

export default AboutStyle;