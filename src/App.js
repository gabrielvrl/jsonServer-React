import React, { useState } from 'react';
import jsonServer from './apis/jsonServer';

const App = async () => {
    const res = await jsonServer.get('/0');
    // console.log(res.data)

    return <h1>Hello world</h1>;
}

export default App;