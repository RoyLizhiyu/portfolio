import styled from "styled-components";

const projectItemStyle =  styled.div`
    .projectItemImg{
        width: 100%;
        height: 400px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid var(--gray-1);

    }

    .projectItemInfo{
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
    }

    .projectItemTitle{
        font-size: 2.2rem;
    }

    .projectItemDescription{
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }

`

export default projectItemStyle;