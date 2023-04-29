import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: pink;
    color: dark gray;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
    return (
        <Container>
            Shopping is Life! 50% DP within 5 days. 50% remaining upon arrival to PH.
        </Container>
    )
}

export default Announcement