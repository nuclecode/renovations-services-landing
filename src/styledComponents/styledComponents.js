import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

function MyComponent() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}

const Container = styled.div`
  // ... styling properties
`;

const Hero = styled.header`
  // ... styling properties
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

// Usage: <Button primary>Click me</Button>
// ... other styled components