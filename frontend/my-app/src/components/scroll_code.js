import styled from 'styled-components';
import CodeEditor from '@uiw/react-textarea-code-editor';

const Scroll = styled.div`
  flex: 1;
  max-height:500px;
  background: #aaa;
  overflow-y: scroll;
`;

function ScrollCode(props) {
    return (
        <Scroll>
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
            />
        </Scroll>
    )
}
export {
    ScrollCode
}