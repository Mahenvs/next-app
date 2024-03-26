import * as React from 'react';

interface MailTemplateProps {
  firstName: string;
}

export const MailTemplate: React.FC<Readonly<MailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
