import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    a {
        color: #FFFFF;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }

    margin: 0 auto;
    font-size: 1.3rem;
    color: #ffff;
    text-align: center;
`;
export const Description = styled.p`
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;

    code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    }

    a {
        color: #0070f3;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }
`;

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 3rem;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const Card = styled.a`
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;

    &:hover,
    &:focus,
    &:active {
        color: #0070f3;
        border-color: #0070f3;
    }

    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }
`;
export const Header2 = styled.h2`
    a {
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }

    margin: 0 auto;
    font-size: 1.3rem;
    color: #001529;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const TabCenter = styled.div`
    align-items: center;
    max-width: 100%;
`;
