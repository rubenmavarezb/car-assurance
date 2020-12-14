import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Results from './components/Result';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Container = styled.div`
   max-width:600px;
   margin: 0 auto; 
`;

const FormContainer = styled.div`
   background-color:#FFF;
   padding:3rem;
`;

function App() {

  const [resume, saveResume] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const [loading, setLoading] = useState(false)

  const { quote, data } = resume

  return (
    <Container>
        <Header 
          title="Car assurance's estimator"
        />

        <FormContainer>
            <Form
              saveResume={saveResume}
              setLoading={setLoading}
            />

            { loading ? <Spinner/> : null }

            { loading ? null : <Resume data={data}/> }

            { !loading ? <Results quote={quote}/> : null }
        </FormContainer>
    </Container>

  );
}

export default App;
