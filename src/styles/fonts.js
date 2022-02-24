import { createGlobalStyle } from "styled-components";
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf'
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf'

const Fonts = createGlobalStyle `

    @font-face{
        font-family: 'RobotoMono Regular';
        src: url(${RobotoMonoRegular});
    }

    @font-face{
        font-family: 'Montserrat SemiBold';
        src: url(${ MontserratSemiBold});
    }

    @font-face{
        font-family: 'Montserrat Bold';
        src: url(${MontserratBold});
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Montserrat SemiBold'
    }


`;



export default Fonts;