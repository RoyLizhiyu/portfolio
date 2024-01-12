import styled from 'styled-components'

const NavbarStyle = styled.div`
    background-color: var(--dark-bg);
    position: fixed;
    width: 100%;
    padding: 1rem 0;
    z-index: 100;
    ul{
        
        margin: 0 auto;
        text-align: center;
        width: 90%;
        max-width: 1200px;

        li{
            display: inline-block;
            border-radius: 8px;
            transition:0.3s cubic-bezier(0.4, 0, 0.2, 1) background-color;

            &:hover{
                background-color: var(--deep-dark);
            }

            ${'' /* this active class is given to the current chosen path */}
            .active{ 
                color: var(--white);
            }
        }

        a{
            ${'' /* navlinks set to inline block so that its padding pushes other boxes away to give more space(a tag default is inline) */}
            display: inline-block;
            padding: 1rem 2rem;
            font-size: 2rem;
        }


    }


    .mobileMenuDiv{
        position: absolute;
        right: 1rem;
        width: 4rem;
        top: 1rem;
        display: none;
        cursor: pointer;

    }

    .mobileCloseDiv{
        display:none;
    }


    ${'' /* following responsive css will be applied for any screen width smaller than 768px */}
    @media only screen and (max-width: 768px) {
        padding: 0px;

        .hideItems{
            transform: translateX(calc(100% + 1rem));''
        }
        .mobileMenuDiv{
            display: block;
        }

        .navItems{
            transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1) transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width:90%;
            max-width:300px;
            position: absolute;
            border-radius: 10px;
            right: 1rem;
            .mobileCloseDiv{
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
            }

            li{
                display: block;
                margin-bottom: 1rem;

                &:hover{
                    background-color: var(--gray-2);
                }
                

            }


        }

    }





`;

export default NavbarStyle
