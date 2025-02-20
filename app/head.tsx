import React from 'react';
import { Helmet } from 'react-helmet';


export default function Head() {
    return (
      <Helmet>
        <title>Велизар Златев</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
    );
  }