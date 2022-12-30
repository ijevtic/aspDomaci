import styled from 'styled-components';
import { styled as styled2 } from '@mui/material/styles';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import { COLORS } from '../styles/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Scroll = styled.div`
  flex: 1;
  max-height:500px;
  background: #aaa;
  overflow-y: scroll;
`;

function ScrollCode(props) {

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Switch
                    defaultChecked color="default"
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />} label="Formatiranje koda" />
            </FormGroup>

            <Scroll>
                {checked == true ?
                    <CodeEditor
                        value={props.text}
                        language="cpp"
                        readOnly={props.readonly}
                        onChange={evt => props.updateText(evt)}
                        padding={15}
                        style={{
                            fontSize: 15,
                            // backgroundColor: "#f5f5f5",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        }}
                    /> :
                    <>
                        <textarea rows="30" cols="80" style={{fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace', fontSize:15}} value={props.text} onChange={evt => props.updateText(evt)} />
                    </>
                }

            </Scroll>
        </>
    )
}
export {
    ScrollCode
}