import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InputField({ field, setTarget }) {
    return (

        <label>
            <input type="text"
                value={field}
                onChange={(e) => setTarget(e.target.value)}
            />
        </label>

    );
}

export default InputField;
