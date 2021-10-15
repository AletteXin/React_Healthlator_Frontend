import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ChooseSymptom({ firstSymptom, secondSymptom, thirdSymptom, setFirst, setSecond, setThird }) {

    const [firststyle, setFirstStyle] = useState("symptomBox");
    const [secondstyle, setSecondStyle] = useState("symptomBox");
    const [thirdstyle, setThirdStyle] = useState("symptomBox");

    const changeFirstStyle = () => {

        if (firststyle == "symptomBox") {
            setFirstStyle("symptomBoxChosen");
        }
        else {
            setFirstStyle("symptomBox")
        }
    }

    const changeSecondStyle = () => {

        if (secondstyle == "symptomBox") {
            setSecondStyle("symptomBoxChosen");
        }
        else {
            setSecondStyle("symptomBox")
        }
    }

    const changeThirdStyle = () => {

        if (thirdstyle == "symptomBox") {
            setThirdStyle("symptomBoxChosen");
        }
        else {
            setThirdStyle("symptomBox")
        }
    }


    return (
        <Row>
            <Col className={firststyle} onClick={changeFirstStyle}>{firstSymptom}</Col>
            <Col className={secondstyle} onClick={changeSecondStyle}>{secondSymptom}</Col>
            <Col className={thirdstyle} onClick={changeThirdStyle}>{thirdSymptom}</Col>
        </Row>
    );
}

export default ChooseSymptom;
