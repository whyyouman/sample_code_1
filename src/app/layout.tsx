"use client";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Roboto } from "next/font/google";
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from "../../store/store"
import { PersistGate } from 'redux-persist/integration/react';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <body className={roboto.className}>{children}</body>
        </PersistGate>
      </Provider>
    </html>
  );
}
