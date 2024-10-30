import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import Socket from "./component/socket.jsx";
import { bootstrap } from "https://cdn.applura.com/dist/js/client/v2.js";

// Bootstrap the Applura client. This should wait for the "DOMContentLoaded" event since the "bootstrap" function
// depends on <link> elements in the document <head>. They provide the URL for the current resource.
const client = bootstrap();
// "Plug" the main application into the Applura client.
const container = document.getElementById("app");
// "Plug" the main application into the Applura client.
const Main = <Socket App={App} client={client} />;
// Launch the application.
ReactDOM.createRoot(container).render(Main);
