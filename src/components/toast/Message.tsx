import React, { CSSProperties, FC } from 'react';

export interface messageProps {
    /** toast文案 */
    message?: string;
}

export const Message: FC<messageProps> = ({ message }) => (
    <React.Fragment>
        <div style={toastStyle}>
            <span>{message}</span>
        </div>
        <div style={toastMask} />
    </React.Fragment>
);

const toastStyle: CSSProperties = {
    position: 'fixed',
    top: `${100 / 75}rem`,
    left: 0,
    right: 0,
    zIndex: 1001,
    margin: '0 auto',
    width: '80%',
    padding: `${16 / 75}rem ${32 / 75}rem`,
    color: '#fff',
    fontSize: `${32 / 75}rem`,
    textAlign: 'center',
    borderRadius: '100px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
};

const toastMask: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000
};

export default Message;
