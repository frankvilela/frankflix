import React from 'react';

function ButtonLink(props) {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink; //necessario exportar pra ter acesso fora