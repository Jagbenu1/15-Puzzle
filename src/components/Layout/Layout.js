import React from 'react';
import Classes from './Layout.module.scss';

const layout = (props) =>(
    <main className={Classes.Content}>
        {props.children}
    </main>
);

export default layout;