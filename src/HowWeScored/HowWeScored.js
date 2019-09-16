import React from 'react';

import { Transport } from './Transport';
import { UrbanForm } from './UrbanForm';
import { Environment } from './Environment';
import { Competency } from './Competency';

export const HowWeScored = () => (
  <div>
    <Transport />
    <UrbanForm />
    <Environment />
    <Competency />
  </div>
);
