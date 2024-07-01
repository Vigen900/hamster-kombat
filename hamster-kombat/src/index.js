import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Exchange from './components/Exchange';
import Mine from './components/Mine';
import Friends from './components/Friends';
import Earn from './components/Earn';
import Airdrop from './components/Airdrop';

const router = createBrowserRouter([
  {
    path:"/",
    element:(
      <App></App>
    )
  },
  {
    path: "/exchange",
    element: (
      <Exchange></Exchange>
    )
  },
  {
    path: "/mine",
    element:(
      <Mine></Mine>
    )
  },
  {
    path: "/friends",
    element:(
      <Friends></Friends>
    )
  },
  {
    path: "/earn",
    element:(
      <Earn></Earn>
    )
  },
  {
    path: "/airdrop",
    element:(
      <Airdrop></Airdrop>
    )
  }],);

  createRoot(document.getElementById("root")).render(
    <>
      <RouterProvider router={router} />
    </>
  );
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
