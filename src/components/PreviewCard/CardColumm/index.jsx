import styled from "styled-components"
import PropTypes from "prop-types"

const CardColummContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    .card-bg {
        padding: 40px;
    }

    .card-img {
        display: block;
        margin-bottom: 40px;
        margin-top: 10px;
    }

    .card-title {
        font-size: 2.5rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 40px;
    }

    .card-content {
        margin-bottom: 120px;
    }

    .card-btn {
        font-family: 'Lexend Deca';
        font-weight: 400;
        /* font-size: 1rem; */
        letter-spacing: 1px;
        height: 40px;
        border: 2px solid transparent;
        border-radius: 20px;
        padding-inline: 24px;
        transition: all .3s;
        background-color: hsl(0, 0%, 95%);
        color: inherit;
        margin-bottom: 20px;
    }

    .card-btn:hover {
        background-color: transparent;
        cursor: pointer;
        color: hsl(0, 0%, 95%) !important;
        border: 2px solid hsl(0, 0%, 95%);
    }
`

export default function CardColumm({ title, content, image, bgcolor }) {
    return (
        <>
        <CardColummContainer>
            <div className="card-bg" style={{'backgroundColor': bgcolor}}>
                <img className="card-img" src={image} alt="A image of a car" />
                <h1 className="card-title">{title}</h1>
                <p className="card-content">{content}</p>
                <button className="card-btn" style={{'color': bgcolor}}>Learn More</button>
            </div>
        </CardColummContainer>
        </>
    )
}

CardColumm.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    bgcolor: PropTypes.string
}