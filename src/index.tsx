import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Container} from "./components/Container/Container";
import {TolgeeProvider} from "@tolgee/react";
import {App} from "./app";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <TolgeeProvider
            apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
            apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
            staticData={{
                "de-DE": () => import('./i18n/de-DE.json')
            }}>
            <main className={"flex flex-col"} style={{minHeight: "100vh"}}>
               <Header/>
               <Container>
                   <App/>
               </Container>
               <Footer
                   gitCommit={process.env.GIT_COMMIT || "unknown"}
                   gitBranch={process.env.GIT_BRANCH || "unknown"}
               />
           </main>
        </TolgeeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
