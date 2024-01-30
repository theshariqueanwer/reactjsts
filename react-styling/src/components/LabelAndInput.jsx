import {styled} from 'styled-components'

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  // color: #6b7280;
  color: ${({ $invalid, $valid }) => ($invalid ? '#f87171' : '#6b7280', $valid ? '#10ca10' : `${$invalid ? '#f87171' : '#6b7280'}`) };
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  // background-color: '#d1d5db'
  // background-color: ${({ $invalid, $entering, $valid }) => ($invalid ? '#f87171' : '#d1d5db', $entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`, $valid ? '#ffe0e0' : `${$entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`}` )};
  // background-color: ${({ $invalid, $entering, $contains, $valid }) => ($invalid ? '#f87171' : '#d1d5db', $entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`, $valid ? '#ffe0e0' : `${$entering ? `${$contains ? '#d1d5db' : `${$entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`}`}` : `${$invalid ? '#f87171' : '#d1d5db'}`}` )};
  background-color: ${({ $invalid, $entering, $contains, $valid }) => ($invalid ? '#f87171' : '#d1d5db', $entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`, $valid ? '#ffe0e0' : `${$entering ? `${$contains ? '#d1d5db' : `${$entering ? '#fed2d2' : `${$invalid ? '#f87171' : '#d1d5db'}`}`}` : `${$invalid ? '#f87171' : '#d1d5db'}`}` )};
  // color: #374151;
  color: ${({ $invalid, $valid }) => ($invalid ? '#ef4444' : '#374151', $valid ? '#30ec0b' : `${$invalid ? '#ef4444' : '#374151'}` ) };
  // border: 1px solid transparent;
  border: 2px solid ${({ $invalid, $valid }) => ($invalid ? '#f73f3f' : 'transparent', $valid ? '#2bec04' : `${$invalid ? '#f73f3f' : 'transparent'}` ) };
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

function CustomeLabelAndInput({label, invalid, contains, entering, valid, ...props}) {
    return <p>
        <Label $invalid={invalid} $valid={valid} >{label}</Label>
        <Input $invalid={invalid} $contains={contains} $entering={entering} $valid={valid} {...props} />
    </p>
}

export default CustomeLabelAndInput