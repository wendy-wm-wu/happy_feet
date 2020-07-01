import React from 'react';
import { FormControl, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import './Search.css';

const Search: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={7}>
          <div className="search-container">
            <h1>Find your next favorite trail</h1>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter a city, park or trail name"
                aria-label="Enter a city, park or trail name"
                aria-describedby="basic-addon2"
                />
              <InputGroup.Append>
                <Button variant="success">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;